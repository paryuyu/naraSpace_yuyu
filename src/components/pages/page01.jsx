import { Outlet } from "react-router-dom";
import ListItem from "../list/Item01";
import styled from "styled-components";
import ListItemTwo from "../list/item02";
import { store } from "../../reducer/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { current } from "@reduxjs/toolkit";

const Container = styled.div`
    flex :1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    background:#EBEBEB;
     @media screen and (max-width: 650px){
        flex-direction:column;
        justify-content:start;
        padding-top:30px;
        padding-bottom:30px;
        padding-left:20px;
        padding-right:20px;
        background:#EBEBEB;

    }
   
`
const TopOutLined = styled.div`
    width:250px;

    background-color: #FFFFFF;
    @media screen and (max-width: 650px){
        height:293px;
        width:100%;
    }
`

const UnderOutLined = styled.div`
    width:250px;
    background-color: #FFFFFF;

    @media screen and (max-width: 650px){
        height:314px;
        width:100%;
        background:#FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        border-radius: 3px;
    }
`

const MiniHeader = styled.div`
    background:#cbc5f050;
    height: 49px;
    width: 100%;
    border-radius: 3px 3px 0px 0px;
    
`

const ListOutLined = styled.div`
    height:490px;
    overflow-y:scroll;
    &.rightList{
        height:445px;
        @media screen and (max-width: 650px){
            height:200px;
            width: 100%;
        }
    }

    @media screen and (max-width: 650px){
        height: calc(100% - 49px);
    }
`

const HorizenArrow = styled.img`
    height:25;
    margin-left: 48px;
    margin-right: 48px;
    @media screen and (max-width: 650px){
      display:none;
    }
`

const VerArrow = styled.img`
    height:20;
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
    margin-top: 10px;
    width:90%;
    height:35px;
    border-radius:3px;
    cursor: pointer;
    @media screen and (min-width: 650px){
        width: 210px;
        height: 35px;
        margin-left: 20px;
        margin-bottom:25px;
    }
`

const SelectOutlinedBox = styled.div`
    position: relative;
`

const SelectedBt = styled.button`
    width: 82px;
    height: 29px;
    border: 0;
    border-radius: 3px;
    background-color: #FFFFFF;
    z-index: 100;
    cursor:pointer;
    &:hover{
        background-color: rgba(65, 48, 190, 0.4);
        color:rgba(65, 48, 190, 1);
    }
`
//b2ace1
const SelectedDown = styled.button`
    width: 82px;
    height: 31px;
    border: 0;
    background-color: #FFFFFF;
    border-radius: 0px 0px 5px 5px;
    &:hover{
        background-color: #b2ace1;
        color:rgba(65, 48, 190);
    }
`

const SelectedUp = styled.button`
    width: 82px;
    height: 31px;
    border: 0;
    background-color: #FFFFFF;
    &:hover{
        background-color: #b2ace1;
        color:rgba(65, 48, 190);
    }

`

const SelectedBox = styled.ul`
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.15);
    padding: 0%;
    margin: 0%;
    position: absolute;
    &.selected_open{
        display: none;
        padding: 0%;
    }
    
`

const SelectedList = styled.li`
    list-style: none;
    
`

//폰트도 바꿔주기
//30 40 10 퍼센트로 해주기

export default function PAGE01({ ogData }) {
    const [selectedUp, setSelectedUp] = useState(true);
    const [selectedDown, setSelectedDown] = useState(true);
    const [selectedVal, setSelectedVal] = useState("up");

    let dispatch = useDispatch();
    const users = useSelector(state => state);

    const handleSort = (evt) => {

        switch (selectedVal) {
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



    const handleSelect = () =>{

        if(selectedUp === true){
            setSelectedUp(false);
        }else{
            setSelectedUp(true);
        }
    }

   const handleDownSelect = ()=>{
       if(selectedDown === true){
           setSelectedDown(false);
        }else{
            setSelectedDown(true);
        }
    }
    console.log(selectedDown,'</div>')




    return (
        <Container>
            <TopOutLined>
                <MiniHeader>
                   <div style={{ display: 'flex', justifyContent: 'space-around' , alignItems:'center'}}>
                        <p>이름</p>
                        <p>생년월일</p>

                        <SelectOutlinedBox>
                           
                            <SelectedBt onClick={handleSelect}>오름차 순<img src="/select_arrow.png" style={{ width: "11px", height: "5px", marginLeft: "5px" }} /></SelectedBt>


                            <SelectedBox className={selectedUp && "selected_open"}>
                                <SelectedList><SelectedUp onClick={() => { setSelectedVal("up"); handleSort(); setSelectedUp(c=>!c); }}>오름차 순</SelectedUp></SelectedList>
                                <SelectedList><SelectedDown onClick={() => { setSelectedVal("down"); handleSort();setSelectedUp(c=>!c); }} >내림차 순</SelectedDown></SelectedList>
                            </SelectedBox>
                        </SelectOutlinedBox>

                    </div>
                </MiniHeader>

                <ListOutLined>
                    {users && users.map((one, index) => {
                        return <ListItem key={index} items={one} />
                    })}
                </ListOutLined>
            </TopOutLined>

            <HorizenArrow src='/horizen-arrow.png' />
            <VerArrow src='/ver-arrow.png' />


            <UnderOutLined>
                <MiniHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-around' , alignItems:'center'}}>
                       
                        <p>이름</p>
                        <p>생년월일</p>

                        <SelectOutlinedBox>
                            <SelectedBt onClick={handleDownSelect}>오름차 순<img src="/select_arrow.png" style={{ width: "11px", height: "5px", marginLeft: "5px" }} /></SelectedBt>
                            
                            
                            

                            <SelectedBox className={selectedDown && "selected_open"}>

                                <SelectedList>
                                    <SelectedUp onClick={() => { 
                                    setSelectedVal("up"); 
                                    handleSort(); 
                                    setSelectedDown(c=>!c);
                                     }}>오름차 순</SelectedUp></SelectedList>

                                <SelectedList><SelectedDown onClick={() => { 
                                    setSelectedVal("down"); handleSort();
                                    setSelectedDown(c=>!c);
                                     }} >내림차 순</SelectedDown></SelectedList>

                            </SelectedBox>

                        </SelectOutlinedBox>

                    </div>
                </MiniHeader>

                <ListOutLined className="rightList">
                    {users && users.filter((e) => e.checked).map((one, index) => {
                        return <ListItemTwo key={index} items={one} />
                    })}
                </ListOutLined>

                <Bt onClick={handleSave}>저장하기</Bt>

            </UnderOutLined>

        </Container>
    );
}
