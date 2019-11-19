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
            <a href="#talks">Talks</a>
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
            justifyContent="space-between"
          >
            <Cell xs={12} lg={8}>
              <h1>
                Hi, I'm Carol! <span>&#128075;</span>{" "}
              </h1>
              <p>
                A 24-years-old product designer based in Florianópolis/SC,
                fighting to make good ideas more accessible. Currently I’m
                working at Laboratório Bridge - UFSC.
              </p>
            </Cell>
            <Cell lg={3}>
              <img
                src={"/yo.png"}
                alt="illustration with a blong girl smiling"
              />
            </Cell>
          </Grid>
        </section>
        <section id="#work"></section>
      </div>
    </div>
  );
};

export default App;
