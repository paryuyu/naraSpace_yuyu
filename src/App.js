
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import PAGE01 from './components/pages/page01';
import PAGE02 from './components/pages/page02';
import { useDispatch, useSelector } from 'react-redux';
function App() {
const [datas, setDatas] = useState()
  
  useEffect(()=>{

    //json-server에 올려둔 데이터 불러오기
    const dataLoad = async ()=>{
      const response = await fetch("http://localhost:9000/users");
      const json = await response.json();
      console.log(json);
      //데이터를 리듀서에 올리기
      setDatas(json)
    }
    dataLoad();


  },[]);




  return (
  
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<PAGE01 datas={datas}/>} />
          <Route path="/user/*" element={<PAGE02/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
