import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Afaq Shahid Khan
        <br />
    
      </SectionTitle>
      <SectionText>
      Having Experties in Ruby on Rails, JavaScript, React.js, PostgreSql, MySql, Next.js, Vue.js, Flutter, Vercel, WebSocket,
      JSON, NPM, Postman, ActionCable,Turbo-Stream, Solidus, jQuery, AJAX, RESTful APIs, Bybug, GIT,
      HTML, CSS,Wordpress, Bootstrap, Material UI, Tailwind CSS, Semantic UI.
      </SectionText>
      <Button
  as="a"
  href="https://www.linkedin.com/in/afaq-shahid-khan-102868179"
  target="_blank"
  onClick={(e) => {
    
   e.preventDefault();
 window.location.href = "https://www.linkedin.com/in/afaq-shahid-khan-102868179";
  }}
>
  Learn more
</Button>

    </LeftSection>
  </Section>
);

export default Hero;
