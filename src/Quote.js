import React from "react";
import { useRecoilValue } from "recoil";
import { currentQuoteQuery } from "./atoms/quoteState";

function Quote() {
    const quote = useRecoilValue(currentQuoteQuery);

    return (
        <div>
            <h1>{quote.text}</h1>
            <h1>{quote.author}</h1>
        </div>
    );
}

export default Quote;
