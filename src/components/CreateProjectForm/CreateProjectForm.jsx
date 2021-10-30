import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const CreateProjectForm = () => {
  const history = useHistory();
  const [projectInfo, setProjectInfo] = useState({
    projectTitle: "",
    projectDescription: "",
    projectGoal: "",
    projectImage: "",
    projectIsOpen: "",
  });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setProjectInfo((prevProject) => {
      return {
        ...prevProject,
        [id]: value,
      };
    });
  };
  const postData = async () => {
    console.log("Im posting a project to your API");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectInfo),
      }
    );
    return response.json();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("token")) {
      postData().then((response) => {
        console.log("response from our API ----------------", response);
        //         // window.localStorage.setItem("token", response.token);
        //         // history.push("/");
      });
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="title">Project Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter project name"
          // onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Project Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          // onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Goal">Project Goal:</label>
        <input
          type="text"
          id="Goal"
          placeholder="Goal"
          // onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Image">Project Image:</label>
        <input
          type="text"
          id="Image"
          placeholder="Image"
          // onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="is_open">Project Is Open?</label>
        <input
          type="text"
          id="is_open"
          placeholder="Is Open"
          // onChange={handleChange}
        />
      </div>
      <button type="submit">Submit New Project</button>
    </form>
  );
};
export default CreateProjectForm;
