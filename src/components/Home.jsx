import React from 'react'
import styled from "styled-components"
import logoimg from "../assets/images/logoimg.jpg"
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    <Container>
        <Header>
            나랑 놀아조
        </Header>
        <Title>
            당신이 생각하는 서현이의 매력 포인트는?
        </Title>
        <LogoImg>
            <img src = {logoimg} alt="" style={{width:"60%",borderRadius: "15px"}}/>
        </LogoImg>
        <Button onClick={() => {navigate("/question")}}>
            게임 시작!
        </Button>
        <Footer>
            CopyrightⓒRaelynne. All rights reserved.
        </Footer>
    </Container>
  )
}

const Button = styled.button`
    font-family: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    background-color: #000;
    color: #fff;
    padding: 15px 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 40%;
`

const LogoImg = styled.div`
    box-sizing: border-box;
    opacity: 100%;
    margin-top: 80px;
    margin-bottom: 30px;
    img {
        filter: brightness(90%);
    }
    
    
`

const Container = styled.div`
    //display: flex;
    height: 100%;
    background-color: #ecaedf;
    display: flex;
    min-height: 70vh;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h2`
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    font-size: clamp(24px, 5vw, 48px);
    word-break: keep-all;
`
const Header = styled.header`
    display: flex;
    background-color: #f172cb;
    border-bottom: 3px solid #000;
    font-size: 25px;
    color: #000;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100%;
    
`
const Footer = styled.footer`
    //display: flex;
    color: #000;
    border-top: 2px solid #000;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    width: 100%;
`