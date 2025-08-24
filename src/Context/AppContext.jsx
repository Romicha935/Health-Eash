import { createContext, useState } from 'react';
import doctors from '../../public/doctors.json';

export const AppContext = createContext();


const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const [appointments, setAppointments] = useState([]);
   const [token, setToken] = useState(false);
  const [profile, setProfile] = useState(null);

  return (
    <AppContext.Provider value={{ doctors, currencySymbol, appointments, setAppointments , token, setToken, profile, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
