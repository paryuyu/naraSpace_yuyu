import { Link, Outlet, useLocation, useNavigate, useParams, useRoutes } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Outlined = styled.div`
padding-top:5px;
background:#4130be99;
display:flex;
flex-direction:row; 
justify-content:space-between ; 
align-items:center;
@media screen and (max-width: 650px){
    flex-direction:column; 
}`


const PageNumberBox = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width: 650px){
    display:none;
}
`
const MPageNumberBox = styled.div`
display: flex;
justify-content:space-around; 
width: 100%;
cursor: pointer;
height: 47px;
align-items: center;
background:#4130be33;
@media screen and (min-width: 650px){
    display:none;
}`


const MpageNumber = styled.div`
border: 0;
color: #fff;
display:flex;
justify-content:center;
align-items:center;
width:100%;
&.selected{
background:#4130BE;
font-weight:bold;
height: 100%;
}

`

const PageNumber = styled.p`
    margin-right:20;
    cursor:pointer;
    color:#FFFFFF;
    margin-right: 35px ;
    &.selected{
        color:#4130BE;
        height: 100%;
}
`

const LogoImg = styled.img`
    height:21px;
    margin:10px;

`

export default function Layout() {
    const [chk, setChk] = useState("");
    let navigate = useNavigate();
    let { pathname } = useLocation();


    const handlePage = (evt) => {

        let target = evt.target.innerText;

        switch (target) {
            case "page01":
                setChk("p1")
                navigate("/");
                break;

            case "page02":
                setChk("p2")
                navigate("/user");
                break;
        }
    }


    return (<>
        <Outlined>

            <LogoImg onClick={() => { navigate("/"); }} src="/nara_logo.png" />

            <PageNumberBox>
                <PageNumber className={chk === "p1" && "selected"} onClick={handlePage}>page01</PageNumber>
                <PageNumber className={chk === "p2" && "selected"} onClick={handlePage}>page02</PageNumber>
            </PageNumberBox>

            <MPageNumberBox >
                <MpageNumber className={chk === "p1" && "selected"} onClick={handlePage}>page01</MpageNumber>
                <MpageNumber className={chk === "p2" && "selected"} onClick={handlePage}>page02</MpageNumber>
            </MPageNumberBox>

        </Outlined>
        
        <Outlet />
    </>);
}