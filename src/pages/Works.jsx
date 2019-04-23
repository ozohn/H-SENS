import React, { useState, useEffect } from "react";
import useFetch from "../component/fetch.js";
import WorksEditor from "./WorksEditor.jsx";
import styled from "styled-components";

const Button = styled.button``;
const WorksWrapper = styled.div``;
const WorksContainer = styled.div``;
const Work = styled.div``;

export default function Works() {
  return (
    <WorksWrapper>
      <Button>create</Button>
      <WorksContainer>
        <Work />
      </WorksContainer>
      <WorksEditor />
    </WorksWrapper>
  );
}
