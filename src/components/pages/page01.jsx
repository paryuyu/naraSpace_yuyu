import { Outlet } from "react-router-dom";
import ListItem from "../list/Item01";
import styled from "styled-components";
import ListItemTwo from "../list/item02";
import { store } from "../../reducer/store";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    flex :1;
    display:flex;
    align-items:center;
    justify-content:center;
     flex-direction:row;

     @media screen and (max-width: 650px){
        flex-direction:column;
    }
   
`
const OutLined = styled.div`
    width:250px;
`
const MiniHeader = styled.div`
    background:#cbc5f0;
`
const ListOutLined = styled.div`
    height:490px;
    overflow:scroll;
    @media screen and (max-width: 650px){
        height:200px;
        width:100%;
    }
    `
const HorizenArrow = styled.img`
    height:30;
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

export default function PAGE01() {
    
    let dispatch = useDispatch();

    //상태값 가져오기
    const users = useSelector(state => state);

    const handleSort = (evt) => {
        
        console.log(evt.target.value)
        switch (evt.target.value) {
            case "up":
                dispatch({type:"sort", value : "asc"});
                //오름차순으로 바꾸기
                break;

            case "down":
                dispatch({type:"sort", value : "desc"});
                //내림차순으로 바꾸기
                break;
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

                <ListOutLined>
                    {users && users.filter((e)=> e.checked).map((one, index) => {
                        return <ListItemTwo key={index} items={one} />
                    })}
                </ListOutLined>
                {/**TODO: 저장하기 버튼 만들기 */}
            </OutLined>

        </Container>
    );
}
