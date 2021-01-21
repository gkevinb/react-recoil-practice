import { atom, selector, selectorFamily } from "recoil";

export const basketState = atom({
    key: "basketState", // unique ID (with respect to other atoms/selectors)
    default: {
        items: [],
        name: "blue",
        filteredBy: null,
    }, // default value (aka initial value)
});

export const basketItemsTotal = selectorFamily({ /* selectorFamily is used when sending in options */
    key: "basketItemsTotal", // unique ID (with respect to other atoms/selectors)
    get: options => ({ get }) => {
        const basket = get(basketState);

        let totalPrice = basket.items.reduce(
            (total, item) => item.price + total, 0 /* 0 is the initial value */
        );

        if(options.addTax){
            totalPrice = totalPrice * 1.2; // 20%
        }

        return totalPrice;
    },
});
