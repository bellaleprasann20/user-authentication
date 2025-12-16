import React from "react";
import Layout from "../components/Layout";

const Profile = () => {
  return (
    <Layout>
      <div className="auth-card">
        <h2>Profile</h2>
        <p>You are logged in 🎉</p>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default Profile;
