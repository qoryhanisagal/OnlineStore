import { createContext, useState } from 'react';

// Create the context for user data
export const UserContext = createContext();

// Create the provider component
export function UserProvider({ children }) {
  // State to store user information (username, email)
  const [user, setUser] = useState({
    name: 'Koiree',
    email: 'koiree.descoteaux@icloud.com',
  });

  // Update user profile details
  const updateUser = (newUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };

  // Clear user information (useful for logout)
  const clearUser = () => {
    setUser({ username: '', email: '' });
  };

  // Provide user data and functions to all children
  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Export UserProvider to wrap in index.jsx or App.jsx
export default UserProvider;