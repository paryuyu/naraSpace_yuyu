import { useEffect, useState } from "react";
import styled from "styled-components";

const Item = styled.div`
display: flex;
justify-content:space-around;
`

function ListItemTwo({ items }) {

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

    </Item>
    <hr />
  </>);
}

export default ListItemTwo;