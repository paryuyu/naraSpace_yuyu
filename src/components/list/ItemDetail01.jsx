import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailTextBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex:1;
    padding: 25px;
    //프로필 이미지가 다 다름.
    margin-top: 40px;
`
const TextBox = styled.div`
     margin-right:3px;
        display:flex;
        border-bottom: 1px #EBEBEB solid;
`

const Text = styled.p`
font-weight:200;
flex:3;
`


const TitleText = styled.p`
margin-right:4px;
margin-left: 4px;
font-weight:bold;
flex:1;
`

const OutlinedBox = styled.div`
display: flex;
flex-direction: column;
font-weight:bold;
height: 100%;
background-color: #FFFFFF;
&.p2{
    cursor:pointer;
}

&.p2:hover {
background: cornflowerblue;
color: white;
transition: 0.5s;
}

&.p3{
    width: 622px;
    height: 425px;

}
`


const ImgBox = styled.div`
height: 172px;
background: #cbc5f080;
display: flex; 
justify-content: center; 
position: relative;
`

export default function ItemDetail01({ item }) {
    const [pathVal, setPathVal] = useState();
    const [img, setImg] = useState("default.png");
    const navigate = useNavigate()
    const { id } = useParams()






    useEffect(() => {
        if (item) {
            let src = item.image;

            if (src) {
                setImg(src)
            }else{
                setImg("default.png")
            }

        }

        if (!id) {
            setPathVal('p2');
        } else {
            setPathVal('p3')
        }

    }, [item])



    const handleClick = () => {
        navigate(`/user/${item.id}`)
    }

    return (<>
        {item && <OutlinedBox className={pathVal === "p3" ? "p3" : "p2"} onClick={handleClick}>

            <ImgBox >
     <img style={{ position: "absolute", top: "40px" }} src={require(`../../profile_img/${img}`)} />
            </ImgBox>

            <DetailTextBox >
                <TextBox>
                    <TitleText>이름</TitleText>
                    <Text>{item.name}</Text>
                </TextBox>

                <TextBox>
                    <TitleText>생년월일</TitleText>
                    <Text>{item.date}</Text>
                </TextBox>
                <TextBox>
                    <TitleText>한마디</TitleText>
                    <Text>{item.comment}</Text>
                </TextBox>
            </DetailTextBox>
        </OutlinedBox>}
    </>);
}