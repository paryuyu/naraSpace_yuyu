import { useEffect, useState } from "react";
import styled from "styled-components";




function ItemDetail({ item }) {

    const TextBox = styled.div`
    display:flex;
    align-items:center;
    
    `

    const TitleText = styled.p`
     margin-right:4px;
     font-weight:bold;
    `


    const [img, setImg] = useState("default.png")
    
    useEffect(() => {
        let src = item.image;
        if (src.length > 0) {
            setImg(src)
        }
    }, [])

    const clickBox =()=>{
        console.log(item.id)
    }

    return (<>
        {item && <div onClick={clickBox}>
            <img src={require(`../../profile_img/${img}`)} />
  
            <TextBox> <TitleText>이름</TitleText> {item.name}</TextBox>
            
            <TextBox> <TitleText>생년월일</TitleText> {item.date}</TextBox>
            <TextBox> <TitleText>한마디</TitleText> {item.comment}</TextBox> 
            
            </div>}
    </>);
}

export default ItemDetail;