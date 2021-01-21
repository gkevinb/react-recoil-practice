import { atom, selector } from "recoil";

export const currentQuoteQuery = selector({
    key: "currentQuote", // unique ID (with respect to other atoms/selectors)
    get: async ({ get }) => {
        const response = await fetch('https://type.fit/api/quotes')
        const data = await response.json(); // [{}, {}, {}]
        const quote = data[Math.floor(Math.random() * Math.floor(data.length))] // {}


        return quote;
    },
});
