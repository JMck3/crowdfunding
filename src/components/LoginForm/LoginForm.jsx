// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// function LoginForm() {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });
//   const history = useHistory();

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setCredentials((prevCredentials) => ({
//       ...prevCredentials,
//       [id]: value,
//     }));
//   };

//   const postData = async () => {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}api-token-auth/`,
//       {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       }
//     );
//     return response.json();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (credentials.username && credentials.password) {
//       postData()
//         .then((response) => {
//           console.log("this is my response", response);
//           window.localStorage.setItem("token", response.token);
//           history.push("/");
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   return (
//     <form>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           placeholder="Enter username"
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit" onClick={handleSubmit}>
//         Login
//       </button>
//     </form>
//   );
// }

// export default LoginForm;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        [id]: value,
      };
    });
  };

  const postData = async () => {
    console.log("Im logging in");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        window.location = `${window.location.origin}/`;
        // history.push("/");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
