import { Component } from "react";

import GlobalStyle from "../global/global";
import { Container, Content } from "./styles";
import Upload from "../upload";
import FileList from "../fileList";

class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Upload />
          <FileList />
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
