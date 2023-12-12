import React, { useEffect } from "react";
import { Link, navigate, useNavigate } from "react-router-dom";

function Protected(props) {
  let Component = props.Component;
  console.log(Component);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate("/");
    }
    // else{
    //   navigate("*");
    // }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
