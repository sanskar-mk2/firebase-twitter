import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

function AuthCard() {
    const [is_login, set_is_login] = useState(true);

    return (
        <div className="flex flex-col items-center w-full">
            {is_login ? <Login /> : <Register />}
            <button onClick={() => set_is_login(!is_login)}>
                {is_login
                    ? "Need to create an account?"
                    : "Already have an account?"}
            </button>
        </div>
    );
}

export default AuthCard;
