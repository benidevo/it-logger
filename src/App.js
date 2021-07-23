import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

const App = () => {
    useEffect(() => {
        // initialize materialize js
        M.AutoInit();
    });

    return (
        <Provider store={store}>
            <>
                <SearchBar />
                <div className="container">
                    <AddBtn />
                    <AddLogModal />
                    <EditLogModal />
                    <AddTechModal />
                    <TechListModal />
                    <Logs />    
                </div>
            </>
        </Provider>
    )
};

export default App;
