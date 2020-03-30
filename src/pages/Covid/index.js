import React from "react";

// Assets
import socialDistanceImg from "../../assets/social_distancing.svg";
import bgImg from '../../assets/blackboardDistance.jpg';

import {
  Section1, Section2, Section3, ImgBg, Contents
} from "./styles";

export default function Covid() {
  return (
    <>
      <Section1>
        <article className="left">
          <h1>Covid-19</h1>
          <h3>
            É uma doença infecciosa causada pelo coronavírus da síndrome
            respiratória aguda grave 2 (SARS-CoV-2).
          </h3>
        </article>
        <article className="right">
          <p>
            Os sintomas mais comuns são febre, tosse e dificuldade em
            respirar. Identificado pela primeira vez em seres humanos em 2019
            na cidade Wuhan, na China. Pensa-se que o SARS-CoV-2 seja de
            origem animal. O surto inicial deu origem a uma pandemia global
            que se extende até hoje.
          </p>
        </article>
      </Section1>

      <Section2>
        <ImgBg bg={bgImg} />
        <Contents>
          <article className="left">
            <h2>
              Os métodos preventivos
              {` `}
              <br />
              {` `}
              são:
            </h2>
            <div className="methods">
              <p>Lavar as mãos com alcool em gel</p>
              <p>Evitar contato com pessoas infectadas</p>
            </div>
            <p className="lastMethod">Cobrir-se ao tossir ou espirrar</p>
          </article>
          <article className="right">
            <h1>Prevenções</h1>
            <h3>
              Uma das medidas tomadas pelo mundo inteiro foi a distância
              social ou quarentena. Evitando a disseminação do vírus
            </h3>
          </article>
        </Contents>
      </Section2>

      <Section3>
        <article className="left">
          <img src={socialDistanceImg} alt="Distância social" />
        </article>
        <article className="right">
          <h1>Distância social</h1>
          <p>
            Permaneçam em casa e ficam atentos às pessoas que sofrem com
            problemas pois permanecer em casa para alguns pode ser doloroso...
          </p>
        </article>
      </Section3>
    </>
  );
}
