import React, { useState } from 'react'
import styled from "styled-components"
import {QuestionData} from "../assets/data/question"
import { useNavigate } from 'react-router-dom'

export default function Question() {
  const navigate = useNavigate()
  const [questionNo, setQuestionNo] = useState(0)   //초기값 0부터 시작
  const total = QuestionData.length
  const [totalScore, setTotalScore] = useState([
    {id:"EI", score:0},
    {id:"SN", score:0},
    {id:"TF", score:0}
  ])

  const onClick = (point, type) => {
    const newScore = totalScore.map((item) => {
      return (item.id===type?{id:item.id, score:item.score+point}:item)
    })
    setTotalScore(newScore)
    console.log(newScore)
    console.log(questionNo)
    setQuestionNo(questionNo+1)
    if(questionNo === total-1) {
      const mbti = newScore.reduce((acc, current) => 
      acc+(current.score >= 2?current.id.charAt(0):current.id.charAt(1)),"")
      console.log(mbti)
      navigate(`/result?mbti=${mbti}`)
    }
  }

  return (
    <Container>
      <Header>나랑 놀아조</Header>
      <Progress>
        <div className='inner'>
          <div className='bar' style={{width:`${questionNo/9*100}%`}}></div>
        </div>
      </Progress>
      <Title>{QuestionData[questionNo].title}</Title>
      <Buttons>
        <Button onClick={() => {
          onClick(1, QuestionData[questionNo].type)
        }}>
          {QuestionData[questionNo].answera}
        </Button>
        <Button onClick={()=>{
          onClick(0, QuestionData[questionNo].type)
        }}>
          {QuestionData[questionNo].answerb}
        </Button>
      </Buttons>
      <Footer>CopyrightⓒRaelynne. All rights reserved.</Footer>
    </Container>
  )
}
const Progress = styled.div`
    padding: 0 30px;
    width: 100%;
    margin-top: 100px;
    box-sizing: border-box;
    .inner {
        width: 100%;
        border-radius: 15px;
        height: 15px;
        border: 2px solid #000;
        background-color: #fff;
        overflow: hidden;
        .bar {
        background-color: #f535bb;
        height: 100%;
        transition: all 0.25s ease;
        border-right: 2px solid #000;
        }
    }
    
`

const Buttons = styled.div`
    display: flex;
    margin-top: 80px;
    margin-bottom: 50px;
    justify-content: center;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
`

const Button = styled.button`
  outline: none;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  color: #000;
  font-size: 17px;
  font-weight: 500;
  font-family: inherit;
  margin: 0 5px;
  width: calc(50% - 10px);
  word-break: keep-all;
  flex-grow: 0;
  flex-shrink: 0;
  border: 5px dotted #000;
`

const Container = styled.div`
    //display: flex;
    background-color: #ecaedf;
    resize: none;
`
const Title = styled.h2`
    align-items: center;
    justify-content: center;
    margin-top: 90px;
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
    height: 50px;
`
const Footer = styled.footer`
    display: flex;
    color: #000;
    border-top: 2px solid #000;
    justify-content: center;
    align-items: center;
    font-size: small;
`