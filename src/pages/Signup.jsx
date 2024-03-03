import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
export default function Signup() {
  return (
    <Container>
      <BackgroundImage />
      <Header />
      <div className="body flex column a-center-j-center">
        <div className="text flex column">
          <h1>Film illimitati, Serie TV e molto altro</h1>
          <h4>Guardami ovunque. Eliminami in ogni momento</h4>
          <h6>
            Pronto per iniziare? Inserisci la tua email per creare un Account o
            accedi con uno esistente
          </h6>
        </div>
        <div className="form">
          <input type="email" placeholder="Indirizzo Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Iniziamo</button>
        </div>
        <button>Login</button>
      </div>
    </Container>
  );
}

const Container = styled.div``;
