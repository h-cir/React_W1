import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import Week from "./Week";
import Detail from "./Detail";
import NotFound from "./NotFound";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Week />} />
        <Route path="/detail/:day" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 0px;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
`;

export default App;
