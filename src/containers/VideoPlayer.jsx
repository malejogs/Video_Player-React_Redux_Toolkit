import React from "react";
import DisplayComponent from "../components/DisplayComponent";
import ControlsComponent from "../components/ControlsComponent";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 70vh;
`;

const VideoPlayer = ({ list }) => (
  <Container>
    <DisplayComponent />
    <ControlsComponent list={list} />
  </Container>
);

export default VideoPlayer;
