import React from 'react';
import './App.css';
import CreateUserForm from './components/CreateUserForm'

 class App extends React.Component {
   componentDidMount() {
     const script = document.createElement('script');
     script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
     document.body.appendChild(script);
     script.async = true;
     script.onload = function () {
       const map = window.tomtom.L.map('map', {
         source: 'vector',
         key: 'p4j6JnS6ZKoM9ZuDG8SQH53sFi3XLJ3G',
         center: [37.787901, -122.396617],
         basePath: '/sdk',
         zoom: 15
       });

       let check = window.tomtom.L.marker([37.787901, -122.396617]).addTo(map);
     }
   }

   render() {
     return (
      <div>
       <div id = 'map'></div>
       <CreateUserForm />
      </div>
     )}
 }
 export default App;
