import { useState } from "react";
import img_corazon from "../img/img_corazon.png";
import { useUserContext } from "./context/user-context";



function Posts({ date , actor, descripcion, comentarios, im, likes }) {
  
  const [tick, setTick] = useState(likes);
  //const value = useUserContext();
  
  const handleClick = () => {
    let counter = likes;
    counter += 1;
    setTick(tick+1);
  };
  return (
    <div className="container" style={{ paddingBottom: "20px" }}>
      <div className="row">
        <div className="card col-12 col-sm-12">
          <img
            src={im}
            className="card-img-top"
            style={{ paddingTop: "10px" }}
            alt="Post 1"
          />
          <div className="card-body container">
            <div className="row">
              <div className="col-6 col-sm-3">
                <h6 className="card-title">{date}</h6>
              </div>
              <div className="col-6 col-sm-3" style={{ textAlign: "right" }}>
                <a
                  className="navbar-brand btn btn-danger"
                  href="#"
                  style={{ color: "#fafafa" }}
                  onClick={handleClick}
                >
                  <img src={img_corazon} alt="" width="30" height="24" />
                  {tick}K
                </a>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title autor">@{actor}</h5>
            <p className="card-text fw-light" style={{ textAlign: "justify" }}>
              {descripcion}
            </p>
          </div>
          <div className="card-footer">
            <i className="fa-thin fa-comment">Comments ({comentarios})</i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
