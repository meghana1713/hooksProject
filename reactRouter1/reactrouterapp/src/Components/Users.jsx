import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [data, setData] = useState([]);

  async function fetchingData() {
    try {
      let response = await fetch(`https://reqres.in/api/users?page=2`);
      let result = await response.json();
      setData(result.data || []); // Use 'result' to avoid name conflict
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <h1>User Page</h1>
      <div>
        {data.map((user) => (
          <div key={user.id} style={{border:"1px solid white", margin:"10px"}}>
            <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
            <Link to={`${user.id}`}>{user.first_name}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
