import { useEffect, useState } from "react";
import { getUsers } from "../api/api";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!users.length) return <p>No users found.</p>;

  return (
    <div>
      {users.map((u) => (
        <p key={u._id}>{u.name}</p>
      ))}
    </div>
  );
}

export default Home;