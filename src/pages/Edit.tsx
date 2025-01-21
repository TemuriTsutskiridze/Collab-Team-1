const Edit: React.FC = () => {
  return (
    <>
      <aside></aside>
      <div>
        <h4>Edit Your Profile</h4>
        <form>
          <div>
            <div>
              <label>First Name</label>
              <input />
            </div>
            <div>
              <label>Last Name</label>
              <input />
            </div>
          </div>
          <div>
            <div>
              <label>Emmail</label>
              <input />
            </div>
            <div>
              <label>Address</label>
              <input />
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
