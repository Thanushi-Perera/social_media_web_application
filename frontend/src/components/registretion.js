import React from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";

import { Formik } from "formik";
import * as Yup from "yup";

import { Register } from "../controllers/authController";

const Registration = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <Formik
      initialValues={{
        fullname: "",
        username: "",
        email: "",
        password: "",
        capcha: "",
      }}
      validationSchema={Yup.object({
        fullname: Yup.string().required("**required"),
        username: Yup.string().required("**required"),
        email: Yup.string()
          .required("**required")
          .email("need valid email address"),
        password: Yup.string().required("**required"),
        // capcha: Yup.mixed().required("**required"),
      })}
      onSubmit={(values) => {
        console.log(values);
        Register({
          fullName: values.username,
          userName: values.username,
          email: values.email,
          password: values.password,
        }).then((result) => {
          if (result.status) {
            swal({
              title: "Error!",
              text: "Your Account Cannot be Created",
              icon: "error",
              timer: 2000,
              button: false,
            });
          } else {
            swal({
              title: "Success!",
              text: "Congratulations!!! Your Account is Successfully Created",
              icon: "success",
              timer: 2000,
              button: false,
            }).then(function () {
              window.location = "/login";
            });
          }
        });
        values.fullname("");
        values.username("");
        values.email("");
        values.password("");
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <>
          <section className="vh-100" style={{ background: "#eee" }}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div
                    className="card text-black"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">
                            SURGE HUB
                          </p >
                          <p className="text-center h4 fw-italic mb-4 mx-2 mx-md-2 mt-2">Sign up to colloborate with your collegues, professionals and experts</p>
                          <form
                            onSubmit={handleSubmit}
                            className="mx-1 mx-md-4"
                          >
                            
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="col-md-12 mb-1">
                                <label htmlFor="fullname">Full Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="fullname"
                                  name="fullname"
                                  placeholder="Fullname"
                                  value={values.fullname}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors.fullname && touched.fullname ? (
                                  <span>{errors.fullname}</span>
                                ) : null}
                              </div>


                            
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="col-md-12 mb-1">
                                <label htmlFor="username">User name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="username"
                                  name="username"
                                  placeholder="Username"
                                  value={values.username}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors.username && touched.username ? (
                                  <span>{errors.username}</span>
                                ) : null}
                              </div>

                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="col-md-12 mb-1">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  placeholder="you@example.com"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (
                                  <span>{errors.email}</span>
                                ) : null}
                              </div>
                            
                            
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="col-md-12 mb-1">
                                <label htmlFor="password">Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Password"
                                  id="password"
                                  name="password"
                                  value={values.password}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? (
                                  <span>{errors.password}</span>
                                ) : null}
                              </div>
                            
                            <hr className="mb-4" />
                            <div className="row">
                              <div className="col-md-12 mb-12">
                                <ReCAPTCHA
                                  sitekey="6LeExyUkAAAAABdPPLBQmzy2CxmqWSomjy-IxvAn"
                                  onChange={onChange}
                                />
                                ,
                              </div>
                            </div>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                className="btn btn-primary btn-lg btn-block "
                                type="submit"
                              >
                                SIGN UP
                              </button>
                            </div>
                            Do you already have an account?
                            <div className="d-flex justify-content-center mb-5 mx-2 mx-md-2 mt-2 ">
                              <Link to={"/login/"} class="top-bar-link">
                                <button className="btn btn-primary btn-lg btn-block">
                                  {" "}
                                  SIGN IN
                                </button>
                              </Link>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <div className="card">
                            <div className="card-header">
                              <h1>Surge SE Internship March 2023</h1>
                            </div>
                            <div className="card-body">
                              <img
                                src={require("../images/surgehubLogo.jpg")}
                                class="img-fluid"
                                alt="Sample image"
                              />
                            </div>
                            <div className="card-footer">
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
      )}
    </Formik>
  );
};

export default Registration;
