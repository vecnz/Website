//#28375d Navy blue
//#fff background colour

//Component imports
import Container from "./components/Container"
import Content from "./components/Content"
import Navigation from "./components/Navigation"
import { HorLine } from "./components/Styles"

//Section imports
import WhoAreWe from "./sections/WhoAreWe"
import WhatWeAreAbout from "./sections/WhatWeAreAbout"
import Events from "./sections/Events"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Container>
      <Navigation/>

      <Content>
        <WhoAreWe/>
        <HorLine/>
        <WhatWeAreAbout/>
        <HorLine/>
        <Events/>
      </Content>
      
      <Footer/>
    </Container>
  );
}

export default App;
