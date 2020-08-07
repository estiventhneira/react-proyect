import React from "react";
import Md5 from "md5";

function Gravatar(props) {
  const email = props.email;
  let hashmd5 = Md5(email);
  return (
    <React.Fragment>
      <img
        className="card-img"
        src={`https://www.gravatar.com/avatar/${hashmd5}?d=identicon`}
        alt="Avatar"
      />
    </React.Fragment>
  );
}

export default Gravatar;
