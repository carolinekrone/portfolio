import React from "react";
import { Grid, Cell } from "bold-ui";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="Header">
        <Grid direction="row" justifyContent="space-around">
          <Cell xs={1} lg={8}>
            <img
              src={require("./static/image/logo-carol.svg")}
              alt="CK logo"
            ></img>
          </Cell>
          <Cell>
            <a href="/portfolio/#about">About me</a>
          </Cell>
          <Cell>
            <a href="/portfolio/#work">Work</a>
          </Cell>
          <Cell>
            <a href="/portfolio/#talks">Talks</a>
          </Cell>
        </Grid>
      </header>
      <div className="Container">
        <section className="Welcome Grid">
          <Grid direction="row" alignItems="center" justifyContent="flex-start">
            <Cell xs={12} lg={6}>
              <h1>
                Hello, I'm Carol! <span>&#128075;</span>{" "}
              </h1>
              <p>
                A{" "}
                <span className="Product Underline">product designer</span>{" "}
                living in the {" "}
                <span className="Floripa Underline">
                  north shore{" "}
                </span>
                of São Paulo - Brazil.{" "}
                <br></br>
                Recently, my focus centers around
                emerging technologies, like UX of {" "} <span className="AI Underline">Artificial Intelligence</span>{" "}and crypto.
                Also, I like gifs. <span>&#128129;</span>
              </p>
            </Cell>
          </Grid>
        </section>
        <section id="about" className="About">
          <Grid direction="row" alignItems="baseline" justifyContent="center">
            <Cell xs={10} lg={11}>
              <p className="SectionTitle">Get in touch</p>
            </Cell>
          </Grid>
          <Grid
            direction="row"
            alignItems="baseline"
            justifyContent="space-around"
          >
            <Cell xs={10} lg={4}>
              <Cell className="SocialLinks">
                <a
                  href="https://www.linkedin.com/in/carolinekrone/"
                  aria-label="Caroline Krone profile on Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </Cell>
              <Cell className="SocialLinks">
                <a
                  href="https://www.behance.net/kronecaroline"
                  aria-label="Caroline Krone profile on Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </Cell>
              <Cell className="SocialLinks">
                <a
                  href="https://github.com/carolinekrone"
                  aria-label="Caroline Krone profile on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Cell>
            </Cell>
            <Cell xs={10} lg={6}>
              <p>
                27 years old product designer, I have experience in usability, accessibility, and design systems. <br></br>
                Design is an interdisciplinary discipline and, for that, I am always studying psychology, ethics, and technology, seeking to establish a systemic view of the project.
                <br></br> <br></br>
                Recently, my focus centers around emerging technologies, like UX of Artificial Intelligence and crypto. <br></br>
                <br></br>
                Currently, I'm working at TOTVS Labs, TOTVS 'innovation laboratory, which focuses on research projects with innovative technology like computer vision and machine learning.
                <br></br>
                <br></br>
                In my spare time, I enjoy paddling (Hawaiian canoe), surfing, going to the beach, drinking beer or reading a good book.
              </p>
              <span>&#127817; &#127866; &#128758; &#127944; &#127754;</span>
              <br></br>
              <br></br><br></br>
            </Cell>
          </Grid>
        </section>
        <section id="work" className="Work">
          <Grid direction="column" alignItems="center" justifyContent="center">
            <Cell xs={9}>
              <h2>Work, work, work</h2>
              <span>
                Here you can find some of my works and projects.
              </span>{" "}
              <br></br>
              <br></br>
            </Cell>
          </Grid>
          <Grid direction="row" alignItems="stretch" gap={0} gapVertical={0}>
            <Cell xs={12} lg={3} alignSelf="stretch">
              <article className="Card">
                <h3>Bold design system</h3>
                <p>
                  Bold is an accessible, open source Design System developed for the Bridge lab.
                  It is fully customizable and has themes <em>light and dark.</em>{" "}
                </p>
                <a
                  href="https://bold.bridge.ufsc.br/en/"
                  aria-label="Bold design system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bold website
                </a>{" "}
                <br></br><br></br>
                <a
                  href=" https://www.behance.net/gallery/139757831/Bold-Design-System"
                  aria-label="Bold design system on Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project on Behance
                </a>{" "}
                <br></br>

                <img
                  src={require("./static/image/bold-components.svg")}
                  alt="bold components"
                ></img>
              </article>
            </Cell>
            <Cell xs={12} lg={3} alignSelf="stretch">
              <div className="Card">
                <h3>TOTVS MinhaCoop App</h3>
                <p>
                  Mobile app developed for anesthesiologists. Using computer vision skills and a conversation-like experience, 
                  the app automates the process of sending bulletins for payment without having to fill out paper forms.{" "}
                </p>
                <a
                  href="https://www.behance.net/gallery/112623629/TOTVS-Carol-MinhaCoop"
                  aria-label="TOTVS APP on Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TOTVS Carol MinhaCoop on behance
                </a>
                <br></br>
                <img
                  src={require("./static/image/totvs-minhacoop.png")}
                  alt="tot project no behance"
                ></img>
              </div>
            </Cell>
            <Cell xs={12} lg={3} alignSelf="stretch">
              <div className="Card">
                <h3>Redesign financial app</h3>
                <p>
                  Redesign of a financial website. The challenge was to organize the
                  information architecture in a clear and synthesized way, and
                  at the same time ensuring that no important content was
                  left aside.{" "}
                </p>
                <a
                  href="https://www.behance.net/gallery/89187653/Financial-website-redesign"
                  aria-label="Projeto redesign no Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redesign project on behance
                </a>
                <br></br>
                <img
                  src={require("./static/image/abbilon.png")}
                  alt="Projeto abbilon no behance"
                ></img>
              </div>
            </Cell>

            <Cell xs={12} lg={3} alignSelf="stretch">
              <div className="Card">
                <h3>Digital Accessibility</h3>
                <p>
                  Digital Accessibility (in PT) is a website I created for my thesis
                  graduation to test the accessibility of the Bold components.
                  I also listed some important articles about the
                  accessibility on the web.{" "}
                </p>
                <a
                  href="https://carolinekrone.github.io/a11y-tests/"
                  aria-label="Acessibilidade digital website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about accessibility
                </a>
                <br></br>
                <img
                  src={require("./static/image/acessibilidade-digital.png")}
                  alt="Acessibilidade digital website"
                ></img>
              </div>
            </Cell>
          </Grid>
        </section>

        <section className="Talks" id="talks">
          <Grid direction="column" alignItems="center" justifyContent="center">
            <Cell lg={6} xs={10}>
              <h2>Talks</h2>
              <span>
                Some lectures on two topics that I love and
                study a lot: accessibility and design systems. Enjoy the
                content and share the knowledge!
              </span>
              <br></br>
              <br></br>
            </Cell>
          </Grid>
          <Grid
            direction="row"
            alignItems="baseline"
            justifyContent="space-around"
          >
            <Cell xs={10} lg={3}>
              <div>
                <h3>ILA Medellin 2019</h3>
                <img
                  src={require("./static/image//ILA.png")}
                  alt="Design System benefits"
                ></img>
                <br></br>
                <a
                  href="https://www.slideshare.net/CarolineKrone/bold-design-system-ila-medellin-19/"
                  aria-label="ILA Medellin Talk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bold Design System
                </a>
                <p>
                  Talk presented at ILA 2019 Medellin/CO, about how the
                  Bold construction process.
                </p>
              </div>
            </Cell>
            <Cell xs={10} lg={3}>
              <div>
                <h3>GDG Product Meeting 2019</h3>
                <img
                  src={require("./static/image/GDG.png")}
                  alt="Design System benefits"
                ></img>
                <br></br>
                <a
                  href="https://docs.google.com/presentation/d/1t2v2YKCO4tXSuAdoafaw8vpHMH_cmHMuMYwb264jT4Y/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Digital accessibility
                </a>
                <p>
                  About the importance of accessibility and 9 tips on how
                  Designers can do an accessible work.
                </p>
              </div>
            </Cell>
            <Cell xs={10} lg={3}>
              <div>
                <h3>Usability tests</h3>
                <img
                  src={require("./static/image/tests.png")}
                  alt="Accessibility tests"
                ></img>
                <br></br>
                <a
                  href="https://docs.google.com/presentation/d/1t2v2YKCO4tXSuAdoafaw8vpHMH_cmHMuMYwb264jT4Y/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Usability tests
                </a>
                <p>
                  Presentation to the software quality team at
                  Bridge laboratory.
                </p>
              </div>
            </Cell>
          </Grid>
        </section>
        <footer id="contact" className="Contact">
          <Grid
            direction="row"
            alignItems="baseline"
            justifyContent="space-between"
          >
            <Cell xs={12} lg={6}>
              <div className="SocialLinks">
                <a
                  href="https://www.linkedin.com/in/carolinekrone/"
                  aria-label="Caroline Krone profile on Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>
              <div className="SocialLinks">
                <a
                  href="https://www.behance.net/kronecaroline"
                  aria-label="Caroline Krone profile on Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </div>
              <div className="SocialLinks">
                <a
                  href="https://github.com/carolinekrone"
                  aria-label="Caroline Krone profile on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </Cell>
            <Cell xs={12} lg={5}>
              <p className="BigText">Don't be shy!</p>
              <p>
                You can also contact me by email{" "}
                <a href="mailto:kronecaroline@gmail.com">
                  kronecaroline@gmail.com
                </a>
                .
              </p>
            </Cell>
          </Grid>
          <Grid alignItems="center" className=" ">
            <Cell lg={12}>
              <p>
                This website was made with &#128147; +{" "}
                <a
                  href="https://bold.bridge.ufsc.br/en/"
                  aria-label="Bold design system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bold Design System
                </a>{" "}
                +{" "}
                <a
                  href="https://create-react-app.dev/docs/getting-started/"
                  aria-label="Create react app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Create react app
                </a>
                .
              </p>
            </Cell>
          </Grid>
        </footer>
      </div>
    </div>
  );
};

export default App;
