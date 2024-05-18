import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillCloseCircle,
} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { DiCssdeck } from "react-icons/di";
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Container>
      <Div1>
        <Link href="/#header">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        
          <li>
            <Link href="/#header">
              <NavLink>Home</NavLink>
            </Link>
          </li>
      
       
        <li>
          <Link href="/#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        {!isMobile && (
        <li>
          <Link href="/#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
         )} 
        {/* {!isMobile && ( */}
        <li>
          <Link href="/#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
       { /*)}*/}
        {/* <li>
          <Link href="/services">
            <NavLink>Services</NavLink>
          </Link>
        </li> */}
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/AfaqShahidKhan" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/afaq-shahid-khan" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/afaqshahidkhan" target="_blank">
          <FaSquareXTwitter size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
