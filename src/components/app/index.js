import { Component } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";

import GlobalStyle from "../global";
import { Container, Content } from "./styles";
import Upload from "../upload";
import FileList from "../fileList";
import api from "../../api";

class App extends Component {

  state = {
    uploadedFiles: []
  };

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });
  };

  processUpload = uploadedFile => {
    const { file, name } = uploadedFile;

    const data = new FormData();
    data.append('file', file, name);

    api.post('posts', data, {

      onUploadProgress: e => {

        const { loaded, total, id } = e;

        const percent = Math.round((loaded * 100) / total);

        const progress = parseInt(percent);

        this.updateFileProgress(uploadedFile.id, {
          progress,
        });
      }
    });
  };

  updateFileProgress = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile;
      })
    });
  };

  render() {

    const { uploadedFiles } = this.state;

    return (
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload} />
          {!!uploadedFiles.length && (
            <FileList files={uploadedFiles} />
          )}
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
