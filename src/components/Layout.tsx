import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  position: absolute;
  top: 70px;
  bottom: 70px;
  left: 70px;
  right: 70px;
  overflow: hidden;

  & > div {
    height: 100%;
    display: flex; /* ⭐ 항상 flex */
  }

  @media ${(props) => props.theme.mobile} {
    position: static;
  }
`;
const ProjectSpacer = styled.div`
  width: 17%;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.bgColor};

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
const HeroText = styled.div`
  width: 43%;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem;

  h1 {
    font-size: 3rem;
    letter-spacing: 0.4em;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.05rem;
    opacity: 0.6;
    letter-spacing: 0.1em;
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
const Contents = styled.div`
  width: calc(100% - 35%);
  background-color: ${(props) => props.theme.bgColor};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100vh;
  }
`;
function Layout() {
  const location = useLocation();
  const isProject = location.pathname.includes("Project");

  const getHeroText = () => {
    if (location.pathname.includes("About")) {
      return { title: "ABOUT", desc: "Profile" };
    }
    return null;
  };

  const hero = getHeroText();

  return (
    <Container>
      <div>
        {/* About 페이지 */}
        {hero && (
          <HeroText>
            <h1>{hero.title}</h1>
            <p>{hero.desc}</p>
          </HeroText>
        )}

        {/* Project 페이지용 빈 공간 */}
        {isProject && !hero && <ProjectSpacer />}

        <Contents>
          <Outlet />
        </Contents>
      </div>
    </Container>
  );
}

export default Layout;
