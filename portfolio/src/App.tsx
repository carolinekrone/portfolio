import React from "react";
import { Grid, Cell } from "bold-ui";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Grid direction="row" justifyContent="flex-end">
          <Cell>
            <a href="#about">About</a>
          </Cell>
          <Cell>
            <a href="#work">Talks</a>
          </Cell>
          <Cell>
            <a href="#contact">Contact</a>
          </Cell>
        </Grid>
      </header>
      <div className="Container">
        <section className="Welcome">
          <Grid
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <Cell xs={12} lg={7}>
              <h1>
                Hi, I'm Carol! <span>&#128075;</span>{" "}
              </h1>
              <p>
                A product designer based in Florianópolis/SC, fighting to make
                good ideas more accessible.
              </p>
            </Cell>
            <Cell lg={2}>
              <img
                src={"/yo.svg"}
                alt="illustration off a blong girl smiling"
              />
            </Cell>
          </Grid>
        </section>
        <section id="#about" className="About">
          <h2>Stay in touch :)</h2>
          <Grid
            direction="row"
            alignItems="baseline"
            justifyContent="space-around"
          >
            <Cell xs={12} lg={7} className="SocialLinks">
              <a
                href="https://www.linkedin.com/in/carolinekrone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://www.behance.net/kronecaroline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
              <a
                href="https://github.com/carolinekrone"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Cell>
            <Cell xs={12} lg={5}>
              <p>
                I'm a 24-years-old product designer based in Florianópolis/SC,
                currently working at Laboratório Bridge - UFSC. I believe great
                design is the result of a deep process understanding the problem
                you’re trying to solve, combined with a beautifully executed
                solution. At my spare time, you can probably find me xx,
                exploring somewhere or reading a good book.
              </p>
            </Cell>
          </Grid>
        </section>
        <section id="#about">
          <Grid direction="row" alignItems="center" justifyContent="center">
            <Cell></Cell>
          </Grid>
        </section>
      </div>
    </div>
  );
};

export default App;
