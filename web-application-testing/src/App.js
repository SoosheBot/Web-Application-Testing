//Code borrowed from previous project about football, being modified to baseball now.
import React, { useState } from "react";
import "./App.css";

export const addHits = currentHomeHits => {
  return currentHomeHits + 1;
};

export const addRuns = currentHomeHits => {
  return currentHomeHits + 4;
};

export const addStrikes = currentStrikes => {
  return currentStrikes + 1;
};

export const addPitchWin = currentPitchWin => {
  return currentPitchWin + 3;
};

export const addFoulBall = currentFouls => {
  return currentFouls + 1;
};



function App() {
  const [lionsHit, setLionsHit] = useState(0);
  const [tigersHit, setTigersHit] = useState(0);

  const [lionsStrike, setLionsStrike] = useState(0);
  const [tigersStrike, setTigersStrike] = useState(0);

  const [lionsFoulBall, setLionsFoulBall] = useState(0);
  const [tigersFoulBall, setTigersFoulBall] = useState(0);

  if (lionsStrike > 3 || lionsFoulBall > 4 ) {
    setLionsStrike(0);
    // alert('Three strikes Lions are out!');
    setLionsFoulBall(0);
    // alert('Four fouls, Lions are out!')
  }

  if (tigersStrike > 3 || tigersFoulBall > 4) {
    setTigersStrike(0);
    setTigersFoulBall(0);
  }

  return (
    <div className="container">

      <section className="scoreboard">
        <div className="topRow">
          <div className="home-team">
            <h2 className="home__team-name">Lions Score</h2>
            <div className="home__team-score">{lionsHit}</div>
          </div>
          <div className="title-card">SPORTSBALL WEB TESTING PROJECT</div>
          <div className="away-team">
            <h2 className="away__team-name">Tigers Score</h2>
            <div className="away__team-score">{tigersHit}</div>
          </div>
        </div>
        <div className="bottomRow">
          <div className="lionsStrike">
            <h3 className="lionsStrike__title">Home Strike</h3>
            <div className="lionsStrike__value">{lionsStrike}</div>
          </div>
          <div className="tigersStrike">
            <h3 className="tigersStrike__title"> Away Strike</h3>
            <div className="tigersStrike__value">{tigersStrike}</div>
          </div>
          <div className="lionsFoulBall">
            <h3 className="lionsFoulBall__title">Home Foul Ball</h3>
            <div className="lionsFoulBall__value">{lionsFoulBall}</div>
          </div>
          <div className="tigersFoulBall">
            <h3 className="tigersFoulBall__title">Away Foul Ball</h3>
            <div className="tigersFoulBall__value">{tigersFoulBall}</div>
          </div>
     


      <section className="buttons">
        <div className="homeButtons">
          <button onClick={() => setLionsHit(addHits(lionsHit))}
          className="homeButtons__hit">Home Hit</button>
          <button onClick={() => setLionsHit(addRuns(lionsHit))} className="homeButtons__homeRun">Home Run</button>
          <button onClick={() => setLionsHit(addPitchWin(lionsHit))}  className="homeButtons__pitchingWin">Home Pitching Win</button>
        </div>


        <div className="gameButtons">
          <button onClick={() => setLionsStrike(lionsStrike + 1)} className="gameButtons__lionsStrike">Home Strike</button>

          <button onClick={() => setTigersStrike(tigersStrike + 1)} className="gameButtons__tigersStrike">Away Strike</button>
          
          <button onClick={() => setLionsFoulBall(addFoulBall(lionsFoulBall))} 
          className="gameButtons__lionsFoulBall">Home Foul</button>
          
          <button onClick={() => setTigersFoulBall(tigersFoulBall + 1)} className="gameButtons__tigersFoulBall">Away Foul</button>
        </div>


        <div className="awayButtons">
          <button onClick={() => setTigersHit(tigersHit + 1)} className="awayButtons__hit">Away Hit</button>
          <button onClick={() => setTigersHit(tigersHit + 4)} className="awayButtons__homeRun">Away Home Run</button>
          <button onClick={() => setTigersHit(tigersHit + 3)} className="awayButtons__pitchingWin">Away PitchingWin</button>
        </div>
      </section>

      </div>
      </section>


    </div>
  );
}

export default App;
