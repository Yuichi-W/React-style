// StyledComponentsはは人気のあるライブラリ スタイルを当てたコンポーネント
// 変数名は何でもよいstyled
// SCSSからの移行もしやすい（記法が同じため）
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    // 変数名で記載できる
    // 問題点は下記のどちらかがわかりずらい
    // 「スタイルを当てただけのコンポネント」or「他のコンポーネントからインポートしたものか」
    <Container>
      <Title>- Styled Components -</Title>
      <Button>FIGHT!!</Button>
    </Container>
  );
};

// ``内はCSS同様の記載ができる
// またSCSSと同じ記法が使用可能
const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`;
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
