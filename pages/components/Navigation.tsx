//Package imports
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Select from 'react-select';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

//Style for navigation bar background
const StyledNavigation = styled.nav`
  background-color: #28375d;
  color: #ebebeb;
  display: flex;
`;


const Button = styled.button`
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color: #ebebeb;
  padding: 1rem;
  :hover {
    text-decoration: underline;
  }
`;

const DropDownButton = styled.button`
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color: #123123;
  padding: 1rem;
  :hover {
    text-decoration: underline;
  }

`

const DropDown = styled.div`
  display:grid;
  grid-template-columns:1fr;
  color:#123123;
`

const options = [
  { value: '/', label: 'Home' },
  { value: '/events', label: 'Events' },
  { value: '/exec', label: 'Executives' },
  { value: '/contact', label: 'Contacts' },
  { value: '/subclubs', label: 'Sub-clubs' },
  { value: '/sponsors', label: 'Sponsors' },
  { value: '/projects', label: 'Projects' },
  { value: '/exec', label: 'Executives' },

];

//Logic for navigation bar
const Navigation = () => {
  const [selectedOption2, setSelectedOption] = useState(null);
  const router = useRouter();

  const handleChange = (selectedOption:any) =>{
    console.log(selectedOption.value);
    router.push(selectedOption.value);
  }
  // useEffect(()=>{
  //   const router = useRouter()
  //   if(selectedOption !== null){
  //     router.push(selectedOption);
  //   }
  // }[selectedOption])
  return (
    <StyledNavigation>
      <Button>Victoria Engineering Club</Button>
      <Select
        defaultValue={selectedOption2}
        onChange={handleChange}
        options={options}
      />

      
      {/* <RightButton>
        Menu */}
        {/* <Button>REE

        <Menu right>
          {/* <DropDown> */}
            {/* <Link href="/">
              <DropDownButton>Home</DropDownButton>
            </Link>
            <Link href="/events">
              <DropDownButton>Events</DropDownButton>
            </Link>
            <Link href="/exec">
              <DropDownButton>Executives</DropDownButton>
            </Link>
            <Link href="/contact">
              <DropDownButton>Contact</DropDownButton>
            </Link>
            <Link href="/subclubs">
              <DropDownButton>SubClubs</DropDownButton>
            </Link>
            <Link href="/sponsors">
              <DropDownButton>Sponsors</DropDownButton>
            </Link>
            <Link href="/projects">
              <DropDownButton>Projects</DropDownButton>
            </Link>
            <a target="_blank" href="https://github.com/vecnz/documents">
              <DropDownButton>Documents</DropDownButton>
            </a> */}
          {/* </DropDown>      */}
        {/* </Menu>
        </Button> */}

      {/* </RightButton> */}
    </StyledNavigation>
  );
};

export default Navigation;
