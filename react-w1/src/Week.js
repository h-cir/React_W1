import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Week = (props) => {
  let navigate = useNavigate();
  let days = ["월", "화", "수", "목", "금", "토", "일"];
  const [count, setCount] = React.useState(days.length);
  const day_count = Array.from({ length: count }, (v, i) => i);
  return (
    <Point>
      <h2>내 일주일은?</h2>
      {day_count.map((num, i) => {
          let day = days[i];
        return (
          <div key={i}>
            <h3>{day}</h3>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div
              className="triangle"
              onClick={() => {
                navigate(`/detail/${day}`);
              }}
            ></div>
          </div>
        );
      })}
    </Point>
  );
};

const Point = styled.div`
  display: block;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    display: block;
    margin-right: 5px;
  }

  .circle {
    width: 30px;
    height: 30px;
    background: lightgray;
    border-radius: 50%;
    margin: 5px;
  }

  .triangle {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-left: 30px solid purple;
    border-bottom: 15px solid transparent;
    margin: 5px;
    cursor: pointer;
    &:hover {
      width: 0;
      height: 0;
      border-top: 15px solid transparent;
      border-left: 30px solid orange;
      border-bottom: 15px solid transparent;
      margin: 5px;
    }
  }
`;

export default Week;
