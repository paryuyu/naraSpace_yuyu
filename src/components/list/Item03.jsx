import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
display: flex;
justify-content:space-between;
padding-left: 10px;
padding-right: 10px;
cursor:pointer;
background-color: #FFFFFF;
border-bottom:1px solid #EBEBEB;

&:hover {
    background: #CBC5F0;
    color:#FFFFFF;
    transition: 0.5s;
  }
  
`

const NameText = styled.p`
    flex:1;
`

const DateText = styled.p`
    flex:1;
`



function ListItemThree({ items, onDetail }) {
    
    return (<>
        <Item onClick={()=>{onDetail(items.id)}}>
            <NameText>{items.name}</NameText>
            <DateText>{items.date}</DateText>
        </Item>
    </>);
}

export default ListItemThree;