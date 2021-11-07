import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/createproject">Create Project</Link>
    </nav>
  );
}

export default Nav;

// These are our NPM modules from https://npmjs.com/
// import React from "react";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   const token = window.localStorage.getItem("token");
//   return (
//     <nav style={{ display: "flex", justifyContent: "space-between" }}>
//       <Link to="/"> Home </Link>
//       {token ? (
//         <button onClick={() => window.localStorage.clear()}>Log Out</button>
//       ) : (
//         <div>
//           <Link to="/register"> Register </Link>
//           <Link to="/login"> Login </Link>
//           <Link to="/create"> Create Project</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;
