import styled from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { OpenMobileMenu } from "../etc/atom";

/* 햄버거 버튼 */
const MenuButton = styled.div<{ isOpen: boolean }>`
  width: 32px;
  height: 24px;
  position: fixed;

  top: 16px;
  right: 20px;

  z-index: 2000;

  cursor: pointer;

  span {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.textColor};
    transition: 0.3s ease-in-out;

    &:nth-child(1) {
      top: ${(props) => (props.isOpen ? "50%" : "0")};
      transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      top: 50%;
      opacity: ${(props) => (props.isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      top: ${(props) => (props.isOpen ? "50%" : "100%")};
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

/* 배경 어둡게 */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1500;
`;

/* 오른쪽 사이드 패널 */
const SidePanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 160px;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  z-index: 1600;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  padding-right: 30px;
`;

/* 메뉴 리스트 */
const MenuList = styled.ul`
  list-style: none;
  text-align: right;

  li {
    margin-bottom: 24px;

    a {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${(props) => props.theme.textColor};
      text-decoration: none;
    }
  }
`;

/* 하단 */
const MenuFooter = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.6;
`;

function MobileMenu() {
  const [open, setOpen] = useRecoilState(OpenMobileMenu);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* 햄버거 버튼 */}
      <MenuButton
        className="mMenu"
        isOpen={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </MenuButton>

      {/* 사이드 메뉴 */}
      {open && (
        <>
          <Backdrop onClick={() => setOpen(false)} />

          <SidePanel>
            <MenuList>
              <li>
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/Project" onClick={() => setOpen(false)}>
                  Project
                </Link>
              </li>
            </MenuList>

            <MenuFooter>© 2026 SH.</MenuFooter>
          </SidePanel>
        </>
      )}
    </>
  );
}

export default MobileMenu;
