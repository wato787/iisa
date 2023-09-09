import React from "react";
import Monkey from "../../component/templates/Monkey";

const index = () => {
  return (
    <>
      <div className="relative  flex h-screen  items-center justify-center bg-primary">
        <div className="absolute left-0 top-0 ">
          <Monkey />
        </div>
      </div>
    </>
  );
};

export default index;
