import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const [appointments, setAppointments] = useState([]);
  const [token, setToken] = useState(false);
  const [profile, setProfile] = useState(null);
  const [doctors, setDoctors] = useState([]);

  // doctors.json fetch from public
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error loading doctors.json:", err));
  }, []);

  return (
    <AppContext.Provider
      value={{
        doctors,
        currencySymbol,
        appointments,
        setAppointments,
        token,
        setToken,
        profile,
        setProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
