
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import PAGE01 from './components/pages/page01';
import PAGE02 from './components/pages/page02';
import { Connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import PAGE03 from './components/pages/page03';

function App() {
  
  const dispatch =useDispatch();
  const [datas,setDatas] = useState();

  useEffect(() => {
    //이렇게 하니까 핸드폰에서는 화면이 안나옴.
    //json-server에 올려둔 데이터 불러오기
    const dataLoad = async () => {

      const response = await fetch("http://localhost:9000/users");
      const json = await response.json();
      
      //초기값만 따로 저장하기
      let ogData = json.map(one=> {
        return {id: one.id, checked: one.checked}
      })
      setDatas(ogData)
      dispatch({type:"init", value: json});
    }

    dataLoad();
  }, []);

  return (

    <Router>
      <Routes>
        <Route element={<Layout />}>
      
          <Route path="/" element={<PAGE01 ogData={datas}/>} />
          <Route path="/user" element={<PAGE02 />} />
          <Route path="/user/:id" element={<PAGE03 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
