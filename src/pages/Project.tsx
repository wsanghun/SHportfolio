import styled from "styled-components";
import { motion } from "framer-motion";
import TitleForm from "../components/Title";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { ModalText } from "../etc/atom";
import { Loading } from "../components/Loading";
import { FaGripLines } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

const Container = styled(motion.section)`
  padding: 5.75rem 3.25rem 0;

  .button {
    text-align: right;
    button {
      color: ${(props) => props.theme.textColor};
      background-color: transparent;
      border: none;
      font-size: 24px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding: 5.75rem 20px 0;
  }
`;

const ContentBox = styled(motion.div)<{ $shape: boolean }>`
  margin-top: 1.875rem;
  display: grid;
  overflow-y: scroll;
  grid-template-columns: ${(props) =>
    props.$shape ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
`;

const ProjectBox = styled(motion.div)`
  cursor: pointer;
  height: 21.25rem;
  background-color: #3e3e3e;
  margin: 1.563rem;
  overflow: hidden;
  position: relative;

  .imgBox {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    position: absolute;
    bottom: 0;
    width: 95%;
    height: 80px;
    line-height: 80px;
    padding-left: 20px;
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
    font-size: 1rem;
    left: 50%;
    transform: translate(-50%, -20%);
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.bgColor};
  }

  &:hover {
    filter: grayscale(100%);
  }

  &:hover .title {
    bottom: 3%;
    opacity: 1;
    visibility: visible;
  }

  @media ${(props) => props.theme.mobile} {
    height: 15.25rem;
    margin: 0.5rem;

    .title {
      bottom: 3%;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export interface ProjectProps {
  id: string;
  name: string;
  state: string;
  skill: string[];
  gitLink: string;
  gitCode: string;
  img: string;
  text: string;
}

function Project() {
  const setId = useSetRecoilState(ModalText);
  const [shape, setShape] = useState(false);
  const [DB, setDB] = useState<ProjectProps[]>([]);
  const [loading, setLoading] = useState(true);

  const changeShape = () => {
    setShape((prev) => !prev);
  };

  useEffect(() => {
    fetch("/api/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setDB(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <TitleForm titleName="Project" />

      <div className="button">
        <button onClick={changeShape}>
          {shape ? <FaGripLines /> : <BsGridFill />}
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <ContentBox $shape={shape}>
          {DB.map((element) => (
            <ProjectBox
              key={element.id}
              layoutId={element.id}
              onClick={() => setId(element.id)}
            >
              <img
                className="imgBox"
                src={require(`../img/${element.img}.png`)}
                alt={element.name}
              />
              <h3 className="title">{element.name}</h3>
            </ProjectBox>
          ))}
        </ContentBox>
      )}
    </Container>
  );
}

export default Project;
