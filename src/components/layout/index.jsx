import { Link, Outlet, useLocation, useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";
const Outlined = styled.div`
padding-top:5px;
background:#cbc5f0;
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
height: 30px;
alignItems: center;
@media screen and (min-width: 650px){
    display:none;
}`

const MpageNumber = styled.div`
border: 0;
color: #fff;
display:flex;
justify-content:center;
align-items:center;
`

const PageNumber = styled.p`
    margin-right:20;
    cursor:pointer;
`

const LogoImg = styled.img`
    height:30;
    justifyContent: 'space-around';
`

export default function Layout() {

    let navigate = useNavigate()
    let location = useLocation()

    const handlePage = (evt) => {
        let target = evt.target.innerText;
        console.log(target)
        switch (target) {
            case "page01":
                navigate("/");
                break;

            case "page02":
                navigate("/user");
                break;
        }
    }
    
 
    return (<>
        <Outlined>

            <LogoImg onClick={()=>{ navigate("/"); }} src="/nara_logo.png" style={{  }} />

            <PageNumberBox >
                <PageNumber onClick={handlePage}>page01</PageNumber>
                <PageNumber onClick={handlePage}>page02</PageNumber>
            </PageNumberBox>

            <MPageNumberBox >
                <MpageNumber onClick={handlePage}>page01</MpageNumber>
                <MpageNumber onClick={handlePage}>page02</MpageNumber>
            </MPageNumberBox>

        </Outlined>
        <Outlet />
    </>);
}