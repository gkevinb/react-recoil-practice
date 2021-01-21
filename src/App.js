import { useRef, useState } from "react";
import "./App.css";
import Message from "./Message"

function App() {
    const [name, setName] = useState("");
    const nameRef = useRef(null)

    const [user, setUser] = useState({
        name: 'Kev',
        age: 26,
        isMale: true
    })

    /* Render */
    const updateText = (e) => {
        console.log("RE-RENDER")
        setName(nameRef.current.value);
    }

    return (
        <div className="app">
            <h1>Let's learn Recoil</h1>
            <input
                ref={nameRef}
                type="text"
            />
            <button onClick={updateText}>Update Name</button>
            <h3>{name}</h3>

            <h2>The user loggin in: {user.name}</h2>
            <Message user={user} />
        </div>
    );
}

export default App;
