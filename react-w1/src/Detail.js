import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";


const Detail = () => {
  let navigate = useNavigate();
  const { day } = useParams();

  //땡그래미 5개만들기
  let circles = [1, 2, 3, 4, 5];
  const [circle, setCircle] = React.useState(circles.length);
  const circle_count = Array.from({ length: circle }, (v, i) => i);

  // 평점 찍기
  const [clicked, setClicked] = React.useState([false,false,false,false,false]);
  const handleClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    setClicked(clickStates);
    console.log(clicked);
  }; 
  return (
    <DetailBody>
      <h3>
        <span>{day}요일</span> 평점 남기기
      </h3>
      <div> 
        {circle_count.map((v, i) => {
          return (
            <div key={i}  onClick={(e) => handleClick(e,i)}
            className={clicked[i] ? "clickedCircle" : "circle"}></div> //클래스는 문자열이라 쌍따옴표에 넣어야 했음 ㅠㅠㅠㅠㅠ 성공쓰!
          );
        })}
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
    cursor: pointer;
  }
  
  .clickedCircle {
    width: 30px;
    height: 30px;
    background: rgb(212, 180, 0);
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
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
