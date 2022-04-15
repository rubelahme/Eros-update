import React from "react";

const ImageId = (props) => {
  const { img1, img2, img3, img4 } = props.item;
  return (
    <>
      <div className="col-3">
        <img
          className="img-fluid img1"
          src={`data:image/png;base64,${img1}`}
          alt="img1"
        />
      </div>
      <div className="col-3">
        <img
          className="img-fluid img1"
          src={`data:image/png;base64,${img2}`}
          alt="img1"
        />
      </div>
      <div className="col-3">
        <img
          className="img-fluid img1"
          src={`data:image/png;base64,${img3}`}
          alt="img1"
        />
      </div>
      <div className="col-3">
        <img
          className="img-fluid img1"
          src={`data:image/png;base64,${img4}`}
          alt="img1"
        />
      </div>
    </>
  );
};

export default ImageId;
