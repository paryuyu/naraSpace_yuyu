
import styled from "styled-components";

const Item = styled.div`
display: flex;
justify-content:space-around;
`

function ListItemTwo({ items }) {


  return (<>
    <Item >
      <p>{items.name}</p>
      <p>{items.date}</p>
    </Item>
    <hr style={{margin:0}}/>
  </>);
}

export default ListItemTwo;