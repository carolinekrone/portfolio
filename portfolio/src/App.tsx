import React from "react";
import { Grid, Cell } from "bold-ui";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="Header">
        <Grid direction="row" justifyContent="space-around">
          <Cell xs={1} lg={7}>
            <img
              src={require("./static/image/logo-carol.svg")}
              alt="CK logo"
            ></img>
          </Cell>
          <Cell>
            <a href="/portfolio/#about">About</a>
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
                A <span className="Product Underline">product designer</span>{" "}
                based in Florianópolis/SC{" "}
                <span className="Floripa Underline">
                  (aka Floripa mó querido)
                </span>
                , fighting to make{" "}
                <span className="Ideas Underline">good ideas</span> more
                accessible.
                <br></br>
                Also, I like gifs. <span>&#128129;</span>
              </p>
            </Cell>
          </Grid>
        </section>
        <section id="about" className="About">
          <Grid direction="row" alignItems="baseline" justifyContent="center">
            <Cell xs={10} lg={11}>
              <p className="SectionTitle">Stay in touch</p>
            </Cell>
          </Grid>
          <Grid
            direction="row"
            alignItems="baseline"
            justifyContent="space-around"
          >
            <Cell xs={10} lg={5}>
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
            <Cell xs={10} lg={5}>
              <p>
                I'm a 24-years-old product designer based in Florianópolis/SC,
                currently working at Laboratório Bridge (UFSC) and helping to
                improve public health in Brazil. Design is an interdisciplinary
                discipline, and for this, I am always studying psychology,
                ethics and technology, seeking to establish a systemic view of
                the project. In my spare time, you can probably find me rowing
                (outrigger canoe), trekking, drinking beer or reading a good
                book.
              </p>
              <span>&#127817; &#127866; &#128758; &#127944; &#127754;</span>
            </Cell>
          </Grid>
        </section>
        <section id="work" className="Work">
          <Grid direction="column" alignItems="center" justifyContent="center">
            <Cell xs={9}>
              <h2>Work, work, work</h2>
              <span>
                Here you can find some of my latest work and projects.
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
                  Bold is a open source and accessible design system developed
                  to the Laboratório Bridge. Bold exports light and dark themes.{" "}
                </p>
                <a
                  href="https://bold.bridge.ufsc.br/en/"
                  aria-label="Bold design system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Bold Design System
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
                <h3>TOT App</h3>
                <p>
                  Application developed to the professional speech therapists,
                  with the purpose of assisting them in the treatment of their
                  patients.{" "}
                </p>
                <a
                  href="https://www.behance.net/gallery/75141515/TOT-Speech-Therapy-APP-UIUX-design"
                  aria-label="TOT APP on Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Checkout the TOT project
                </a>
                <br></br>
                <img
                  src={require("./static/image/tot-project.svg")}
                  alt="tot project on behance"
                ></img>
              </div>
            </Cell>
            <Cell xs={12} lg={3} alignSelf="stretch">
              <div className="Card">
                <h3>Financial website redesign</h3>
                <p>
                  Redesign of an financial website. The challenge was to
                  organize the information architecture in a clear and
                  synthesized way while ensuring that no important content was
                  leaved out.{" "}
                </p>
                <a
                  href="https://www.behance.net/gallery/89187653/Financial-website-redesign"
                  aria-label="Redesign project on Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Checkout the redesign project
                </a>
                <br></br>
                <img
                  src={require("./static/image/abbilon.png")}
                  alt="abbilon project"
                ></img>
              </div>
            </Cell>

            <Cell xs={12} lg={3} alignSelf="stretch">
              <div className="Card">
                <h3>Acessibilidade digital</h3>
                <p>
                  Acessibilidade Digital (digital accessibility) is a site I
                  created for my undergraduate thesis to test the accessibility
                  of Bold components. There I also listed some important
                  articles about the web accessibility.{" "}
                </p>
                <a
                  href="https://carolinekrone.github.io/a11y-tests/"
                  aria-label="Acessibilidade digital site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about accessibility
                </a>
                <br></br>
                <img
                  src={require("./static/image/acessibilidade-digital.png")}
                  alt="digital accessibility website"
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
                Recently I've been lecturing on two topics that I love and
                studied a lot about: accessibility and design systems. Enjoy and
                keep sharing the knowledge.
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
                  Talk presented at ILA 2019 Medellin/CO. How we build an
                  accessible and open source design system to the Laboratorio
                  Bridge. (PT-BR)
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
                  Acessibilidade Digital
                </a>
                <p>
                  Why accessibility is important and 9 tips for designers to
                  build accessible products. (PT-BR)
                </p>
              </div>
            </Cell>
            <Cell xs={10} lg={3}>
              <div>
                <h3>Accessibility tests</h3>
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
                  Accessibility tests
                </a>
                <p>
                  Presentation of how to perform accessibility tests given to
                  the bridge QA team. (PT-BR)
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
              <p className="BigText">Não se acanhe!</p>
              <p>
                Você também pode me contatar pelo e-mail{" "}
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
                This site is a WIP and it's made with &#128147; +{" "}
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
