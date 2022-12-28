import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Item = styled.div`
display: flex;
justify-content:space-between;
padding-right:10px;
padding-left:10px;
cursor:pointer;
&:hover {
  background: cornflowerblue;
  color: white;
  transition: 0.5s;
}

`

function ListItem({ items }) {

  let itemRef = useRef();
  let dispatch = useDispatch();
  let chked = useSelector(state=>state)
  let [chk, setChk] = useState(false)
  console.log()

  useEffect(() => {
    setChk(items.checked)

  }, [])

  const checkHandle = (evt) => {
    console.log(evt.target.checked,'target')

    if (evt.target.checked === true) {
      dispatch({ type: "add", value: items.id })
    } else {
      dispatch({ type: "remove", value: items.id })
    }
  }
  // #CBC5F0 

  const itemBoxClickHandle = (evt)=>{

    console.log(evt.target,'ref')

     
  }

  return (<>
    <Item onClick={itemBoxClickHandle}>
      <p>{items.name}</p>
      <p>{items.date}</p>
      <input type='checkbox' checked={items.checked} onChange={checkHandle} />
    </Item>
    <hr style={{margin:0}}/>
  </>);
}

export default ListItem;