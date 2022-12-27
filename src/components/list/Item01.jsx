import { getCurrentScope } from "immer/dist/internal";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Item = styled.div`
display: flex;
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
    <div>
      <p>{items.name}</p>
      <p>{items.date}</p>
      {/* <input
        type='checkbox'
        id='checkbox'
        checked={chk}
        onChange={checkHandle}
      /> */}
    </div>
  </>);
}

export default ListItem;