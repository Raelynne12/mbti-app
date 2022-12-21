import React, { useEffect } from 'react'
import styled from "styled-components"
const {Kakao} = window

export default function KakaoSharedButton({data}) {
  const url = "https://raelynne-mbti-app.netlify.app/"
  useEffect(() => {
    if(!Kakao.isInitialized()){Kakao.init('a24e9b7c5d82a7b14705dd0dcbd91cd8')}
  },[])
  function shareMessage() {
    Kakao.Share.sendDefault({
      objectType:'feed',
      content: {
        title: `${data.name}`,
        description: `${data.desc}`,
        imageUrl:
          url+data.image,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        }
      ],
    });
  }
  return (
    <Button onClick={shareMessage}>카톡 공유하기</Button>
  )
}

const Button = styled.button`
    font-family: inherit;
    font-size: 17px;
    border: none;
    outline: none;
    background-color: #000;
    color: #fff;
    padding: 7px 7px;
    margin-top: 0px;
    margin-bottom: 30px;
`