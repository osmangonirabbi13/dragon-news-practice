import React, { use } from "react";
import { NavLink } from "react-router";
const caterogyPromice = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(caterogyPromice);
  // console.log(categories);
  return (
    <div>
      <h2 className="font-bold">All Caterogy ({categories.length})</h2>
      <div className="grid grid-cols-1 mt-5">
        {categories.map((caterogy) => (
          <NavLink
            className={
              "btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"
            }
            key={caterogy.id}
            to={`/category/${caterogy.id}`}
          >
            {caterogy.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
