import { atom, selector } from "recoil";

export const userState = atom({
    key: "userState", // unique ID (with respect to other atoms/selectors)
    default: {
        name: "Guest",
        age: 0,
        isMale: true,
    }, // default value (aka initial value)
});
