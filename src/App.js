import React from 'react';
import './styles/App.css';
import ChallengeOne from './components/challengeOne';
import ChallengeTwo from './components/challengeTwo';
import Typography from '@material-ui/core/Typography';
function App() {
  return (
    <div className="App">
      <header className = "App-header">
     
     <Typography component="h1" variant="h3" color="initial" align="center">
     Welcome to the challenges for SKIM!
    </Typography>
     <br></br>
     <ChallengeOne/>
     <br></br>
     <ChallengeTwo/>
     </header>
    </div>
  );
}

export default App;
