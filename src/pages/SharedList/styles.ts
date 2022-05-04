import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: table;
  margin: 0 auto;

  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #e4eafb;

    border-radius: 8px;

    padding: 24px 32px;
    margin: 48px;

    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

    > h1 {
      font-size: 40px;

      color: #1300a0;
    }

    > ul {
      width: 100%;
      align-self: start;

      display: flex;
      flex-direction: column;

      gap: 4px;

      margin: 24px 0 40px;
    }

    > h4 {
      margin: 24px 0 40px;
    }

    > input {
      padding: 16px 24px;
      border-radius: 4px;
      border: none;
      width: 100%;

      background-color: #647ec6;
      color: white;

      font-size: 18px;

      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      ::placeholder {
        color: #c4c4c4;
      }
    }

    > button {
      margin-top: 16px;

      padding: 16px 32px;
      text-transform: uppercase;
      border-radius: 4px;

      border: none;
      width: 100%;
      cursor: pointer;

      background-color: #1300a0;
      color: white;

      font-size: 18px;

      font-weight: bold;
    }
  }
`

export const Item = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: space-between;

  gap: 16px;

  padding: 4px;
  transition: 0.2s;

  :hover {
    background-color: #becdf7;
  }

  > li {
    color: #1300a0;

    ${({ checked }) =>
      checked &&
      css`
        text-decoration: line-through;
      `}
  }

  > input {
    cursor: pointer;
  }
`
