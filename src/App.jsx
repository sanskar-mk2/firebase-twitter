import Create from "./components/Create";
import Tweets from "./components/Tweets";
import AuthCard from "./components/AuthCard";
import { useAuthContext } from "./hooks/useAuthContext";
import { useEffect } from "react";

function App() {
    const { user } = useAuthContext();
    useEffect(() => {
        console.log(user);
    }, [user]);
    return (
        <main className="flex min-h-screen bg-blue-200 items-center p-2 flex-col">
            <small>Logged In As: {user ? user.user.email : ""}</small>
            <h2>
                <span className="font-bold text-2xl">Twitter</span>, without
                Elon
            </h2>
            <AuthCard />
            <Create />
            <Tweets />
        </main>
    );
}

export default App;
