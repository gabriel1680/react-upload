import React, { Component } from "react";

import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styled";

export default class Upload extends Component {

    renderDragMessage(isDragActive, isDragReject) {
        if(!isDragActive) return <UploadMessage>Arraste uma foto aqui!</UploadMessage>;

        if(isDragReject) return <UploadMessage type="error">Tipo de arquivo não suportado</UploadMessage>;

        return <UploadMessage type="succes">Solte os arquivos para fazer o upload</UploadMessage>;
    }

    render() {
        return (
            <Dropzone accept="image/*" onDropAccepted={() => {}}>
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

