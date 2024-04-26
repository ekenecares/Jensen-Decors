import React, { useEffect, useState } from "react";
import "./Loader.css";
import load from "../../images/load.gif"

const Loader = () => {
  const [image, setImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setImage(false);

    }, 4000);
  }, []);

  return (
    <>
      <div>
        {image ? (
          <div className="loadwrap">
            <img className="loadd" src={load} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Loader;
