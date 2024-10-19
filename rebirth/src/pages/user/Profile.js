// import React from 'react'

// const Profile = () => {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile;





import React, { useEffect, useState } from "react";
import pencil from "../../assets/pencil.png";
import accountProfile from "../../assets/account_circle.png";
import RadarChart from "../../components/radarChart";

const Profile = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currUser, setCurrUser] = useState(0);

    const userSkills = [
        { name: 'Communication', rank: 8 },
        { name: 'Teamwork', rank: 7 },
        { name: 'Problem-solving', rank: 9 },
        { name: 'Adaptability', rank: 6 },
        { name: 'Creativity', rank: 8 }
      ];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3001/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data); // Set the fetched users into state
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;    

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={accountProfile}
            alt="Profile"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <div style={{ marginLeft: "20px" }}>
            <h2>{users[currUser].name}</h2>
            <p>Email: {users[currUser].email}</p>
            <p>Phone: {users[currUser].phone_number}</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginRight: "70px" }}>
          <button onClick={() => {setCurrUser(currUser === 0 ? 1 : 0)}} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
            <span>Edit Profile</span>
            <img src={pencil} alt="Edit" style={{ width: "16px", height: "16px", marginLeft: "5px" }} />
          </button>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "space-between", marginTop: "20px" }}>
        <div style={{ marginLeft: "120px", flex: 1 }}>
          <div>
            <h3>Resume</h3>
            <p>This is the resume content.</p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3>Certifications</h3>
            <ul>
              <li>{users[currUser].courses}</li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: "300px", marginRight: "250px", flex: 1 }}>
          <div>
            <h3>Description</h3>
            <p>
                {currUser === 0 && `Hello, so I'm ${users[currUser].name}. I'm actively looking for jobs, and my languages is ${users[currUser].languages}`}
                {currUser === 1 && `Howdy, my name is ${users[currUser].name} and my languages are ${users[currUser].languages}`}
            </p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3>Skills</h3>
            <ul>
              <li>{users[currUser].skills[0]}</li>
              <li>{users[currUser].skills[1]}</li>
              <li>{users[currUser].skills[2]}</li>
            </ul>
          </div>
        </div>
      </div>

      <RadarChart skillsData={userSkills} />
    </div>
  );
};

export default Profile;