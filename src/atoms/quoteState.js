import { atom, selector } from "recoil";

export const basketState = atom({
    key: "basketState", // unique ID (with respect to other atoms/selectors)
    default: {
        items: [],
        name: "blue",
        filteredBy: null,
    }, // default value (aka initial value)
});

export const basketItemsTotal = selector({
    key: "basketItemsTotal", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const basket = get(basketState);

        const totalPrice = basket.items.reduce(
            (total, item) => item.price + total, 0 /* 0 is the initial value */
        );

        return totalPrice;
    },
});
