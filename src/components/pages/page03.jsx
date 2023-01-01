    import { useState } from "react";
import { useSelector } from "react-redux";
    import { useParams } from "react-router-dom";
    import styled from "styled-components";
    import ItemDetail01 from "../list/ItemDetail01";

    const ItemOutline = styled.div`
        background-color: #EBEBEB;
        flex:1;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 650px){
            box-sizing: border-box;
            padding: 20px;

        }    
    `
    export default function PAGE03() {
        const { id } = useParams();
        let list = useSelector(state => state)
        const found = list.find((e) => e.id.toString() === id);
     


        return (
            <ItemOutline>
                <ItemDetail01 item={found} />
            </ItemOutline>
        );
    }