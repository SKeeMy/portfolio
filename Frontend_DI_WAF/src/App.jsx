import './App.css';
import "typeface-poppins"
import "@fontsource/rubik"
import Sidebar from './components/SideBar/Sidebar';
import { Suspense } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Monitoring from './components/Pages/Monitoring/Monitoring';
import Settings from './components/Pages/Settings/Settings';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import ConfigTable from './components/Pages/Configuration/Table/Table';
import { API_HOSTS, API_RSETS } from './constants/api';
import ConfigEntryContent from './components/Pages/Configuration/Table/Entry';

function App() {
    return (
        <BrowserRouter>
            <div className='main'>
                <Suspense fallback={<div className='App_Load'>{"Loading"}</div>} >
                    <Header />
                    <div className='full_content'>
                        <Sidebar />
                        <div className='container'>
                            <Routes>
                                <Route path='/monitoring' element={<Monitoring />} />
                                <Route path='/settings' element={<Settings />} />

                                <Route path='/config/rproxy/hosts' element={<ConfigTable apiEndpoint={API_HOSTS} />} />
                                <Route path='/config/rproxy/hosts/:id' element={<ConfigEntryContent apiEndpoint={API_HOSTS}  />} />

                                <Route path='/config/waf/rulesets' element={<ConfigTable apiEndpoint={API_RSETS} />} />
                                <Route path={'/config/waf/rulesets/:id'} element={<ConfigEntryContent apiEndpoint={API_RSETS} />} />
                            </Routes>
                            <Routes>
                                <Route path='/' element={<Navigate to='/login' />} />
                                <Route path={'/login'} element={<LoginPage />} />
                            </Routes>
                        </div>
                    </div>
                </Suspense>
            </div>
        </BrowserRouter>
    )
}

export default App;