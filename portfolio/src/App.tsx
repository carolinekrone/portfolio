import React from "react";
import { Grid, Cell } from "bold-ui";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="Header">
        <Grid direction="row" justifyContent="space-around">
          <Cell xs={1} lg={7}>
            <img src="/logo.svg" alt="CK logo"></img>
          </Cell>
          <Cell>
            <a href="/#about">About</a>
          </Cell>
          <Cell>
            <a href="/#work">Work</a>
          </Cell>
          <Cell>
            <a href="/#contact">Contact</a>
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
            <Cell className="SocialLinks" xs={12} lg={3}>
              <a
                href="https://www.linkedin.com/in/carolinekrone/"
                aria-label="Caroline Krone profile on Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </Cell>
            <Cell className="SocialLinks" xs={12} lg={3}>
              <a
                href="https://www.behance.net/kronecaroline"
                aria-label="Caroline Krone profile on Behance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
            </Cell>
            <Cell className="SocialLinks" xs={12} lg={3}>
              <a
                href="https://github.com/carolinekrone"
                aria-label="Caroline Krone profile on GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Cell>
            <Cell xs={10} lg={5}>
              <p>
                I'm a 24-years-old product designer based in Florianópolis/SC,
                currently working at Laboratório Bridge (UFSC) and helping to
                improve public health in Brazil. I believe that great design has
                the power to transform the reality where it is inserted. At my
                spare time, you can probably find me rowing (outrigger canoe),
                trekking or reading a good book.
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
          <Grid
            direction="row"
            alignItems="stretch"
            justifyContent="space-around"
          >
            <Cell xs={12} lg={5} alignSelf="stretch">
              <div className="Card">
                <h3>Bold design system</h3>
                <img src="/bold-components.svg" alt="bold components"></img>
                <p>
                  Bold is a open source and accessible design system developed
                  to the Laboratório Bridge.{" "}
                </p>
                <a
                  href="https://bold.bridge.ufsc.br/en/"
                  aria-label="Bold design system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Bold Design System
                </a>
              </div>
            </Cell>
            <Cell xs={12} lg={5} alignSelf="stretch">
              <div className="Card">
                <h3>TOT App</h3>
                <img src="/tot-project.svg" alt="TOT App"></img>
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
              </div>
            </Cell>
            <Cell xs={12} lg={5} alignSelf="stretch">
              <div className="Card">
                <h3>Financial website redesign</h3>
                <img src="/abbilon.png" alt="Web redesign project"></img>
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
              </div>
            </Cell>

            <Cell xs={12} lg={5} alignSelf="stretch">
              <div className="Card">
                <h3>Acessibilidade digital</h3>
                <img
                  src="/acessibilidade-digital.png"
                  alt="Acessibilidade digital site"
                ></img>
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
                  Learn more about accessibility (PT-BR)
                </a>
              </div>
            </Cell>
          </Grid>
        </section>
        <section className="Talks">
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
                <img src="/ILA.png" alt="Design System benefits"></img>
                <br></br>
                <a
                  href="https://www.slideshare.net/CarolineKrone/bold-design-system-ila-medellin-19/"
                  aria-label="ILA Medellin Talk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bold Design System (PT-BR)
                </a>
                <p>
                  Talk presented at ILA 2019 Medellin/CO. How we build an
                  accessible and open source design system to the Laboratorio
                  Bridge.
                </p>
              </div>
            </Cell>
            <Cell xs={10} lg={3}>
              <div>
                <h3>GDG Product Meeting 2019</h3>
                <img src="/GDG.png" alt="Design System benefits"></img>
                <br></br>
                <a href="https://docs.google.com/presentation/d/1t2v2YKCO4tXSuAdoafaw8vpHMH_cmHMuMYwb264jT4Y/edit?usp=sharing">
                  Acessibilidade Digital (PT-BR)
                </a>
                <p>
                  Why accessibility is important and 9 tips for designers to
                  build accessible products.
                </p>
              </div>
            </Cell>
            <Cell xs={10} lg={3}>
              <div>
                <h3>Accessibility tests</h3>
                <img src="/tests.png" alt="Accessibility tests"></img>
                <br></br>
                <a href="https://docs.google.com/presentation/d/1t2v2YKCO4tXSuAdoafaw8vpHMH_cmHMuMYwb264jT4Y/edit?usp=sharing">
                  Accessibility tests (PT-BR)
                </a>
                <p>
                  Presentation of how to perform accessibility tests given to
                  the bridge QA team.
                </p>
              </div>
            </Cell>
          </Grid>
        </section>
        <section id="contact">
          <Grid>
            <Cell></Cell>
            <Cell></Cell>
          </Grid>
        </section>
      </div>
    </div>
  );
};

export default App;
