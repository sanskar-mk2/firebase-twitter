import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirmation) {
            console.log("passwords don't match");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
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
                value={email}
                name="email"
                className="rounded bg-gray-100 p-1"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                value={password}
                className="rounded bg-gray-100 p-1"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                name="password_confirmation"
                className="rounded bg-gray-100 p-1"
                placeholder="confirm password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <input
                type="submit"
                value="Register"
                className="bg-blue-500 rounded px-4 py-1 text-white"
            />
        </form>
    );
}

export default Register;
