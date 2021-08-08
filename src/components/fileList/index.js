import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview, Status } from "./styles";

// Stateless component
function FileList() {
    return (
        <Container>
            <li>
                <FileInfo>
                    <Preview src="" />
                    <div>
                        <strong>profile.png</strong>
                        <span>64kb <button onClick={() => {}}>Excluir</button> </span>
                    </div>
                </FileInfo>

                <Status>
                    {/* <div> */}
                    <CircularProgressbar
                        styles={{
                            root: { width: 24 },
                            path: { stroke: '#2ecc71' }
                        }}
                        strokeWidth={10}
                        percentage={60}
                    />
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                    </a>

                    <MdCheckCircle size={24} color="#78e5d5" />
                    <MdError size={24} color="#e57878" />
                    {/* </div> */}
                </Status>
            </li>
        </Container>
    );
}

export default FileList;