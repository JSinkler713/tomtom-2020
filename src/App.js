import React from 'react';
import './App.css';
import CreateUserFrom from './components/CreateUserForm'

 class App extends React.Component {
   componentDidMount() { 
     const script = document.createElement('script');
     script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
     document.body.appendChild(script);
     script.async = true;
     script.onload = function () {
       window.tomtom.L.map('map', {
         source: 'vector',
         key: 'p4j6JnS6ZKoM9ZuDG8SQH53sFi3XLJ3G',
         center: [37.769167, -122.478468],
         basePath: '/sdk',
         zoom: 15
       });
     }
   }
 
   render() {
     return <div id = 'map'></div>
   }
 } 
 export default App;
