import styled from "styled-components";
import { motion } from "framer-motion";
import TitleForm from "../components/Title";

const Container = styled.section`
  padding: 5.75rem 6.25rem 0;
  @media ${(props) => props.theme.mobile} {
    padding: 5.75rem 20px 0;
  }
`;
const AboutMe = styled(motion.div)`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 3.125rem;
  .text {
    line-height: 25px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
const TechImage = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  margin-right: 15px;

  /* ✅ 핵심 */
  background-color: #ffffff;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;
const TechList = styled.div`
  display: grid;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  grid-template-columns: 100px 100px 100px;
  gap: 10px;
  padding-left: 1.375rem;
  @media ${(props) => props.theme.mobile} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Subheading = styled.h3`
  text-transform: capitalize;
  letter-spacing: 3px;
  font-weight: 600;
  padding-left: 10px;
  @media ${(props) => props.theme.mobile} {
    letter-spacing: 1px;
  }
`;
export const showHide = {
  start: {
    opacity: 0,
    transition: {
      duration: 0,
      staggerChildren: 0.5,
    },
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
export const showHideChild = {
  start: {
    y: -5,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
  },
};

function About() {
  return (
    <Container>
      <motion.div variants={showHide} initial="start" animate="end">
        <AboutMe variants={showHideChild}>
          <TitleForm titleName="about me" />
          <div className="text">
            안녕하세요. 저는 웹 개발자가 되고 싶은 우상훈입니다. 시간을 내어 제
            포트폴리오를 봐주셔서 감사합니다.
          </div>
        </AboutMe>
        <AboutMe variants={showHideChild}>
          <TitleForm titleName="개발을 시작하게 된 계기" />
          <div className="text">
            <p>
              의료, 창업, 시공 등 다양한 현장에서 일하며 항상 문제를 직접
              마주하고 고민해 왔습니다.
            </p>
            <p> “이걸 사람이 매번 해야 할까?”, “왜 이렇게 복잡할까?”</p>
            <p>
              이런 질문의 해답을 코드로 만들어가는 역할에 매력을 느껴 웹
              개발자의 길을 선택하게 되었습니다.
            </p>
          </div>
        </AboutMe>
        <AboutMe variants={showHideChild}>
          <TitleForm titleName="- education" />
          <div className="text">
            <ul style={{ listStyle: "circle", paddingLeft: "20px" }}>
              <li>
                2025.07 ~ 2026.01 영진직업전문학교 - JAVA 디지털콘텐츠 웹 개발
                JAVA 과정 수료
              </li>
              <li>2024.05~ 2025.6 바스텍 - 프리랜서 시공</li>
              <li>2023.03 ~ 2024.4 굽굽쿠키 디저트카페 - 창업</li>
              <li>2020.06 ~ 2022.12 여준정형외과 - 방사선사 근무</li>
              <li>2013.03 ~ 2019 수성대학(방사선과)</li>
            </ul>
          </div>
        </AboutMe>
        <AboutMe variants={showHideChild}>
          <TitleForm titleName="- certificate" />
          <div className="text">
            <ul style={{ listStyle: "circle", paddingLeft: "20px" }}>
              <li>방사선사 면허증(2020)</li>
              <li>운전면허 보통 1종(2014)</li>
            </ul>
          </div>
        </AboutMe>
        <AboutMe variants={showHideChild}>
          <TitleForm titleName="Front & Back" />
          <div className="stacks">
            <div>
              <Subheading>- Front</Subheading>
              <TechList>
                <TechImage>
                  <img src={require("../img/html.png")} alt="" />
                </TechImage>
                <TechImage>
                  <img src={require("../img/css.png")} alt="" />
                </TechImage>
                <TechImage>
                  <img src={require("../img/javascript.png")} alt="" />
                </TechImage>
                <TechImage>
                  <img src={require("../img/react.png")} alt="" />
                </TechImage>
                <TechImage>
                  <img src={require("../img/typescript.png")} alt="" />
                </TechImage>
              </TechList>
            </div>
            <div>
              <Subheading>- Back</Subheading>
              <TechList>
                <TechImage>
                  <img src={require("../img/java.png")} alt="" />
                </TechImage>
                <TechImage>
                  <img src={require("../img/jsp.png")} alt="" />
                </TechImage>
                <TechImage>
                  <img src={require("../img/node.png")} alt="" />
                </TechImage>
              </TechList>
            </div>
            <div>
              <Subheading>- framework</Subheading>
              <TechList>
                <TechImage>
                  <img src={require("../img/springboot.png")} alt="" />
                </TechImage>
              </TechList>
            </div>
            <div>
              <Subheading>- Others</Subheading>
              <TechList>
                <TechImage>
                  <img src={require("../img/github.png")} alt="" />
                </TechImage>
                <TechImage>
                  <img src={require("../img/vscode.png")} alt="" />
                </TechImage>
                <TechImage>
                  <img src={require("../img/intellij.png")} alt="" />
                </TechImage>
                <TechImage>
                  <img src={require("../img/notion.png")} alt="" />
                </TechImage>
                <TechImage>
                  <img src={require("../img/eclipse.png")} alt="" />
                </TechImage>
              </TechList>
            </div>
            <div>
              <Subheading>- DataBase</Subheading>
              <TechList>
                <TechImage>
                  <img src={require("../img/mariadb.png")} alt="" />
                </TechImage>
              </TechList>
            </div>
          </div>
        </AboutMe>
      </motion.div>
    </Container>
  );
}

export default About;
