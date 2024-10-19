// import React from 'react'

// const Profile = () => {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile;





import React from "react";
import pencil from "../assets/pencil.png";
import accountProfile from "../assets/account_circle.png";

const Profile = () => {
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
            <h2>Full Name</h2>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginRight: "70px" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
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
              <li>Certification 1</li>
              <li>Certification 2</li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: "300px", marginRight: "250px", flex: 1 }}>
          <div>
            <h3>Description</h3>
            <p>This is a brief description about the person.</p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3>Skills</h3>
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "150px" }}>
        <h3>My Applications</h3>
        <div style={{ maxHeight: "200px", overflowY: "scroll", border: "1px solid #ccc", padding: "10px" }}>
          <ul className="flex flex-col gap-4">
            <li>
              <div style={{ background: "#f0f0f0", borderRadius: "8px", padding: "10px" }}>
                Application 1
              </div>
            </li>
            <li>
              <div style={{ background: "#f0f0f0", borderRadius: "8px", padding: "10px" }}>
                Application 2
              </div>
            </li>
            <li>
              <div style={{ background: "#f0f0f0", borderRadius: "8px", padding: "10px" }}>
                Application 3
              </div>
            </li>
            <li>
              <div style={{ background: "#f0f0f0", borderRadius: "8px", padding: "10px" }}>
                Application 4
              </div>
            </li>
            <li>
              <div style={{ background: "#f0f0f0", borderRadius: "8px", padding: "10px" }}>
                Application 5
              </div>
            </li>
            <li>
              <div style={{ background: "#f0f0f0", borderRadius: "8px", padding: "10px" }}>
                Application 6
              </div>
            </li>
            <li>
              <div style={{ background: "#f0f0f0", borderRadius: "8px", padding: "10px" }}>
                Application 7
              </div>
            </li>
            <li>
              <div style={{ background: "#f0f0f0", borderRadius: "8px", padding: "10px" }}>
                Application 8
              </div>
            </li>
            <li>
              <div style={{ background: "#f0f0f0", borderRadius: "8px", padding: "10px" }}>
                Application 9
              </div>
            </li>
            <li>
              <div style={{ background: "#f0f0f0", borderRadius: "8px", padding: "10px" }}>
                Application 10
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;