import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const Navbar = () => {
    const {user, logout} = useAuth();

    return (
        <nav className="bg-green-700 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">☕ Rewards</h1>
            <div>
                {user ? (
                    <>
                        <Link to="/rewards" className="mr-4">Rewards</Link>
                        <Link to="/profile" className="mr-4">Profile</Link>
                        <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;