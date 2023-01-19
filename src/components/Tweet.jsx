import { deleteDoc, doc } from "firebase/firestore";
import db from "../../config/firebase";

const Tweet = ({ tweet }) => {
    const delete_tweet = async () => {
        try {
            await deleteDoc(doc(db, "tweets", tweet.id));
        } catch (error) {
            console.log("Error removing document: ", error);
        }
    };

    return (
        <article className="border rounded border-white p-4 shadow w-full">
            <button
                onClick={delete_tweet}
                className="absolute bg-red-500 text-white font-bold right-5 w-6 h-6 text-center"
            >
                X
            </button>
            <h3 className="text-xl font-bold">{tweet.name}</h3>
            <p>{tweet.message}</p>
        </article>
    );
};

export default Tweet;
