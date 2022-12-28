
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import PAGE01 from './components/pages/page01';
import PAGE02 from './components/pages/page02';
import { Connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  
  const dispatch =useDispatch();
  useEffect(() => {
    //이렇게 하니까 핸드폰에서는 화면이 안나옴.
    //json-server에 올려둔 데이터 불러오기
    const dataLoad = async () => {
      const response = await fetch("http://localhost:9000/users");
      const json = await response.json();
      console.log(json);
      //데이터를 리듀서에 올리기
      dispatch({type:"init", value: json});
    }
    dataLoad();
  }, []);

  return (

    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PAGE01 />} />
          <Route path="/user/*" element={<PAGE02 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
