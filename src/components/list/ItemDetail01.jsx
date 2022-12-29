import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";




export default function ItemDetail01({ item }) {

    const [img, setImg] = useState("default.png");
    const navigate = useNavigate()
     
    const TextBox = styled.div`
    display:flex;
    align-items:center;
    
    `

    const TitleText = styled.p`
     margin-right:4px;
     font-weight:bold;
    `


    const OutlinedBox = styled.div`
     margin-right:4px;
     font-weight:bold;

     cursor:pointer;
     &:hover {
        background: cornflowerblue;
        color: white;
        transition: 0.5s;
      }

    `


    useEffect(() => {
        if (item) {

            let src = item.image;

            if (src.length > 0) {
                setImg(src)
            }

        }
    }, [])

    const handleClick = ()=>{
        console.log('click');
        navigate(`/user/${item.id}`)   
    }

    return (<>
        {item && <OutlinedBox onClick={handleClick}>
            <div style={{ background: '#CBC5F0' }}>
                <img src={require(`../../profile_img/${img}`)} />
            </div>
            <TextBox> <TitleText>이름</TitleText> <TitleText>{item.name}</TitleText></TextBox>

            <TextBox> <TitleText>생년월일</TitleText> <TitleText>{item.date}</TitleText></TextBox>
            <TextBox> <TitleText>한마디</TitleText> <TitleText>{item.comment}</TitleText></TextBox>
        </OutlinedBox>}
    </>);
}