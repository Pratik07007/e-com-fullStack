import React from "react";
import { RecoilRoot } from "recoil";
import NewProducts from "./NewProducts";

const NewlyAdded = () => {
  return (
    <>
      <div className="flex flex-col gap-1 items-start py-10 px-10">
        <RecoilRoot>
          <NewProducts />
        </RecoilRoot>
      </div>
    </>
  );
};

export default NewlyAdded;
