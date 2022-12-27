import { Link, Outlet, useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";
const Outlined = styled.div`
    padding:5px;
    background:#cbc5f0;
    display:flex;
    flex-direction:'row'; 
    justify-content:space-between ; 
    align-items:center;
    `

//텐스 -> 면접 제안 : 다음주 화요일 - 1월 3일 오전 11시. 대면면접 : 시간, 장소


// const PageNumber = styled.div`
// disply:flex;
// flex-direction:row;
// background:red;
// `


export default function Layout() {
    let navi = useNavigate()


    const handlePage = (evt) => {
        let target = evt.target.innerText;
        console.log(target)
        switch (target) {
            case "page01":
                navi("/");
                break;
                
            case "page02":
                navi("/user");
                break;
        }
    }


//TODO: hover랑 상태 유지

    return (<>
        <Outlined>
            <img src="/nara_logo.png" height={30} />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p style={{ marginRight: 20, cursor: 'pointer' }} onClick={handlePage}>page01</p>

                <p style={{ marginRight: 10, cursor: 'pointer' }} onClick={handlePage}>page02</p>
            </div>
        </Outlined>
        <Outlet/>
    </>);
}