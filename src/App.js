import './App.css';
import  React from 'react';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import Adress from './components/Profile/Adress';
import FullName from './components/Profile/FullName';

function App() {
  return (
    
    <div className="App">
     <ProfilePhoto/>
     <FullName/>
     <Adress/>
    </div>
  );
}

export default App;

