import { Component } from "react";

import GlobalStyle from "../styles/global";
import { Container, Content } from "../styles/styles";

class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          teste
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
