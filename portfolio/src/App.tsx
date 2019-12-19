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
            <a href="/portfolio/#about">Sobre mim</a>
          </Cell>
          <Cell>
            <a href="/portfolio/#work">Trabalhos</a>
          </Cell>
          <Cell>
            <a href="/portfolio/#talks">Palestrinhas</a>
          </Cell>
        </Grid>
      </header>
      <div className="Container">
        <section className="Welcome Grid">
          <Grid direction="row" alignItems="center" justifyContent="flex-start">
            <Cell xs={12} lg={6}>
              <h1>
                Olá, eu sou a Carol! <span>&#128075;</span>{" "}
              </h1>
              <p>
                Uma <span className="Product Underline">product designer</span>{" "}
                morando em Florianópolis/SC{" "}
                <span className="Floripa Underline">
                  (aka Floripa mó querido)
                </span>
                , lutando para tornar{" "}
                <span className="Ideas Underline">boas ideias</span> mais
                acessíveis.
                <br></br>
                Ah, eu também gosto de gifs. <span>&#128129;</span>
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
                Uma designer de produto de 24 anos, morando em Florianópolis/SC,
                atualmente trabalhando no Laboratório Bridge (UFSC) e ajudando a
                melhorar a saúde pública no Brasil. O design é uma disciplina
                interdisciplinar e, para isso, estou sempre estudando
                psicologia, ética e tecnologia, buscando estabelecer uma visão
                sistêmica do projeto. No meu tempo livre, você provavelmente
                pode me encontrar remando (canoa havaiana), trilhando, bebendo
                cerveja ou lendo um bom livro.
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
                Aqui você encontra alguns dos meus últimos trabalhos e projetos.
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
                  Bold é um Design System acessível e open source desenvolvido
                  para o laboratório Bridge. É totalmente customizável e conta
                  com os temas <em>light e dark.</em>{" "}
                </p>
                <a
                  href="https://bold.bridge.ufsc.br/en/"
                  aria-label="Bold design system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acesse o Bold Design System
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
                  Aplicativo desenvolvido para os fonoaudiólogos profissionais,
                  com o objetivo de ajudá-los no tratamento de seus pacientes.{" "}
                </p>
                <a
                  href="https://www.behance.net/gallery/75141515/TOT-Speech-Therapy-APP-UIUX-design"
                  aria-label="TOT APP on Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projeto TOT no behance
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
                <h3>Redesign de site financeiro</h3>
                <p>
                  Redesign de um site financeiro. O desafio era organizar a
                  arquitetura da informação de maneira clara e sintetizada, e ao
                  mesmo tempo garantir que nenhum conteúdo importante fosse
                  deixado de lado.{" "}
                </p>
                <a
                  href="https://www.behance.net/gallery/89187653/Financial-website-redesign"
                  aria-label="Redesign project on Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projeto Redesign no behance
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
                  Acessibilidade Digital é um site que eu criei para minha tese
                  de graduação para testar a acessibilidade dos componentes
                  Bold. Também listei alguns artigos importantes sobre a
                  acessibilidade na web.{" "}
                </p>
                <a
                  href="https://carolinekrone.github.io/a11y-tests/"
                  aria-label="Acessibilidade digital website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aprenda mais sobre acessibilidade
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
              <h2>Palestrinhas</h2>
              <span>
                Recentemente eu tenho palestrado sobre dois temas que eu amo e
                estudo bastante: acessibilidade e Design Systems. Aproveite o
                conteúdo e compartilhe o conhecimento!
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
                  Palestra apresentado no ILA 2019 Medellin/CO, sobre como foi o
                  processo de construção do Bold.
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
                  Sobre a impotância da acessibilidade e 9 dicas de como
                  Designers podem fazer um trabalho acessível.
                </p>
              </div>
            </Cell>
            <Cell xs={10} lg={3}>
              <div>
                <h3>Testes de acessibilidade</h3>
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
                  Testes de acessibilidade
                </a>
                <p>
                  Apresentação para a equipe de qualidade de software do
                  laboratório Bridge.
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
