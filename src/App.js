// import { useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { basketItemsTotal, basketState } from "./atoms/basketState";
import { userState } from "./atoms/userState";
import Message from "./Message";
import Product from "./Product";

function App() {
    const [user, setUser] = useRecoilState(userState);
    const [basket, setBastket] = useRecoilState(basketState);
    const total = useRecoilValue(basketItemsTotal)

    const login = (e) => {
        setUser({
            name: "Kevin",
            age: 26,
            isMale: true,
        });
    };

    return (
        <div className="app">
            <h1>Let's learn Recoil</h1>

            <h2>The user loggin in: {user.name}</h2>
            <Message />
            <button onClick={login}>Login</button>

            <h4>You have {basket.items.length} item in your basket</h4>
            <h5>The total value will be: {total}</h5>

            <Product id={343} title="Iphone" price={199.99} />
            <Product id={123} title="Samsung" price={299.99} />
            <Product id={555} title="Nokia" price={99.99} />
        </div>
    );
}

export default App;
