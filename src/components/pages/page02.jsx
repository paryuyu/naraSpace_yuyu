import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListItemThree from "../list/Item03";
import ItemDetail01 from "../list/ItemDetail01";


const OutLined = styled.div`
    width:250px;
`
const MiniHeader = styled.div`
    background:#cbc5f0;
`


export default function PAGE02() {
    const [selecId, setSelecId] = useState();

    let list = useSelector(state => state)
    console.log(list, 'p2')

    let handleDetail = (id) => {
        //id 데려오면 얘를...옆에 디테일 컴포넌트에 뿌려주기
        setSelecId(id)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 50, flex:1}}>

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


                {list.filter(e => e.checked).map((one, index) => {
                    return <ListItemThree items={one} key={index} onDetail={handleDetail} />
                })}

            </OutLined>


            <OutLined>
                {list.map((one, index) => {
                    if (one.id === selecId) {
                        return <ItemDetail01 item={one} key={index} />
                    }
                })

                }

            </OutLined>

        </div>
    );
}