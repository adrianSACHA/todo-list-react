import React from "react";
import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Adrian Sachajdakiewicz"
      body={
        <>
          <p>
            <strong>Zainteresowania</strong>
          </p>
          <p>
            Programowanie na poważnie od kilku miesięcy.
            <p>
              Kiedyś tworzyłem stronę internetową z okładkami do albumów z
              muzyką. Dawało mi to dużo przyjemności.
            </p>
            <p>Oprócz tego interesują mnie nowinki technologiczne.</p> 
            Lubię
            majsterkowanie, coś stworzyć zniczego.
            <p>Układać Lego z synem, ostatnio X-Wing Luka Skywalkera. </p>
          </p>
          <p>
            <strong>Zawodowo</strong>
          </p>
          <p>
            <strong>
              Moje motto: Zawsze szukam rozwiązań, dlatego jestem w tym miejscu
              i czasie.
            </strong>
          </p>
          Zaczynałem od sprzedawcy i przeszedłem ścieżkę jaką według mnie każdy
          powinien przejść, zanim zacznie zarządzać ludźmi. Bez tej wiedzy nie
          będzie miał za sobą zespołu, którym masz zarządzać. Na stanowisku
          kierowniczym jestem ponad 8lat. Niecały rok wdrażałem menadżerów na
          terenie północne Polski. Diagnoza i przyglądanie się nie działającym
          procesom to było wyzwanie. Pandemia zmieniła trochę realia i wróciłem
          na stanowisko kierownika sklepu. Po 12 latach w jednej firmie nadszedł
          czas zmian, rok 2022 będzie rokiem zmian w moim życiu
        </>
      }
    />
  </Container>
);

export default Author;
