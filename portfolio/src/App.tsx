import React from "react";
import { Grid, Cell } from "bold-ui";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <Grid direction="row" justifyContent="space-between">
            <Cell xs={5} lg={5}></Cell>
            <Cell xs={6} lg={6}>
              <a href="#acessibilidade">Acessibilidade</a>
              <a href="#talks">Talks</a>
              <a href="#contato">Bora trocar uma ideia?</a>
            </Cell>
          </Grid>
        </nav>
      </header>
      <section className="welcome">
        <Grid>
          <Cell xs={6}>
            <h1>
              ¡Holla! <span>&#128075;</span>
            </h1>
            <p>
              Uma UX Designer lutando para tornar boas ideias mais acessíveis.{" "}
              Criei esse site para aprender mais sobre React. Vou compartilhar
              conteúdos sobre Acessibilidade e Design Systems.
            </p>
          </Cell>
          <Cell>
            <img src={"/yo.png"} alt="illustration" />
          </Cell>
        </Grid>
      </section>
    </div>
  );
};

export default App;
