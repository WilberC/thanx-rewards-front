import { useState, FormEvent } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login(email, password);
            navigate("/profile");
        } catch {
            setError("Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-900">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center text-green-800">Sign In</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                    <button
                        className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-600 disabled:bg-green-400"
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>
                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-green-700 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;