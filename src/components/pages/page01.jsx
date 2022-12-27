import { Outlet } from "react-router-dom";
import ListItem from "../list/Item01";
import styled from "styled-components";
import ListItemTwo from "../list/item02";

const Container = styled.div`
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
        height:200px
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


export default function PAGE01({ datas }) {
    //TODO: datas를 redux에서 뽑아오는걸로 변경하기

    //아이템에서 바뀌는 체크값 -> 리덕스에서 바꾸기
    //바뀌는 상태값 리덕스꺼 가져와서 두번째 아이템에 뿌려주기
    //저장하기 버튼 생성하기
  
    //미디어 쿼리 적용하기 page01
    const handleSort = (evt) => {
        console.log(evt.target.value)
        switch (evt.target.value) {
            case "up":

                break;

            case "down":

                break;
        }
    }

    console.log(datas, 'p1')

    React.useEffect(()=>{
        
    },[])
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
                    {datas && datas.map((one, index) => {
                        return <ListItem key={index} items={one} />
                    })}
                </ListOutLined>


            </OutLined>

            <HorizenArrow src='/horizen-arrow.png' />
            <VerArrow src='/ver-arrow.png' />

            <OutLined>
                <MiniHeader>
                    <select>
                        <option value="up">오름차 순</option>
                        <option value="down">내림차 순</option>
                    </select>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <p>이름</p>
                        <p>생년월일</p>

                    </div>


                </MiniHeader>

                <ListOutLined>
                    {datas && datas.map((one, index) => {
                        return <ListItemTwo key={index} items={one} />
                    })}
                </ListOutLined>
                {/**TODO: 저장하기 버튼 만들기 */}
            </OutLined>



        </Container>
    );
}
