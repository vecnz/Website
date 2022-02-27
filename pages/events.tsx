import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, LI, Paragraph, UL } from "./components/Styles";

const events = () => {
  return (
    <Container>
      <Navigation />
      <Content>
        <Header>Official 2022 VEC Events</Header>
        <Paragraph>
          Keep up to date with all the officially run events put on by the
          Victoria Engineering Club!
        </Paragraph>
        <UL>
          <LI>
            <UL>
              <LI><Header>Gaming Marathon</Header></LI>
              <LI><Paragraph>When: TBD</Paragraph></LI>
              <LI><Paragraph>Cost: TBD</Paragraph></LI>
              <LI><Paragraph>Description: TBD</Paragraph></LI>
            </UL>
          </LI>
          <br/>
          <LI>
            <UL>
              <LI><Header>Victoria Hackfest</Header></LI>
              <LI><Paragraph>When: TBD</Paragraph></LI>
              <LI><Paragraph>Cost: TBD</Paragraph></LI>
              <LI><Paragraph>Description: TBD</Paragraph></LI>
            </UL>
          </LI>
          <br/>

          <LI>
            <UL>
              <LI><Header>Game Jam</Header></LI>
              <LI><Paragraph>When: TBD</Paragraph></LI>
              <LI><Paragraph>Cost: TBD</Paragraph></LI>
              <LI><Paragraph>Description: TBD</Paragraph></LI>
            </UL>
          </LI>
          <br/>

          <LI>
            <UL>
              <LI><Header>Pub Quiz</Header></LI>
              <LI><Paragraph>When: TBD</Paragraph></LI>
              <LI><Paragraph>Cost: TBD</Paragraph></LI>
              <LI><Paragraph>Description: TBD</Paragraph></LI>
            </UL>
          </LI>
          <br/>

        </UL>
      </Content>
      <Footer />
    </Container>
  );
};

export default events;
