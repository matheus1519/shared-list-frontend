import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 32px;

  height: 100%;

  > textarea {
    font-size: 24px;

    padding: 16px;
    border-radius: 8px;

    width: 100%;

    resize: none;

    border: none;
    background: #edf4ff;

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
`;

