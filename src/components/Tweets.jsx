import Tweet from "./Tweet";
import db from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Tweets = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const getTweets = async () => {
            const querySnapshot = await getDocs(collection(db, "tweets"));
            const tweets = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTweets(tweets);
        };
        getTweets();
    }, []);

    return (
        <section className="flex flex-col gap-4 w-full">
            {tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
            ))}
        </section>
    );
};

export default Tweets;
