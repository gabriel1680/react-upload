import React, { Component } from "react";
import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles";


export default class Upload extends Component {

    renderDragMessage(isDragReject, isDragActive) {

        if(!isDragActive) {
            return <UploadMessage>Arraste uma foto aqui!</UploadMessage>;
        }

        if(isDragReject) {
            return <UploadMessage type="error">Tipo de arquivo não suportado</UploadMessage>;
        }

        return <UploadMessage type="success">Solte os arquivos para fazer o upload</UploadMessage>;
    };

    render() {

        const { onUpload } = this.props;

        return (
            <Dropzone accept="image/*" onDropAccepted={onUpload}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        {this.renderDragMessage(isDragReject, isDragActive)}
                    </DropContainer>
                )}
            </Dropzone>
        );
    }
}

