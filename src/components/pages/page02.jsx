import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ListItemThree from "../list/Item03";
import ItemDetail01 from "../list/ItemDetail01";


const OutLined = styled.div`
    width:250px;
    margin: auto;
    @media screen and (max-width: 650px){
       width: 100%;
       height: 254px;

    }
`

const MiniHeader = styled.div`
    display: flex;
    flex-direction: column;
    background:#cbc5f0;
    padding: 5px;
    height: 93px;
    box-sizing: border-box;
    border-radius: 3px 3px 0px 0px;
    @media screen and (max-width: 650px){
        width: 100%;
        height: 49px;
        background: rgba(65, 48, 190, 0.6);
        align-items: center;
        color:#FFFFFF
    }
   
`

const SelectOutlinedBox = styled.div`
    position: relative;
    @media screen and (max-width: 650px){
  display: none;
    }
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

const ItemDetailBox = styled.div`
    background-color: #FFFFFF;
    height: 425px;
    width: 352px;
    @media screen and (max-width: 650px){
        width: 100%;
       height: 425px;
       order: -1;
    }
   
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1; 
    background-color:#EBEBEB;
    @media screen and (max-width: 650px){
       flex-direction: column;
       padding: 20px;
    }
`

const ListBox = styled.div`
    overflow-y:scroll;
    height: 332px;

  @media screen and (max-width: 650px){
       flex-direction: column;
        height: 200px;
    }
`
const MiniHeaderTwo = styled.div`
    display: flex;
    justify-content: space-around;
`
const ListOutlined = styled.div`
     margin-right:20px;
 @media screen and (max-width: 650px){
      flex:1;
      width: 100%;
      margin:0px;
    }
`

export default function PAGE02() {
    const [selecId, setSelecId] = useState();
    const [selectedUp, setSelectedUp] = useState(true);
    const [selectedVal, setSelectedVal] = useState("up");
    
    let list = useSelector(state => state)

    let handleDetail = (id) => {
        setSelecId(id)
    }

    
    useEffect(()=>{

        if(list.length>0 && !selecId){
          let listItem = list.filter(e => e.checked)
          console.log(listItem[0].id)
          setSelecId(listItem[0].id)
        }

    },[list])


    const dispatch = useDispatch();

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

    const handleSelect = () => {
        if (selectedUp === true) {
            setSelectedUp(false);
        } else {
            setSelectedUp(true);
        }
    }


    return (
        <Container>
            <ListOutlined >
                <OutLined>
                    <MiniHeader>
        
                        <SelectOutlinedBox>
                            <SelectedBt onClick={handleSelect}>오름차 순<img src="/select_arrow.png" /> </SelectedBt>

                            <SelectedBox className={selectedUp ? "selected_open" : null}>
                                <SelectedList><SelectedUp onClick={() => { setSelectedVal("up"); handleSort(); setSelectedUp(c => !c); }}>오름차 순</SelectedUp></SelectedList>
                                <SelectedList><SelectedDown onClick={() => { setSelectedVal("down"); handleSort(); setSelectedUp(c => !c); }} >내림차 순</SelectedDown></SelectedList>
                            </SelectedBox>
                        </SelectOutlinedBox>
                        <MiniHeaderTwo>
                            <p>이름</p>
                            <p>생년월일</p>
                        </MiniHeaderTwo>
                    </MiniHeader>

                    <ListBox>
                        {list.filter(e => e.checked).map((one, index) => {
                            return <ListItemThree items={one} key={index} onDetail={handleDetail} />
                        })}
                    </ListBox>
                </OutLined>
            </ListOutlined>


            <ItemDetailBox>
                {list.map((one, index) => {
                    if (one.id === selecId) {
                        return <ItemDetail01 item={one} key={index} />
                    }
                })
                }
            </ItemDetailBox>

        </Container>
    );
}