import React, {useEffect,useState} from 'react'

function Github() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/UrvishaGangani")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  if(!user) return <p>Loading...</p>;
  return (
    <div className="p-5 bg-gray-800 text-white rounded-lg w-80 mx-auto text-center">
      <h1 className="text-4xl text-center font-bold">Your Followers :</h1>
      <img
        src={user.avatar_url}
        alt="GitHub Avatar"
        className="w-24 h-24 mx-auto rounded-full"
      />
      <h2 className="text-xl font-bold mt-4">{user.name}</h2>
      <p className="text-gray-300">{user.bio}</p>

      <div className="mt-4">
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Public Repos: {user.public_repos}</p>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Visit GitHub
      </a>
    </div>
  );
}

export default Github