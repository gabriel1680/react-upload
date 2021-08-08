import { Component } from "react";

import GlobalStyle from "../global/global";
import { Container, Content } from "./styles";
import Upload from "../upload";
import FileList from "../fileList";

class App extends Component {

  state = {
    uploadedFiles: []
  };

  handleUpload(files) {
    console.log(files);
  }

  render() {
    return (
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload} />
          <FileList />
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
