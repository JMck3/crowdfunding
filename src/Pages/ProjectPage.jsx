// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { oneProject } from "../data";

// function ProjectPage() {
//   const [projectData, setProjectData] = useState({ pledges: [] });
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
//       .then((results) => {
//         return results.json();
//       })
//       .then((data) => {
//         setProjectData(data);
//       });
//   }, []);

//   const formattedDate = new Date(projectData?.date_created).toDateString();

//   return (
//     <div>
//       <h2>{projectData?.title}</h2>
//       <h3>Created at: {formattedDate}</h3>
//       <h3>{`Status: ${projectData.is_open}`}</h3>
//       <h3>Pledges:</h3>
//       <ul>
//         {projectData.pledges.map((pledgeData, key) => {
//           return (
//             <li>
//               {pledgeData.amount} from {pledgeData.supporter}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default ProjectPage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { id: project_id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
    getUsers();
  }, [project_id]);

  // What can we edit?
  /*
    title
    description
    goal
    image
    is_open
  */

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log("We are updating the ", id, " to be: ", value);
    setProjectData({
      ...projectData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(
      `
      ${process.env.REACT_APP_API_URL}projects/${project_id}`,
      {
        method: "put",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: projectData.title,
          description: projectData.description,
          amount: projectData.amount,
          image: projectData.image,
          is_open: projectData.is_open,
        }),
      }
    );
    setIsEditing(false);
  };

  const getUsers = async () => {
    const userData = await fetch(`${process.env.REACT_APP_API_URL}users`);
    setUsers(await userData.json());
  };

  const ReadProject = () => {
    console.log(users);
    return (
      <div>
        <h1>{projectData.title}</h1>
        <h2>{projectData.description}</h2>
        <h3>Created at: {new Date(projectData.date_created).toDateString()}</h3>
        <h3>{`Is Open to pledges: ${projectData.is_open}`}</h3>
        <h3>Pledges:</h3>
        <ul>
          {projectData.pledges.map((pledgeData, key) => {
            return (
              <li key={key}>
                {pledgeData.amount} from{" "}
                {users &&
                  users.find((u) => u.id == pledgeData.supporter).username}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {localStorage.getItem("token") && isEditing === false && (
        <button onClick={() => setIsEditing(true)}>Edit Project</button>
      )}
      <div>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                value={projectData.title}
                type="text"
                id="title"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <input
                value={projectData.description}
                type="text"
                id="description"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="goal">Goal:</label>
              <input
                value={projectData.amount}
                type="text"
                id="amount"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input
                value={projectData.image}
                type="text"
                id="image"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="is_open">Open:</label>
              <input
                value={projectData.is_open}
                type="text"
                id="is_open"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
          <ReadProject />
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
