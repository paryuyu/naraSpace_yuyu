
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Layout from './components/layout';
import PAGE01 from './components/pages/page01';
import PAGE02 from './components/pages/page02';

function App() {
  useEffect(()=>{
    const dataLoad = async ()=>{
      const response = await fetch("http://localhost:9000/users");
      const json = await  response.json();
      console.log(json);
    }
    dataLoad();
  },[]);

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<PAGE01 />} />
          <Route path="/user/*" element={<PAGE02 ><h1>DSADADADSA</h1></PAGE02>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
