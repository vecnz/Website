import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, LI, Paragraph, UL } from "./components/Styles";

const subclubs = () => {
  return (
    <Container>
      <Navigation />
      <Content>
        <Header>All Sub-Clubs</Header>
        <UL>
          <LI>
            <Header>VISDA</Header>
            <Paragraph>
              The Victoria Information Systems and Data Analytics Society aims
              to build students' skills and experience for careers in
              information systems and data analytics, connect students with
              employers, and champion the value of information systems and data
              analytics within Victoria University and beyond. VISDA will hold
              study sessions in related subjects, run competitions, promote
              opportunities for internships and graduate programmes, organise
              speaker events and more!
            </Paragraph>
          </LI>VRAM/VSEC/GDSC
          <LI>
            <Header>VRAM</Header>
            <Paragraph>
              A robotics club for beginners to experts, holding workshops to teach both the software and hardware sides of robotics.
              When it is safe to hold, we plan to attend university-level competitions such as VEXU and hope to invite
              experts in the field to join us.
            </Paragraph>
          </LI>
          <LI>
            <Header>VSEC</Header>
            <Paragraph>

            </Paragraph>
          </LI>
          <LI>
            <Header>GDSC</Header>
            <Paragraph>

            </Paragraph>
          </LI>
        </UL>
      </Content>
      <Footer />
    </Container>
  );
};

export default subclubs;
