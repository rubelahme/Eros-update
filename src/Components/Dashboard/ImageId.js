import React from "react";

const ImageId = (props) => {
  const { img1, img2, img3 } = props.item;
  return (
    <>
      <div className="col-4">
        <img className="img-fluid img1" src={img1} alt="" />
      </div>
      <div className="col-4">
        <img className="img-fluid img1" src={img2} alt="" />
      </div>
      <div className="col-4">
        <img className="img-fluid img1" src={img3} alt="" />
      </div>
    </>
  );
};

export default ImageId;
