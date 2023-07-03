import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function AddSchool() {
  const [schoolName, setSchoolName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <br />

      <section className="vh-100">
        {/* <div style={{background: "blue"}}> */}
        <div className="container h-200">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className=" h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                        Add School
                      </p>
                      {/* <p className=" mb-3 mx-1 mx-md-4 mt-4">
                        Please use the search bar above to make sure that the
                        professor does not already exist at this school.
                      </p> */}

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline form-floating flex-fill mb-1">
                            {/* <i className="zmdi zmdi-account"></i> */}
                            <input
                              type="text"
                              id="floatingInput"
                              className="form-control form-control-lg"
                              placeholder="School Name"
                              value={schoolName}
                              onChange={(e) => setSchoolName(e.target.value)}
                            />
                            <label className="form-label" for="floatinginput">
                              School Name
                            </label>
                          </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4 ">
                            <div className="form-outline flex-fill mb-1 ">
                              <select
                                className="select form-select form-control form-control-lg py-3"
                                aria-label="Default select example"
                                placeholder="Country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value) }
                              >
                                <option selected>Country</option>
                                <option value="1">CSE</option>
                                <option value="2">ECE</option>
                                <option value="3">BIO</option>
                                <option value="4">SSH</option>
                              </select>
                              {/* <label className="form-label" for="floatinginput">Select Department</label> */}
                            </div>
                          </div>
            

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline form-floating flex-fill mb-1">
                            {/* <i className="zmdi zmdi-email"></i> */}
                            <input
                              type="text"
                              id="floatingInput"
                              className="form-control form-control-lg"
                              placeholder="State"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                            />
                            <label className="form-label" for="floatinginput">
                              State
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline form-floating flex-fill mb-1">
                            {/* <i className="zmdi zmdi-lock"></i> */}
                            <input
                              type="text"
                              id="floatingInput"
                              className="form-control form-control-lg"
                              placeholder="city"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                            <label className="form-label" for="floatinginput">
                              City
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline form-floating flex-fill mb-1">
                            {/* <i className="zmdi zmdi-lock"></i> */}
                            <input
                              type="url"
                              id="floatingInput"
                              className="form-control form-control-lg"
                              placeholder="Website"
                              value={website}
                              onChange={(e) => setWebsite(e.target.value)}
                            />
                            <label className="form-label" for="floatinginput">
                              Website
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline form-floating flex-fill mb-1">
                            {/* <i className="zmdi zmdi-lock"></i> */}
                            <input
                              type="email"
                              id="floatingInput"
                              className="form-control form-control-lg"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="form-label" for="floatinginput">
                              Email Address
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            I agree to the
                            <a href="#!">Terms of Use and Privacy Policy</a>
                          </label>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Add
                          </button>
                          {/* <p className="small fw-bold mt-2 pt-1 mb-0">
                            \
                          </p> */}
                        </div>
                      </form>
                    </div>
                    {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      /> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
