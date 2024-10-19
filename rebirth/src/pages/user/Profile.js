import React, {useEffect, useState} from 'react'; 
const Profile = () => {
  const[profile, setProfile] = useState(null); 

  useEffect(() => {
    fetch('http://localhost:3001/users/jonathanswift@gmail.com')
    .then((response)=> response.json())
    .then((data) => setProfile(data))
    .catch((error) => console.error('Error fetching profile:', error)); 
  }, []);

  return (
    <div className = "profie-container">
     <h1>Profile</h1> 
    {profile ? (
      <div> 
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email</strong> {profile.email}</p>
      </div>
    ) : ( 
      <p> Loading profile...</p>
      )}
      </div> 
  );
};

export default Profile;