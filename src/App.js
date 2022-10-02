import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';

function App() {
  const [activity, setActivity] = useState([]);

  // https://www.boredapi.com/api/activity


  function fetchActivityHandler() {
    fetch('https://www.boredapi.com/api/activity').then(response =>
      response.json()).then(data => {
        console.log(data);
        setActivity(data);
      });
  }

  useEffect(() => {
    fetchActivityHandler();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p><h3><b>Activity</b>: {activity.activity}</h3><br /></p>
        <p><b>🏷️ Type</b>: {activity.type}<br /></p>
        <p><b>👯 Participants</b>: {activity.participants}<br /></p>
        <p><b>💰 Price</b>: {activity.price}<br /></p>
        <p><b>🌐 Link</b>: {activity.link}<br /></p>
        <p><b>🔑 Key</b>: {activity.key}<br /></p>
        <p><b>♿ Accessibility</b>: {activity.accessibility}<br /></p>
      </header>
    </div>
  );
}

export default App;
