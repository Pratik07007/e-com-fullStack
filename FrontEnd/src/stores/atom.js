import { atom, selector } from "recoil";

export const newlyAddedProductsAtom = atom({
  key: "newlyAddedProductsAtom",
  default: selector({
    key: "newlyAddedProductsSelector",
    get: async () => {
      try {
        const res = await fetch("http://localhost:3000/newlyadded");
        const good = await res.json();
        return good.products;
      } catch (error) {
        return [];
      }
    },
  }),
});

export const productDetails=atom
