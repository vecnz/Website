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
          </LI>
          <LI>
            <Header>VRAM</Header>
            <Paragraph>
              A robotics club for beginners to experts, holding workshops to
              teach both the software and hardware sides of robotics. When it is
              safe to hold, we plan to attend university-level competitions such
              as VEXU and hope to invite experts in the field to join us.
            </Paragraph>
          </LI>
          <LI>
            <Header>VSEC</Header>
            <Paragraph>
              A fun group of students interested in cybersecurity. The Victoria
              SEcurity Club is a place for students to hangout and work together
              on exploring the world of security. We run a number of workshops,
              CTF's, industry events and compete at national level competitions.
              Always on the lookout for new student and experience is not a
              requirement.
            </Paragraph>
          </LI>
          <LI>
            <Header>GDSC</Header>
            <Paragraph>
              With Google's support, we want to help you discover new interests
              in technical skills and explore your passion through activities
              and events. The goal of our Google Developer Student Club (GDSC)
              as well as that of VEC is to foster a community where people can
              interact, bounce ideas and help each other. Hence forming a space
              to meet people with similar interests with whom you could
              collaborate on projects or just have a chat. As part of this, we
              will be organising hands-on workshops focused around Google
              services to bridge the gap between theory and practice. This will
              include sessions on app development in Android, database
              management with Firebase and so on. (We try our best to
              accommodate events for all levels of experience) We will also be
              offering some training for coding challenges, as practice is the
              key to success (https://codingcompetitions.withgoogle.com/).
              Lastly, online events will be hosted through our platform
              (https://gdsc.community.dev/victoria-university-of-wellington/) so
              make sure to join in advance so you will be good to go during the
              events.
            </Paragraph>
          </LI>
        </UL>
      </Content>
      <Footer />
    </Container>
  );
};

export default subclubs;
