import React, { useState } from "react";
import "./Verify.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageItem, setImageItem] = useState(null);
  const [imageItemed, setImageItemed] = useState(null);
  const [imageItems, setImageItems] = useState(null);

  let navigate = useNavigate();

  const onSubmit = (data) => {
    const ImageItemData = {
      img1: imageItem,
      img3: imageItems,
      img2: imageItemed,
    };
    fetch("https://shrouded-beach-70099.herokuapp.com/images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ImageItemData),
    })
      .then((res) => res.json())
      .then((result) => navigate("/IdVerify"));
  };
  const ImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "3b61f7918dc1a39c2999937d1c16a97d");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageItem(response.data.data.image.url);
      })
      .catch(function (error) {
        console.log("ahmed");
      });
  };

  const ImageUploads = (event) => {
    const imageData = new FormData();
    imageData.set("key", "3b61f7918dc1a39c2999937d1c16a97d");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageItems(response.data.data.image.url);
      })
      .catch(function (error) {
        console.log("ahmed");
      });
  };

  const ImageUploaded = (event) => {
    const imageData = new FormData();
    imageData.set("key", "3b61f7918dc1a39c2999937d1c16a97d");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageItemed(response.data.data.image.url);
      })
      .catch(function (error) {
        console.log("ahmed");
      });
  };

  return (
    <>
      <div className="container text-center">
        <div className="mt-2">
          <p className="verifieds">Let's get you verified</p>
          <p className="identity">
            Before you start, please prepare your identity document and make
            sure it is valid.
          </p>
          <p className="identity">
            We also require you to agree to our processing of your personal
            data:
          </p>
          <h6 className="text-danger mt-4 mb-1 pb-0">
            ID card, Passport, Residence permit, Driver's license
          </h6>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className="p-0 mb-1 UploadData">
                Upload or take a front picture of your Government ID on a flat
                surface*
              </p>
              <div className="text-center">
                <input
                  className=" DefaultFile"
                  type={"file"}
                  {...register("exampleReq", { required: true })}
                  onChange={ImageUpload}
                />
              </div>
            </div>
            <div>
              <p className="p-0 mb-1 UploadData">
                Upload or take a back picture of your Government ID on a flat
                surface*
              </p>
              <input
                className=" DefaultFile"
                type={"file"}
                {...register("example", { required: true })}
                onChange={ImageUploads}
              />
            </div>
            <div>
              <p className="p-0 mb-1 UploadData">
                Upload or take a selfie of your Government ID on a flat surface*
              </p>
              <input
                className=" DefaultFile"
                type={"file"}
                {...register("exampleRequired", { required: true })}
                onChange={ImageUploaded}
              />
            </div>
            <div>
              <input
                class="form-check-input  RememberId "
                type="checkbox"
                id="flexCheckDefault"
                {...register("exam", { required: true })}
              />
              <span class="ps-2" for="flexCheckDefault">
                I agree to the processing of my personal data, as described in
                <span className="text-danger ps-1 Processing">
                  the consent to Personal Data Processing
                </span>
              </span>
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="text-center pt-4">
              <input
                className="btn btn-danger LoginData"
                type="submit"
                value={"Login"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Verify;
