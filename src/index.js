import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//handling request errors
axios.interceptors.request.use(request=>{
    console.log(request);
    return request; // always return the request, otherwise you stop it
}, error =>{ // the error shows if the request fails
    console.log(error);
    return Promise.reject(error);
});

//handing response errors
axios.interceptors.response.use(response=>{
    console.log(response);
    return response;//edit the config
}, error =>{ // the error shows if the request fails
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
