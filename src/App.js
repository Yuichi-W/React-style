import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyleJsx } from "./components/StyleJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyleJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
