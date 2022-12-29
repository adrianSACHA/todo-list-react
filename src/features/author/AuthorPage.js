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
          <p>Programowanie na poważnie od kilku miesięcy.</p>
          Kiedyś tworzyłem stronę internetową z okładkami do albumów z muzyką.
          Dawało mi to dużo przyjemności.
          <p>Oprócz tego interesują mnie nowinki technologiczne.</p>
          Lubię majsterkowanie, coś stworzyć z niczego.
          <p>
            Układać razem z synem Lego, ostatnim challengem był X-Wing Luka
            Skywalkera.{" "}
          </p>
          <p>
            <strong>Zawodowo</strong>
          </p>
          <p>
            Moja przygoda z handlem zaczęła się od Sprzedawcy/Prezentera.
            Przeszedłem całą możliwą ścieżkę jaką według mnie, każdy powinien
            przejść zanim zacznie zarządzać ludźmi. Bez tej wiedzy zespół nie
            będzie za Tobą. Na stanowisku kierowniczym jestem ponad 8-lat.
          </p>
          <p>
            Niecały rok, wdrażałem Managerów na terenie północnej Polski.
            Przyglądanie się nie działającym procesom to było wyzwanie. Pandemia
            zmieniła trochę realia i wróciłem na stanowisko kierownika sklepu.
          </p>
          Po 12 latach w jednej firmie nadszedł czas zmian, rok 2022 będzie
          rokiem zmian w moim życiu
          <p>
            <strong>
              Moje motto:{" "}
              <i>
                Zawsze szukam rozwiązań, dlatego jestem w tym miejscu i czasie.
              </i>
            </strong>
          </p>
        </>
      }
    />
  </Container>
);

export default Author;
