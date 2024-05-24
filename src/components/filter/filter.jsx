import React, { useState } from "react";
import "./filter.css";
export const FilterItem = ({ category, setcategory }) => {
  const [active, setactive] = useState("active");
  return (
    <>
      <div className="flex   items-center text-[20px]   p-[25px] ">
        <div className="div-active flex  gap-10 flex-wrap  m-auto">
          <p className="cursor-auto"> filter : </p>
          <p
            onClick={() => setcategory("All")}
            className={category === "All" ? "active" : ""}
          >
            All
          </p>
          <p
            onClick={() => setcategory("phone")}
            className={category === "phone" ? "active" : ""}
          >
            phone
          </p>
          <p
            onClick={() => setcategory("laptop")}
            className={category === "laptop" ? "active" : ""}
          >
            laptop
          </p>
          <p
            onClick={() => setcategory("Camera")}
            className={category === "Camera" ? "active" : ""}
          >
            Camera
          </p>
          <p
            onClick={() => setcategory("clothes")}
            className={category === "clothes" ? "active" : ""}
          >
            clothes
          </p>
          <p
            onClick={() => setcategory("hat")}
            className={category === "hat" ? "active" : ""}
          >
            hat
          </p>
        </div>
      </div>
    </>
  );
};
