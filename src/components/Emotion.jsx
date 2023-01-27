/** @jsxRuntime classic*/
/** @jsx jsx*/
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // 方法①　SCSSと同じかきかたできる
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // 方法②　ReactのInlineStyleと同じような起債できる
  const titleStyle = css({
    margin: "0",
    color: "#3d84a8"
  });

  return (
    // 方法①　css={変数名}でスタイル当てる
    <div css={containerStyle}>
      <p css={titleStyle}>- CSS Emotion -</p>
      <Button>FIGHT!!</Button>
    </div>
  );
};

// 方法③　styled componentと同じ書き方ができる
const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
