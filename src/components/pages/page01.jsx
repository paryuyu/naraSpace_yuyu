import { Outlet } from "react-router-dom";
import ListItem from "../list/Item01";

export default function PAGE01({ datas }) {
    console.log(datas, 'p1')

    //TODO: datas를 redux에서 뽑아오는걸로 변경하기

    return (
        <>
            <div>
                <select>
                    <option>오름차 순</option>
                    <option>내림차 순</option>
                </select>

            </div>

            <div style={{ display: 'flex' }}>
                <p>이름</p>
                <p>생년월일</p>
            </div>

            {datas && datas.map((one,index) => {
                return <ListItem key={index} items={one} />
            })}
        </>
    );
}
