
import styled from "styled-components";

const Item = styled.div`
display: flex;
justify-content:space-between;
background:#FFFFFF;
border-bottom: 1px solid #EBEBEB;
padding-left: 20px;
padding-right: 20px;
`

function ListItemTwo({ items }) {
  return (<>
    <Item >
      <p>{items.name}</p>
      <p>{items.date}</p>
    </Item>
  </>);
}

export default ListItemTwo;