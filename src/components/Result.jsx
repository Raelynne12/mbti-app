import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {ResultData} from "../assets/data/result"
import styled from "styled-components"
import KakaoSharedButton from './KakaoSharedButton'

export default function Result() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const mbti = searchParams.get("mbti")
  //console.log(mbti)
  const [result, setResult] = useState({})

  useEffect(() => {
    const select = ResultData.find((item, idx) => 
     item.best === mbti
    )
    console.log(select)
    setResult(select)
  },[mbti])

  return (
    <Container>
    <Header>서현이의 매력 포인트는</Header>
    <LogoImg>
        <img src = {result.image} alt={result.name} style={{width:"45%", border: "8px dotted #fff"}}/>
    </LogoImg>
    <Results>{result.name}</Results>
    <Desc>{result.desc}</Desc>
    <Button onClick = {() => {navigate("/")}}>
        다시하기
    </Button>
    <KakaoSharedButton data={result}></KakaoSharedButton>
    <Footer> CopyrightⓒRaelynne. All rights reserved.</Footer>
</Container>
  )
}

const Desc = styled.p`
    display: flex;
    font-size: 15px;
    line-height: 1.2;
    mask-type: 20px;
    padding: 0 20px;
    word-break: keep-all;
    margin-top: 0px;
`

const Results = styled.h2`
    display: flex;
    font-size: 20px;
    justify-content: center;
`

const Button = styled.button`
    font-family: inherit;
    font-size: 17px;
    border: none;
    outline: none;
    background-color: #000;
    color: #fff;
    padding: 7px 7px;
    margin-top: 20px;
    margin-bottom: 30px;
`

const LogoImg = styled.div`
    box-sizing: border-box;
    opacity: 100%;
    margin-top: 20px;
`

const Container = styled.div`
    display: flex;
    background-color: #ecaedf;
    display: flex;
    flex-direction: column;
    min-height: 70vh;
    justify-content: center;
    align-items: center;
`
const Header = styled.header`
    display: flex;
    background-color: #f172cb;
    border-bottom: 3px solid #000;
    font-size: 25px;
    color: #000;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
`
const Footer = styled.footer`
    //display: flex;
    color: #000;
    border-top: 2px solid #000;
    justify-content: center;
    align-items: center;
    font-size: small;
    width: 100%;
`