import { useEffect, useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
display: flex;
justify-content:space-around;
cursor:pointer;
&:hover {
    background: #CBC5F0;
    color: white;
    transition: 0.5s;
  }
  
`

function ListItemThree({ items, onDetail }) {
    //TODO: 동적라우팅
    
   
    
    return (<>
        <Item onClick={()=>{onDetail(items.id); }}>
            <p>{items.name}</p>
            <p>{items.date}</p>
        </Item>
        
        <hr style={{ margin: 0 }} />
    </>);
}

export default ListItemThree;