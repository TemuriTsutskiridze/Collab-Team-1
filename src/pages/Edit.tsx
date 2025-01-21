import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface IUser {
  name: string | null;
  lastName: string | null;
  email: string | null;
  address: string | null;
  password: string | null;
}

const Edit: React.FC = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;
      try {
        const response = await fetch(`http://localhost:3001/${userId}`);
        if (!response.ok) throw new Error("User not found.");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log("User has not found.");
      }
    };
    fetchUserData();
  }, [userId]);

  const userData = async (newUser: IUser) => {
    if (!newUser) return;

    try {
      const response = await fetch(`http://localhost:3001/${newUser.name}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("No results!");
      }
      navigate("/SignIn");
    } catch (error) {
      console.log("User already exist.");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (user) {
      userData(user);
    }
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <>
      <aside></aside>
      <div>
        <h4>Edit Your Profile</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>First Name</label>
              <input
                type="text"
                value={user?.name || ""}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                value={user?.lastName || ""}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Email</label>
              <input
                type="text"
                value={user?.email || ""}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <label>Address</label>
              <input
                type="text"
                value={user?.address || ""}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label>Password Changes</label>
            <input type="text" placeholder="Current Password" />
            <input type="text" placeholder="New Password" />
            <input type="text" placeholder="Confirm Password" />
          </div>
          <div>
            <div>Cancel</div>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
