import { useState } from "react";
import db from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

function Create() {
    const [text, setText] = useState("");

    const create_tweet = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "tweets"), {
                name: "Apollo",
                message: text,
                createdAt: new Date(),
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.log("Error adding document: ", error);
        }
    };

    return (
        <form
            onSubmit={create_tweet}
            className="w-full flex justify-center gap-4 my-4"
        >
            <textarea
                className="w-full rounded bg-gray-100 p-1"
                placeholder="What's happening?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <input
                type="submit"
                value={"Tweet"}
                className="bg-blue-500 rounded px-4 text-white"
            />
        </form>
    );
}

export default Create;
