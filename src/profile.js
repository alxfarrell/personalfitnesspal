import React from 'react';

function Profile() {
  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <p>Name: Bobby Lee</p>
      <p>Email: bobbert28@gmail.com</p>
      <p>Workouts: Squats</p>
      <h4>Want to create a new workout?</h4>
      <form method="post">
            <div>
                <label>Name of workout: </label>
                <input type="text" name="name" required />
            </div>
            <div>
                <label>Video Link: </label>
                <input type="url" name="website" />
            </div>
                <label>Decription: </label>
                <input type="text" name="description" required style={{ width: '200px', height: '60px' }} />
            <div>
                <button type="submit">Upload</button>
            </div>
        </form>
    </div>
  );
}

export default Profile;