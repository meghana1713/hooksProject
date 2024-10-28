import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
const SingleUserPage = () => {
  const [data, setData] = useState({});
  const param = useParams();
  async function fetchingData(param) {
    try {
      let response = await fetch(`https://reqres.in/api/users/${param.id}`);
      let result = await response.json(); // in result the data will be stored as it is aobject   inside that object we have an key called "data" which is an object again.
      setData(result.data); // 'result.data' contains the user information
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchingData(param);
  }, []); // Add 'id' to the dependency array

  return (
    <div>
      <img src={data.avatar} alt="User avatar" /> {/* Conditional rendering */}
      <p>{data.first_name}</p>
      <Link to="/users">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SingleUserPage;
