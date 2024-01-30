import { motion } from "framer-motion";
import { useEffect } from "react";
import { IoCheckmark } from "react-icons/io5";
import { MdHourglassBottom } from "react-icons/md";
import CanadaFlag from "../../assets/flag-images/Canada_Flag.svg";
import USAFlag from "../../assets/flag-images/USA_Flag.svg";
import { FaRocket } from "react-icons/fa6";
import { RiShining2Fill } from "react-icons/ri";

import "./MainAbout.css";

const MainAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const aboutMeVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay: 0.2 },
    },
  };
  const viewportOption = {
    amount: 0.1,
    once: true,
  };

  return (
    <div className="about-me">
      <div className="sections">
        <motion.section
          className="introduction"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOption}
          variants={aboutMeVariants}
        >
          <h3>Introduction</h3>
          <p>
            <FaRocket className="rocket-icon" /> My name is Allen. I am currently a first year student attending the
            University of Waterloo, as a Candidate for BASc in Computer Engineering.{" "}
            <FaRocket className="rocket-icon" />
          </p>
          <p>
            <RiShining2Fill className="shining-icon" /> An ambitious individual, with a mission to change the world the
            best I can. <RiShining2Fill className="shining-icon" />
          </p>
          <p>I currently live in Toronto, Canada.</p>
          <br></br>
          <p className="co-op">CURRENTLY SEEKING SUMMER CO-OPS/INTERNSHIPS FOR MAY-AUG 2024</p> {/*TODO*/}
          <p>
            Interested in software roles, anywhere in Canada or US.{" "}
            <img src={CanadaFlag} alt="Canada Flag" className="flag-icon" />
            <img src={USAFlag} alt="USA Flag" className="flag-icon" />
          </p>
          <p>
            Free feel to contact me using my socials in the footer (email preferred), always willing to connect and
            talk!
          </p>
          <br />
          <p>
            I have always had a ton of interests, and did not know what I wanted to do in the future for the longest
            time.
          </p>
          <p>
            However, in May 2023, I decided to pursue Computer Engineering at the University of Waterloo, one of North
            America&apos;s most innovative and top technology schools.
          </p>
        </motion.section>
        <div className="edu_skills">
          <motion.section
            className="education"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOption}
            variants={aboutMeVariants}
          >
            <h3>Education</h3>
            <div className="uni">
              <h4>University of Waterloo</h4>
              <h6>Waterloo, ON</h6>
              <h5>Computer Engineering</h5>
              <div className="first-year">
                <section className="terms">
                  <p>Term 1 (Sep 2023 - Dec 2023)</p>
                  <p>
                    <ul>
                      <li>
                        Linear Algebra <IoCheckmark className="checkmark-icon" />
                      </li>
                      <li>
                        Calculus 1 & 2 <IoCheckmark className="checkmark-icon" />
                      </li>
                      <li>
                        Classical Mechanics <IoCheckmark className="checkmark-icon" />
                      </li>
                      <li>
                        Programming <IoCheckmark className="checkmark-icon" />
                      </li>
                      <li>
                        Project Studio <IoCheckmark className="checkmark-icon" />
                      </li>
                      <li>
                        Engineering Profession and Practice <IoCheckmark className="checkmark-icon" />
                      </li>
                      <li>
                        Communication in Engineering <IoCheckmark className="checkmark-icon" />
                      </li>
                    </ul>
                  </p>
                </section>
                <section className="terms">
                  <p>Term 2 (Jan 2024 - Apr 2024)</p>
                  <p>
                    <ul>
                      <li>
                        Calculus 3 <MdHourglassBottom className="hourglass-icon" />
                      </li>
                      <li>
                        Electricity and Magnetism <MdHourglassBottom className="hourglass-icon" />
                      </li>
                      <li>
                        Discrete Mathematics and Logic <MdHourglassBottom className="hourglass-icon" />
                      </li>
                      <li>
                        Digital Circuits and Systems <MdHourglassBottom className="hourglass-icon" />
                      </li>
                      <li>
                        Linear Circuits <MdHourglassBottom className="hourglass-icon" />
                      </li>
                      <li>
                        Engineering Economics <MdHourglassBottom className="hourglass-icon" />
                      </li>
                    </ul>
                  </p>
                </section>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="skills"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOption}
            variants={aboutMeVariants}
          >
            <h3>Skills</h3>
            <div className="technical-skills">
              <h4>Technical Skills</h4>
              <p>
                <b>Languages:</b> Python, C++, C, Swift, SQL/NoSQL, TypeScript, JavaScript, CSS, HTML
              </p>
              <p>
                <b>Frameworks & Libraries:</b> React.js, Next.js, Vue.js, PyTorch, Tailwind
              </p>
              <p>
                <b>Development Tools & Services:</b> AWS, Node.js, Vite.js, Firebase, Postman
              </p>
              <p>
                <b>Developer Tools:</b> Git, Github, VSCode
              </p>
              <p>
                <b>Misc:</b> STM32, STM32CubeIDE, MPU6050, Microsoft Office, Google Workspace, Adobe Suite
              </p>
            </div>
            <div className="soft-skills">
              <h4>Soft Skills</h4>
              <p>Leadership, Teamwork, Communication, Creativity, Problem-Solving</p>
            </div>
            <br />
          </motion.section>
        </div>
        {/* <motion.section
          className="misc"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOption}
          variants={aboutMeVariants}
        >
          <h3>Misc</h3>
          <section className="interests">
            <h5>Interests</h5>
            <p>
              Software, Technology, Design, Hardware, Space, Business, Management, Sports, History, Medical Science,
              Exploring
            </p>
            <h5>Favorites</h5>
            <p>Color: Blue</p>
            <p>Sports Teams: Tampa Bay Lightning, Manchester City</p>
            <p>Food: Idk, there&apos;s a lot</p>
            <p>Travel destination: Idk, so many. Tons of places in the US, Europe, and China</p>
            <p>Movie: Lord of the Rings</p>
            <p>Artist: Probably NF right now</p>
          </section>
        </motion.section> */}
      </div>
    </div>
  );
};

export default MainAbout;
