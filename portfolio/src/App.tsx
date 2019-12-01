import React from "react";
import { Grid, Cell } from "bold-ui";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="Header">
        <Grid direction="row" justifyContent="space-around">
          <Cell xs={2} lg={8}>
            <img src="/logo.svg" alt="CK logo"></img>
          </Cell>
          <Cell>
            <a href="#about">About</a>
          </Cell>
          <Cell>
            <a href="#work">Work</a>
          </Cell>
          <Cell>
            <a href="#contact">Contact</a>
          </Cell>
        </Grid>
      </header>
      <div className="Container">
        <section className="Welcome Grid">
          <Grid direction="row" alignItems="center" justifyContent="flex-start">
            <Cell xs={11} lg={6}>
              <h1>
                Hello, I'm Carol! <span>&#128075;</span>{" "}
              </h1>
              <p>
                For 4 years I've been a{" "}
                <span className="Product Underline">product designer</span>{" "}
                based in Florianópolis/SC{" "}
                <span className="Floripa Underline">(Floripa mó querido)</span>,{" "}
                fighting to make{" "}
                <span className="Ideas Underline">good ideas</span> more
                accessible.
                <br></br>
                Also, I like gifs. <span>&#128129;</span>
              </p>
            </Cell>
          </Grid>
        </section>
        <section id="#about" className="About Grid">
          <Grid
            direction="row"
            alignItems="baseline"
            justifyContent="space-around"
          >
            <Cell xs={12} lg={7} className="SocialLinks">
              <p className="SectionTitle">Stay in touch</p>
              <a
                href="https://www.linkedin.com/in/carolinekrone/"
                aria-label="Caroline Krone profile on Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://www.behance.net/kronecaroline"
                aria-label="Caroline Krone profile on Behance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
              <a
                href="https://github.com/carolinekrone"
                aria-label="Caroline Krone profile on GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Cell>
            <Cell xs={12} lg={5}>
              <br></br>
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
        <section id="#work" className="Work">
          <Grid
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
          >
            <h2>Work</h2>
            <span>Here you can find some of my latest work and projects.</span>
            <br></br>
          </Grid>
          <Grid
            direction="row"
            alignItems="stretch"
            justifyContent="space-evenly"
          >
            <Cell xs={12} lg={3}>
              <div className="Card">
                <h3>Bold design system</h3>
                <img src="/bold-components.svg" alt="bold components"></img>
                <p>
                  Bold is a open source and accessible design system developed
                  to the Laboratório Bridge.{" "}
                </p>
                <a href="https://bold.bridge.ufsc.br/en/">
                  Go to Bold Design System
                </a>
              </div>
            </Cell>
            <Cell xs={12} lg={3}>
              <div className="Card">
                <h3>TOT App</h3>
                <img src="/tot-project.svg" alt="bold components"></img>
                <p>
                  Application developed to the professional speech therapists,
                  with the purpose of assisting them in the treatment of their
                  patients.{" "}
                </p>
                <a href="https://www.behance.net/gallery/75141515/TOT-Speech-Therapy-APP-UIUX-design">
                  Checkout the TOT project
                </a>
              </div>
            </Cell>
            <Cell xs={12} lg={3}>
              <div className="Card">
                <h3>Bold design system</h3>
                <img src="" alt="bold components"></img>
                <p>
                  Bold is a open source and accessible design system developed
                  to the Laboratório Bridge.{" "}
                </p>
              </div>
            </Cell>
          </Grid>
        </section>
        <section id="#talks" className="About Grid">
          <Grid
            direction="row"
            alignItems="baseline"
            justifyContent="space-around"
          >
            <Cell xs={12} lg={7} className="SocialLinks">
              <p className="SectionTitle">Talks</p>
            </Cell>
            <Cell xs={12} lg={5}>
              <br></br>
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
      </div>
    </div>
  );
};

export default App;
