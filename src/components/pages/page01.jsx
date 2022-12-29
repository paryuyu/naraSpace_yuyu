import { Outlet } from "react-router-dom";
import ListItem from "../list/Item01";
import styled from "styled-components";
import ListItemTwo from "../list/item02";
import { store } from "../../reducer/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Container = styled.div`
    flex :1;
    display:flex;
    align-items:center;
    justify-content:center;
     flex-direction:row;
 
     @media screen and (max-width: 650px){
        flex-direction:column;
        justify-content:start;

    }
   
`
const OutLined = styled.div`
    width:250px;
    @media screen and (max-width: 650px){
        height:200px;
        width:100%;
    }
`
const MiniHeader = styled.div`
    background:#cbc5f0;
`
const ListOutLined = styled.div`
    height:450px;
    overflow-y:scroll;

    &.rightList{
        height:410px;
        @media screen and (max-width: 650px){
            height:200px;
        }
    }

    @media screen and (max-width: 650px){
        height:200px;
    }

    `

const HorizenArrow = styled.img`
    height:25;
    @media screen and (max-width: 650px){
      display:none;
    }
    `
const VerArrow = styled.img`
    height:25;
    margin-bottom:10px;
    margin-top:10px;
    @media screen and (min-width: 650px){
      display:none;
    }
    `
const Bt = styled.button`
    border:0;
    background:#4130BE;
    color:white;
    width:100%;
    height:30px;
    border-radius:10px;
    margin-top:10px;

`
//폰트도 바꿔주기
//30 40 10 퍼센트로 해주기
export default function PAGE01({ ogData }) {
    let dispatch = useDispatch();

    //상태값 가져오기
    const users = useSelector(state => state);




    const handleSort = (evt) => {

        switch (evt.target.value) {
            case "up":
                dispatch({ type: "sort", value: "asc" });
                break;

            case "down":
                dispatch({ type: "sort", value: "desc" });
                break;
        }
    }

    const handleSave = async () => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === ogData[i].id && users[i].checked !== ogData[i].checked) {

                let res = await fetch(`http://localhost:9000/users/${users[i].id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({ checked: users[i].checked }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

            }
        }
    }



    return (
        <Container>
            <OutLined>
                <MiniHeader>
                    <select onChange={handleSort}>
                        <option value="up">오름차 순</option>
                        <option value="down">내림차 순</option>
                    </select>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <p>이름</p>
                        <p>생년월일</p>
                        <p> </p>
                    </div>
                </MiniHeader>

                <ListOutLined>
                    {users && users.map((one, index) => {
                        return <ListItem key={index} items={one} />
                    })}
                </ListOutLined>
            </OutLined>

            <HorizenArrow src='/horizen-arrow.png' />
            <VerArrow src='/ver-arrow.png' />

            <OutLined>
                <MiniHeader>
                    <select onChange={handleSort}>
                        <option value="up">오름차 순</option>
                        <option value="down">내림차 순</option>
                    </select>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <p>이름</p>
                        <p>생년월일</p>
                    </div>
                </MiniHeader>

                <ListOutLined className="rightList">
                    {users && users.filter((e) => e.checked).map((one, index) => {
                        return <ListItemTwo key={index} items={one} />
                    })}
                </ListOutLined>
                <Bt onClick={handleSave}>저장하기</Bt>
            </OutLined>

        </Container>
    );
}
