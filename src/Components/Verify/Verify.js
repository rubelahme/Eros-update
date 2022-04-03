import React from "react";
import "./Verify.css";
import { useForm } from "react-hook-form";

const Verify = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log("rubel");

  return (
    <>
      <div className="container">
        <div className="text-center p-2 mt-2">
          <p className="verifieds">Let's get you verified</p>
          <p className="identity">
            Before you start, please prepare your identity document <br /> and
            make sure it is valid.
          </p>
          <p className="identity">
            We also require you to agree to our processing of your <br />{" "}
            personal data:
          </p>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue="test" {...register("example")} />
              <input {...register("exampleRequired", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}
              <div>
                <input
                  className="form-check-input btn-check-warning"
                  type="checkbox"
                  value="btn-check-warning"
                  id="flexCheckDefault"
                />
                <label className="identity ps-2" for="flexCheckDefault">
                  <p>
                    <span className="described">
                      I agree to the processing of my personal data, as
                      described
                    </span>{" "}
                    <br />
                    <span>In the Consent to Personal Data Processing</span>
                  </p>{" "}
                </label>
              </div>

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
