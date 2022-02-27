//Package imports
import styled from "styled-components";

import Link from "next/link";

//Style for navigation bar background
const StyledNavigation = styled.nav`
  background-color: #28375d;
  color:#ebebeb;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

interface SectionProps {
  side: string;
}

const Section = styled.div<SectionProps>`
  display: flex;
  justify-content: ${(props) => props.side};
  align-items: center;
  gap: 2rem;
  height: 100%;
  width: 100%;
`;

const Title = styled.button`
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color:#ebebeb;
  padding: 1rem;
`;

const Button = styled.button`
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color:#ebebeb;
  padding: 1rem;
  :hover{
    text-decoration:underline;
  }
`;

//Logic for navigation bar
const Navigation = () => {
  return (
    <StyledNavigation>
      <Section side="left">
        <Title>VEC</Title>
      </Section>
      <Section side="right">
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/events">
          <Button>Events</Button>
        </Link> 
        <Link href="/exec">
          <Button>Executives</Button>
        </Link>
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
        <Link href="/subclubs">
          <Button>SubClubs</Button>
        </Link>
        <Link href="/sponsors">
          <Button>Sponsors</Button>
        </Link>
        <Link href="/projects">
          <Button>Projects</Button>
        </Link>
        <a target="_blank" href="https://github.com/vecnz/documents">
          <Button>Documents</Button>
        </a>
      </Section>
    </StyledNavigation>
  );
};

export default Navigation;