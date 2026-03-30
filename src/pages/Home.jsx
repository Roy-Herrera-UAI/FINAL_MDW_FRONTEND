import { useEffect, useState } from "react";
import { getUsers } from "../api/api";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      {users.map((u, i) => (
        <p key={i}>{u.name}</p>
      ))}
    </div>
  );
}

export default Home;