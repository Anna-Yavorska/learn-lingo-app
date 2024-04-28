import { InfoList, MainInfo, Wrapper, InfoWrapper } from "./HomePage.styled";
import img from "../../images/block.svg"
export default function HomePage() {
  return (
      <Wrapper>
          <MainInfo>
              <h1>Unlock your potential with the best  language tutors</h1>
              <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
              <button>Get Started</button>
          </MainInfo>
          <img src={img} alt="Girl with a laptop" width='568' height='530'/>
      <InfoWrapper>
          <InfoList>
        <li>
            <p>32,000 +</p>
            <p>Experienced tutors</p>
        </li>
        <li>
            <p>300,000 +</p>
            <p>5-star tutor reviews</p>
        </li>
        <li>
            <p>120 +</p>
            <p>Subjects taugh</p>
        </li>
        <li>
            <p>200 +</p>
            <p>Tutor nationalities</p>
        </li>
              </InfoList>
              </InfoWrapper>
    </Wrapper>
  );
}