import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const PledgeForm = (props) => {
  const history = useHistory();
  // const { refreshProjectData } = props;
  const { PledgeProject_id } = useParams();
  const [Pledge, setPledge] = useState({
    PledgeAmount: "",
    PledgeComment: "",
    // PledgeAnonymous: "undefined",
    PledgeProject_id: "id",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledge((prevPledge) => {
      return {
        ...prevPledge,
        [id]: value,
      };
    });
  };
  const postData = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledge/`, {
      method: "post",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Pledge?.amount,
        comment: Pledge?.comment,
        anonymous: Pledge?.anonymous,
        project_id: Pledge?.project_id,
      }),
    });
    // refreshProjectData();
    console.log(response);
    return response.json();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      // console.log('------response from my API --------')
      history.push("/");
    });
  };
  return (
    <div id="pledge-form-container" className="form-container">
      {/* <p className="pagetitle--register" align="center">Create your account</p> */}
      <form id="pledge-form" onSubmit={handleSubmit}>
        <div>
          <label>Pledge Amount:</label>
          <input type="text" id="pledge-amount" onChange={handleChange} />
        </div>
        <div>
          <label>Comment:</label>
          <textarea type="text" id="comment:" onChange={handleChange} />
        </div>
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Pledge Today!
        </button>
      </form>
    </div>
  );
};

export default PledgeForm;
