import React from 'react';
import Profile from './page'; // Adjust the path as needed

const UserPage = () => {
  const user = {
    image: null, // Or a URL to an existing image
    name: "John Doe",
    email: "john.doe@example.com",
    links: [
      { name: "GitHub", url: "https://github.com/johndoe" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/johndoe/" }
    ]
  };

  return (
    <div>
      <Profile user={user} />
    </div>
  );
};

export default UserPage;
