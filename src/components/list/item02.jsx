
import styled from "styled-components";

const Item = styled.div`
display: flex;
justify-content:space-between;
background:#FFFFFF;
border-bottom: 1px solid #EBEBEB;
padding-left: 20px;
padding-right: 20px;
`
const NameText = styled.p`
  flex:1;
`

const DateText = styled.p`
  flex:1;
  @media screen and (max-width: 650px){
    flex:1.8;
}`



function ListItemTwo({ items }) {
  return (<>
    <Item >
      <NameText>{items.name}</NameText>
      <DateText>{items.date}</DateText>
    </Item>
  </>);
}

export default ListItemTwo;