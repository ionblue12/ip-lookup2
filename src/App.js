
import './App.css';
import Searchip from './components/Searchip';
import { useEffect, useState } from 'react';
import Showresults from './components/Showresults';

function App() {

  const [ipNumber, setIpNumber] = useState('');
  const [ipResults, setIpResults] = useState('');

  const findIP=async ()=>{
    const Api = '52cf7bc61d74439dbae4d05776e402e2';
    const url=`https://api.ipgeolocation.io/ipgeo?apiKey=${Api}&ip=${ipNumber}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setIpResults(responseJson);
  }
  console.log(ipResults);


  useEffect(()=>{findIP()}, [ipNumber]);

  const resetSearch=()=>{
    setIpResults('');
  }
  useEffect(()=>{resetSearch()},[]);
  return (
    <div className="App">
      <header className="App-header">
        <Searchip newIP={setIpNumber}/>
        <Showresults ipResult={ipResults}/>
        <button onClick={resetSearch}>Reset Search</button>
      </header>
    </div>
  );
}

export default App;
