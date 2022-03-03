//Package imports
import styled from "styled-components";
import { slide as Menu, State } from "react-burger-menu";
import Link from "next/link";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

const options = [
  { value: "/", label: "Home" },
  { value: "/events", label: "Events" },
  { value: "/exec", label: "Executives" },
  { value: "/contact", label: "Contacts" },
  { value: "/subclubs", label: "Sub-clubs" },
  { value: "/sponsors", label: "Sponsors" },
  { value: "/projects", label: "Projects" },
  { value: "/exec", label: "Executives" },
];

const customStyles = {
  option: (provided:any, state:any) => ({
    ...provided,
    color: state.isSelected ? '#28375d' : '#28375d',
    
  }),
  control: (provided:any) => ({
    ...provided,
    height: '80%',
    width:'100%',
    margin:"7%",
    // width:'auto',
    border:'none'
    
  }) ,
  singleValue: (provided:any) => ({
    ...provided,
    color: '#28375d',
  })
}

//Logic for navigation bar
const Navigation = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption.label);
    router.push(selectedOption.value);
  };
  return (
    <StyledNavigation>
      <Button>Victoria Engineering Club</Button>
      <Select
        defaultValue={options[0]}
        onChange={handleChange}
        options={options}
        styles={customStyles}
      />
    </StyledNavigation>
  );
};

export default Navigation;
