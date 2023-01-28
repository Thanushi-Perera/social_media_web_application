import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8060/post/all")
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(post);
  return (
    <MDBRow>
      <MDBCol md="2">
        <div className="logo">
          <img
            src={require("../images/surgehubLogo.jpg")}
            alt="image"
            style={{ width: "75%", marginLeft: "30px", marginTop: "30px" }}
          />
        </div>
      </MDBCol>
      <MDBCol md="8">
        {post.map((item) => (
          <div key={item.id}>
            <div className="card">
              <img
                src={item.url}
                alt=""
                style={{ width: "85%", margin: "auto" }}
              />
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    style={{ marginLeft: "80px", width: "50%" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-suit-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                    </svg>

                    <div>{item.count}</div>
                  </button>
                </div>
                <div className="col-4">
                  <h3 style={{ textAlign: "center" }}>{item.title}</h3>
                </div>
                <div className="col-4"></div>
              </div>
            </div>
          </div>
        ))}
      </MDBCol>
      <MDBCol md="2">
        <p>profile info</p>
      </MDBCol>
    </MDBRow>
  );
};

export default Post;
