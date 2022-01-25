import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Detail = (props) => {
    let navigate = useNavigate();
    const {day} = useParams();
  return (
    <DetailBody>
      <h3>
        <span>{day}요일</span> 평점 남기기
      </h3>
      <div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        평점 남기기
      </button>
    </DetailBody>
  );
};

const DetailBody = styled.div`
  span {
    background-color: orange;
    padding: 3px 5px;
    border-radius: 5px;
    color: white;
  }
  div {
    display: flex;
    justify-content: center;
  }
  .circle {
    width: 30px;
    height: 30px;
    background: lightgray;
    border-radius: 50%;
    margin: 5px;
  }
  button {
    color: white;
    font-weight: bold;
    font-size: 16px;
    background-color: purple;
    width: 240px;
    height: 50px;
    border: 2px solid;
    border-radius: 10px;
    margin: 15px auto;
    cursor: pointer;
    &:hover {
      color: purple;
      font-weight: bold;
      font-size: 16px;
      background-color: thistle;
      border: 2px solid thistle;
    }
  }
`;

export default Detail;