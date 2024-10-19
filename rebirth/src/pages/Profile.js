import React from 'react';

const Profile = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="profile-picture-url" alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          <div style={{ marginLeft: '20px' }}>
            <h2>Full Name</h2>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <h3>Description</h3>
          <p>This is a brief description about the person.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <span>Edit Profile</span>
            <i className="fas fa-pencil-alt" style={{ marginLeft: '5px' }}></i>
          </button>
        </div>
      </div>
      <div style={{ width: '100%', marginTop: '20px', marginLeft: '250px' }}>
        <h3>Resume</h3>
        <p>This is the resume content.</p>
      </div>
      <div style={{ width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'space-between', marginRight: '250px' }}>
        <div style={{ marginLeft: '250px' }}>
          <h3>Certifications</h3>
          <ul>
            <li>Certification 1</li>
            <li>Certification 2</li>
          </ul>
        </div>
        <div style={{ maxWidth: '300px', marginRight: '430px' }}>
          <h3>Skills</h3>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
