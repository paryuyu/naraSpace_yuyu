
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import PAGE01 from './components/pages/page01';
import PAGE02 from './components/pages/page02';
import { useDispatch } from 'react-redux';
import PAGE03 from './components/pages/page03';
import styled from 'styled-components';

function App() {

  const BodyComponent = styled.body`
  font-family: "Suit-Variable";
  display: flex;
  height: 100vh;
  flex-direction: column;
  `

  const dispatch = useDispatch();
  const [datas, setDatas] = useState();

  useEffect(() => {

    const dataLoad = async () => {

      const response = await fetch("http://localhost:9000/users");
      const json = await response.json();

      let ogData = json.map(one => {
        return { id: one.id, checked: one.checked }
      })
      setDatas(ogData)
      dispatch({ type: "init", value: json });
    }

    dataLoad();

  }, []);




  return (
<BodyComponent>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PAGE01 ogData={datas} />} />
          <Route path="/user" element={<PAGE02 />} />
          <Route path="/user/:id" element={<PAGE03 />} />
        </Route>
      </Routes>
    </Router>
    </BodyComponent>
  );
}

export default App;
