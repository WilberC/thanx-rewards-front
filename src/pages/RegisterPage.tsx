import {useState, FormEvent} from "react";
import {useAuth} from "../context/AuthContext";
import {useNavigate, Link} from "react-router-dom";

const RegisterPage = () => {
    const {signup} = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            await signup(name, email, password);
            navigate("/profile");
        } catch {
            setError("Failed to register. Try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-900">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center text-green-800">Sign Up</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 border rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-600">
                        Sign Up
                    </button>
                </form>
                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-700 hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;