import type { NextPage } from "next";
import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, Paragraph } from "./components/Styles";

const Home: NextPage = () => {
  return (
    <Container>
      <Navigation />
      <Content>
        <Header><a href="https://forms.gle/ooUf1NSCgUJV8h4H9">Registration form: Click here</a></Header>
        <Header>
          Welcome to the official Victoria Engineering Club website!
        </Header>
        <Header>Who are we?</Header>
        <Paragraph>
          Victoria Engineering Club is a group of Victoria University students
          who share a common interest in engineering and technology. We host
          events involving gaming, software and electronic challenges, and
          connections with notable members of the engineering and technology
          industry.
        </Paragraph>

        <Header>What are we about?</Header>
        <Paragraph>
          Our goal is to enrich students’ university experience by providing
          opportunities to connect with the New Zealand tech industry, develop
          skills, and engage in fun social activities.
        </Paragraph>
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
