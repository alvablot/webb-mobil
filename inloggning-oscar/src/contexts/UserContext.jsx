import { createContext, useContext, useState } from "react";

// 1. createContext
export const UserContext = createContext();

// 2. Exportera Provider
export function UserProvider({ children }) {
  const [data, setData] = useState([
    {
      id: 1,
      quote: "When nothing goes right, go left",
      author: "Aleks",
    },
    {
      id: 2,
      quote: "It is what it is",
      author: "Katerina",
    },
    {
      id: 3,
      quote: "Happy wife happy life",
      author: "Macke",
    },
    {
      id: 4,
      quote: "Jag skriver React, alltså finns jag",
      author: "Petter",
    },
  ])

  function getUser() {
    // fetch
    setData([{}, {}, {}])
  }

  const providerValue = {
    user: data,
    getUser,
  }

  return (
    <UserContext.Provider value={providerValue}>
      { children }
    </UserContext.Provider>
  )
}


// 3. egen useContext-hook
export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext är utanför UserProvidern");
  }

  return context;
}
