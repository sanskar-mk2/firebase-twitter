import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuthContext } from "../hooks/useAuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useAuthContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: { user: user } });
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            <input
                type="text"
                name="email"
                className="rounded bg-gray-100 p-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                name="password"
                className="rounded bg-gray-100 p-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <input
                type="submit"
                className="bg-blue-500 rounded px-4 py-1 text-white"
                value="Login"
            />
        </form>
    );
}

export default Login;
