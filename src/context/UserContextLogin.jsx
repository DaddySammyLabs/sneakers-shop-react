import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "Daddy Sammy",
  });

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
};

// Использование:
// const Profile = () => {
//   const { user, logout } = useUser();

//   if (!user) {
//     return <p>Not authorized</p>;
//   }

//   return (
//     <div>
//       <h1>Hello, {user.username}</h1>

//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// А если нужно изменить пользователя:
// const { user, setUser } = useUser();

// setUser({
//   ...user,
//   username: "New Name",
// });
