import { useEffect } from "react";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const newlyAddedProductsAtom = atom({
  key: "newlyAddedProductsAtom",
  default: selector({
    key: "newlyAddedProductsSelector",
    get: async () => {
      try {
        const res = await fetch("http://localhost:3000/newlyAdded");
        const good = await res.json();
        return good.products;
      } catch (error) {
        return [];
      }
    },
  }),
});


export const productDetailsAtomFamily = atomFamily({
  key: "productDetailsAtomFamily",
  default: selectorFamily({
    key: "productDetailsSelectorFamily",
    get: (id) => async () => {
      try {
        const raw = await fetch(`http://localhost:3000/product/${id}`);
        const good = await raw.json();
        return good.product;
      } catch (error) {
        console.error('Error fetching product details:', error);
        return undefined;
      }
    },
  }),
});

