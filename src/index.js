import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//true for all requests being sent
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'; // settings it up our AUTH TOKEN is we have one
axios.defaults.headers.post['Content-Type'] ='application/json' ; // it's the default anyway


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
