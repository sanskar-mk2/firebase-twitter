import Create from "./components/Create";
import Tweets from "./components/Tweets";

function App() {
    return (
        <main className="flex min-h-screen bg-blue-200 items-center p-2 flex-col">
            <h2>
                <span className="font-bold text-2xl">Twitter</span>, without
                Elon
            </h2>
            <Create />
            <Tweets />
        </main>
    );
}

export default App;
