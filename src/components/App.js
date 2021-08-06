import { Component } from "react";

import GlobalStyle from "../styles/global";
import { Container, Content } from "../styles/styles";
import Upload from "./upload";

class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Upload />
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
