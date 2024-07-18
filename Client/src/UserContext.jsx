import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    axios
      .get("/profile")
      .then((response) => {
        console.log(response.data);
        setId(response.data.userId);
        setUsername(response.data.username);
        // console.log("userContext res data:", response.data);
      })
      .catch((error) => {
        console.error("userContext Error:", error);
      });
    console.log("useEffect in userContext ran");
  }, []);
  console.log("logged in userId ", id);
  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
