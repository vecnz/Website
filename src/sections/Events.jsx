//Component imports
import Iframe from "react-iframe";
import MediaQuery from "react-responsive";
import SectionDiv from "../components/SectionContainer";

//Returns the calendar with the correct height based on device
const Calendar = (props) =>{
    return(
                <Iframe 
                    url = "https://calendar.google.com/calendar/embed?src=n24bj6sh2ckbafp9j7jjc092sg%40group.calendar.google.com&ctz=Pacific%2FAuckland"
                    width="100%"
                    height={props.heightValue}
                    frameBorder="none"
                />
    )
}

//Returns component
const Events = () =>{
    return(
        <SectionDiv>
            {/* Desktop */}
            <MediaQuery minWidth={1025}>
                <Calendar heightValue="600"/>
            </MediaQuery>

            {/* Phones */}
            <MediaQuery maxWidth={480}>
                <Calendar heightValue="400"/>
            </MediaQuery>
        </SectionDiv>
    )
}

export default Events;
