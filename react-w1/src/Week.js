import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Week = () => {
  let navigate = useNavigate();
  const days = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <Point>
      <h2>내 일주일은?</h2>
      {Array.from({ length: days.length },(e, i) => {
        let random = Math.floor(Math.random() * 5) + 1;
        return (
          <div key={i}>
            <h3>{days[i]}</h3>
            {Array.from({ length: 5 },(e, j) => {
              return (
                <div
                  key={j}
                  className={j < random ? "pointCircle" : "circle"}
                ></div>
              );
            })}
            <div
              className="triangle"
              onClick={() => {
                navigate(`/detail/${days[i]}`);
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

  .pointCircle {
    width: 30px;
    height: 30px;
    background: #ffe650;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
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
