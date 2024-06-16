import React from "react";
import { RecoilRoot } from "recoil";
import NewProducts from "./NewProducts";

const NewlyAdded = () => {
  return (
    <>
      <div className="py-10 px-10">
        <NewProducts />
      </div>
    </>
  );
};

export default NewlyAdded;
