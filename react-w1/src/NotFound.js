import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFound = (props) => {
    let navigate = useNavigate();
    return (
      <Wrong>
        <h1>주소가 잘못되었습니다!</h1>
        <p>이전 페이지로 돌아가시려면 버튼을 눌러주세요.</p>
        <button onClick={() => navigate(-1)}>돌아가기</button>
      </Wrong>
    );
  };
  
  const Wrong = styled.div`
  button {
    color: white;
    font-weight: bold;
    font-size: 16px;
    background-color: purple;
    width: 240px;
    height: 50px;
    border: 2px solid ;
    border-radius: 10px;
    margin: 15px auto;
    cursor: pointer;
    &:hover {
        background-color: thistle;
        color: purple!important;
        border-color: purple;
    }
  }
  `;
  
  export default NotFound;
  