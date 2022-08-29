import "../../styles/About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="container-title about">
        <h1>Qui Nous Sommes !</h1>
        <p>
          Notre équipe vous recontacte dans les meilleurs délais afin d’établir
          un devis sur-mesure répondant besoins de l’intervention.
        </p>
      </div>

      <div className="info">
        <p>
          En tant que professionnel de l'assainissement, nous vous proposons
          toute la gamme des services pour répondre à vos besoins.
          <br />
          Nous vous accompagnons dans la gestion de vos projets, des plus
          simples aux plus complexes.
          <br />
          Nous serons toujours à votre disposition pour répondre à vos attentes
          tout en respectant les délais de notre intervention.
          <br />
          Nous sommes une équipe de professionnels certifiés et expérimentés
          dans notre domaine d'activité.
          <br />
          Nous veillons à ce que vos demandes soient exécutées correctement,
          efficacement et en toute sécurité. Nos agents s'efforcent de vous
          fournir les conseils nécessaires et d'assurer un suivi continu.
          <br />
          Ceci afin de vous garantir un résultat satisfaisant et optimal. Nous
          disposons d'un équipement de haute qualité afin de garantir le
          résultat attendu en temps voulu.
        </p>
      </div>

      <div className="change flex-display-row flex-justify-c">
        <div className="section-cel flex-col">
          <div className="flex-display-row flex-space-b responsive-col">
            <div
              data-aos="fade-in"
              className="flex-col width-element-2 flex-align-c flex-space-b before-contain"
            >
              <div className="before"></div>
              <h3>Avant</h3>
            </div>

            <div
              data-aos="fade-in"
              className="flex-col width-element-2 flex-align-c flex-space-b"
            >
              <div className="after"></div>
              <h3>Après</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="prestations">
        <div className="débouchage">
          <div>
            <h3>Débouchage</h3>
            <p>
              Prestation rapide et efficace qui consiste à envoyer, par le biais
              d'une buse, des jets d'eau permettant de décoller le tartre et de
              nettoyer le conduit. Le traitement des canalisations est fait par
              un procédé hydrodynamique adapté à tout type de canalisations.
            </p>
          </div>
        </div>
        <div className="vidange">
          <h3>Pompage / vidange</h3>
          <p>
            Le bac à graisse est un système de prétraitement des eaux des
            restaurants. (Ou particulier) Possibilité d’installer un bac à
            graisse sur devis.
            <br />
            La vidange du bac à graisse, consiste à enlever les boues déposées
            au fond, à vidanger les graisses accumulées en surface, à nettoyer
            le dispositif et à le remplir d’eau claire avant la remise en
            service.
            <br />
            Votre bac à graisse doit être entretenu régulièrement. En fonction
            du volume des eaux usées, la fréquence d’intervention varie.
            <br />
            Nous concevons l’entretien et le pompage de fosses septiques, postes
            de relevage et bacs à graisse
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
