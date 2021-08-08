import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview, Status } from "./styles";

// Stateless component
function FileList({ files }) {
    return (
        <Container>
            <li>
                <FileInfo>
                    <Preview src="blob:http://localhost:3000/5adcc9da-8981-4afb-a8fb-49ebc115fa43" />
                    <div>
                        <strong>Imagem 1</strong>
                        <span>64kb<button onClick={() => {}}>Excluir</button> </span>
                    </div>
                </FileInfo>

                <Status>

                    <a href="blob:http://localhost:3000/5adcc9da-8981-4afb-a8fb-49ebc115fa43" target="_blank" rel="noopener noreferrer">
                        <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                    </a>

                    <MdCheckCircle size={24} color="#78e5d5" />
                </Status>
            </li>
            <li>
                <FileInfo>
                    <Preview src="blob:http://localhost:3000/3549466d-6e16-4c32-bfe2-9437b4acfb2f" />
                    <div>
                        <strong>Imagem 2</strong>
                        <span>64kb</span>
                    </div>
                </FileInfo>

                <Status>
                    <CircularProgressbar
                        styles={{
                            root: { width: 24 },
                            path: { stroke: "#2ecc71" }
                        }}
                        strokeWidth={10}
                        value={60}
                    />
                </Status>
            </li>
            <li>
                <FileInfo>
                    <Preview src="blob:http://localhost:3000/9e8d160e-1711-4cc1-85a5-6808bbb78c5d" />
                    <div>
                        <strong>Imagem 3</strong>
                        <span>64kb</span>
                    </div>
                </FileInfo>

                <Status>
                    <MdError size={24} color="#e57878" />
                </Status>
            </li>
            {/* {files.map(uploadedFile => (
                <li>
                    <FileInfo>
                        <Preview src={uploadedFile.preview} />
                        <div>
                            <strong>{uploadedFile.name}</strong>
                            <span>{uploadedFile.readableSize}<button onClick={() => {}}>Excluir</button> </span>
                        </div>
                    </FileInfo>

                    <Status>
                        {!uploadedFile.uploaded && !uploadedFile.error && (
                            <CircularProgressbar
                                styles={{
                                    root: { width: 24 },
                                    path: { stroke: "#2ecc71" }
                                }}
                                strokeWidth={10}
                                value={uploadedFile.progress}
                            />
                        )}

                        {uploadedFile.url && (
                            <a href={uploadedFile.url} target="_blank" rel="noopener noreferrer">
                                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                            </a>
                        )}

                        {uploadedFile.uploaded && (
                            <MdCheckCircle size={24} color="#78e5d5" />
                        )}

                        {uploadedFile.error && (
                            <MdError size={24} color="#e57878" />
                        )}
                    </Status>
                </li>
            ))} */}
        </Container>
    );
}

export default FileList;