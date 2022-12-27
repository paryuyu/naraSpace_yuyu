import { useEffect, useState } from "react";
import styled from "styled-components";

const Item = styled.div`
display: flex;
justify-content:space-between;
padding-right:10px;
padding-left:10px;
`

function ListItem({ items }) {

  const [chk, setChk] = useState();

  useEffect(() => {
    setChk(items.checked)
  }, [])

  const checkHandle = ()=>{
    setChk(current => !current)
  }



  return (<>
    <Item>
      <p>{items.name}</p>
      <p>{items.date}</p>
      {/* <input
        type='checkbox'
        id='checkbox'
        checked={chk}
        onChange={checkHandle}
      /> */}
    </Item>
    <hr />
  </>);
}

export default ListItem;