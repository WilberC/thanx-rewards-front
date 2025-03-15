import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from './App.tsx';
import {AuthProvider} from "./context/AuthContext";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    </React.StrictMode>
);