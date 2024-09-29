import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
//import AppContext from '../src/Context/AppContext.jsx'
import AppContextProvider from './Context/AppContext';

createRoot(document.getElementById('root')).render(
<StrictMode>


<AppContextProvider>
<BrowserRouter>

<App/>

</BrowserRouter>,
</AppContextProvider>

</StrictMode>
)
