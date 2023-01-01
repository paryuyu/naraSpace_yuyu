import { current } from "@reduxjs/toolkit";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Item = styled.div`
display: flex;
justify-content:space-between;
padding-right:10px;
padding-left:10px;
cursor:pointer;
background:#FFFFFF;
&.selected{
  background: #4130be4d;
}

&:hover {
  background: cornflowerblue;
  color: white;
  transition: 0.5s;
}

`

const NameText = styled.p`
  flex:3;
  @media screen and (max-width: 650px){
    flex:1;
}`

const DateText = styled.p`
  flex:6;
  @media screen and (max-width: 650px){
    flex:1.2;
}`

const ChkInput = styled.input`
  color: #4130BE;
  flex:0.5;
  @media screen and (max-width: 650px){
    flex:0.1;
    margin-right: 75px;
}`

function ListItem({ items }) {

  let itemRef = useRef();
  let dispatch = useDispatch();
  let chked = useSelector(state => state)
  let [chk, setChk] = useState(false)

  useEffect(() => {
    setChk(items.checked)
  }, [])

  const checkHandle = (evt) => {
    console.log(evt.target.checked, 'evt.target.checked')

  }

  const itemBoxClickHandle = (evt) => {
    setChk(current => !current)


    if (chk === false) {  
      dispatch({ type: "add", value: items.id })
    } else {
      dispatch({ type: "remove", value: items.id })
    }


  }

  return (<>
    <Item onClick={itemBoxClickHandle} className={chk && "selected"}>
      <NameText>{items.name}</NameText>
      <DateText>{items.date}</DateText>
      <ChkInput type='checkbox' checked={chk} onChange={checkHandle} />
    </Item>
    <hr style={{ margin: 0 }} />
  </>);
}

export default ListItem;