import React from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Login } from "../controllers/authController";

const LoginUser = () => {
  const onChange = (value) => {
    console.log(value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("**required").email(),
      password: Yup.string().required("**required"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      Login({
        email: values.email,
        password: values.password,
      })
        .then((response) => {
          return response.data;
        })
        .then((item) => {
          console.log("********************************")
          console.log(item.data)
          console.log("********************************")
          if (item.data === "") {
            console.log("1");
            swal({
              title: "Error!",
              text: "Log in Error ",
              icon: "error",
              timer: 2000,
              button: false,
            });
          } else {
            swal({
              title: "success!",
              text: "Your have Successfully Logged In",
              icon: "success",
              timer: 2000,
              button: false,
            }).then(function () {
              window.location = "/post";
            });
          }
        })
        .catch((error) => {
          console.log(`2`);
          swal({
            title: "Error!",
            text: "Log in Error ",
            icon: "error",
            timer: 2000,
            button: false,
          });
        });
      //.then((result) => {
      //   if (result.status) {
      //      console.log(result)

      //   } else {
      //     swal({
      //       title: "Error!",
      //       text: "Log in Error ",
      //       icon: "error",
      //       timer: 2000,
      //       button: false,
      //     }).then(function(){
      //       window.location = '/post'
      //     })
      //   }
      // });
    },
  });
  return (
    <>
      <section className="vh-100" style={{ background: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className=" h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        SURGE HUB
                      </p>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="col-md-12 mb-3">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email Address"
                            aria-describedby="emailHelp"
                            {...formik.getFieldProps("email")}
                          />
                          {formik.errors.email && formik.touched.email ? (
                            <span>{formik.errors.email}</span>
                          ) : null}
                        </div>
                        <div className="col-md-12 mb-3">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            {...formik.getFieldProps("password")}
                          />
                          {formik.errors.password && formik.touched.password ? (
                            <span>{formik.errors.password}</span>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <ReCAPTCHA
                            sitekey="6LeExyUkAAAAABdPPLBQmzy2CxmqWSomjy-IxvAn"
                            onChange={onChange}
                          />
                          ,
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 ">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                          >
                            SUBMIT
                          </button>
                        </div>
                        Don't you have an account?
                        <div className="d-flex justify-content-center mb-5 mx-1 mx-md-4 mt-4">
                          <Link to={"/"} className="top-bar-link">
                            <button className="btn btn-primary btn-lg btn-block">
                              {" "}
                              SIGN UP
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <div className="card">
                        <div className="card-header">
                          <h1>Surge SE Intership March 2023</h1>
                          
                        </div>
                        <div className="card-body">
                          <img
                            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            src={require("../images/surgehubLogo.jpg")}
                            class="img-fluid"
                            alt="Sample image"
                          />
                        </div>
                        <div className="card-footer fw-bold">
                          <h3>Thanushi Perera</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginUser;
