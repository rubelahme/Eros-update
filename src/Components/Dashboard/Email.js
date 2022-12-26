import React, { useEffect, useState } from "react";
import ImageId from "./ImageId";

const Email = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://erosservive.onrender.com/image")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  console.log(item);

  return (
    <div>
      <div className="container">
        <div className="row">
          {item.map((id) => (
            <ImageId item={id}></ImageId>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Email;
