import React ,{ Fragment, useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import {getMatches} from './api/Api';
import MyCard from './components/MyCard';

function App() {
   const [matches, setMatches] = useState([]);
useEffect(() => {
  getMatches().then((data)=> {setMatches(data.matches);
  console.log(data.matches);
  })
      .catch((error)=>alert("could not load data"));
  
},[]);
                                                                                                                                        

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Welcome to my Live Score App</h1>
      <Grid container>
        <Grid sm="3">

        </Grid>
        <Grid sm="8">
        {
        matches.map((match)=>(
          <Fragment>
            {match.type==="Twenty20" ? ( <MyCard key={match.unique_id} match={match} />
           ) : ("")}
          </Fragment>
        ))
        }

       </Grid>

      </Grid>
    </div>
  );
};

export default App;
