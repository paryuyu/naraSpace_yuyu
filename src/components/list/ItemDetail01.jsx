import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";




export default function ItemDetail01({ item }) {
    const [pathVal, setPathVal] = useState();
    const [img, setImg] = useState("default.png");
    console.log(img,item)
    const navigate = useNavigate()
    const { id } = useParams()

    const TextBox = styled.div`
        margin-right:3px;
        display:flex;
        border-bottom: 1px #EBEBEB solid;
    `

    const Text = styled.p`
        font-weight:200;
    `
    const TitleText = styled.p`
        margin-right:4px;
        margin-left: 4px;
        font-weight:bold;
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

            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', flex: 1, padding: "25px" }}>
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
            </div>
        </OutlinedBox>}
    </>);
}