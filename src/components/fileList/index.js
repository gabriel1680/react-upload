import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview, Status } from "./styles";

// Stateless component
function FileList({ files }) {
    return (
        <Container>
            {/* <li>
                <FileInfo>
                    <Preview src="blob:http://localhost:3000/26629cc0-c8a8-4869-9798-d649e2d12f70" />
                    <div>
                        <strong>Imagem 1</strong>
                        <span>64kb<button onClick={() => {}}>Excluir</button> </span>
                    </div>
                </FileInfo>

                <Status>

                    <a href="blob:http://localhost:3000/c1c4ba40-f9fe-4bf2-a49f-abefc12150bc" target="_blank" rel="noopener noreferrer">
                        <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                    </a>

                    <MdCheckCircle size={24} color="#78e5d5" />
                </Status>
            </li>
            <li>
                <FileInfo>
                    <Preview src="blob:http://localhost:3000/0891c2cd-7d01-43fe-92ba-f7a77fa4a185" />
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
            </li> */}
            {files.map(uploadedFile => (
                <li key={uploadedFile.id}>
                    <FileInfo>
                        <Preview src={uploadedFile.preview} />
                        <div>
                            <strong>{uploadedFile.name}</strong>
                            <span>
                                {uploadedFile.readableSize}
                                {uploadedFile.uploaded && (
                                    <button onClick={() => {}}>Excluir</button>
                                )}
                            </span>
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
            ))}
        </Container>
    );
}

export default FileList;