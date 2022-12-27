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


const PageNumber = styled.p`
margin-right:20;
cursor:pointer;
`


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
                <PageNumber onClick={handlePage}>page01</PageNumber>
                <PageNumber onClick={handlePage}>page02</PageNumber>
            </div>
        </Outlined>
        <Outlet/>
    </>);
}