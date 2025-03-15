import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {useAuth} from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RewardsPage from "./pages/RewardsPage";
import MainLayout from "./layouts/MainLayout";
import {ReactNode} from "react";
import RegisterPage from "./pages/RegisterPage.tsx";

const PrivateRoute = ({children}: { children: ReactNode }) => {
    const {user} = useAuth();
    return user ? children : <Navigate to="/login"/>;
};

const AppRouter = () => {
    const {token} = useAuth();

    return (
        <Router>
            <Routes>
                {/* Redirect "/" to "/profile" if token exists */}
                <Route path="/" element={token ? <Navigate to="/profile"/> : <Navigate to="/login"/>}/>

                {/* Public Route (Login) */}
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>

                {/* Protected Routes (Wrapped in MainLayout) */}
                <Route element={<MainLayout/>}>
                    <Route path="/profile" element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>
                    <Route path="/rewards" element={<PrivateRoute><RewardsPage/></PrivateRoute>}/>
                </Route>

                {/* Redirect unknown routes */}
                <Route path="*" element={<Navigate to="/profile"/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;