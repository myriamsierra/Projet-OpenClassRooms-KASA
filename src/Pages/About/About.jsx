
import React from "react";
import Banner from "../../Component/Banner/Banner.jsx";
import Collapse from "../../Component/Collapse/Collapse.jsx";
import AboutBanner from "./../../Assets/about-banner.png";
import "./About.scss";

//-->Path
const collapseText = [
  {
    label: "Fiabilité",
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    label: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    label: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    label: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

const About = () => {
  return (
    <main className="about__contenair">
      <section>
        <Banner imgBanner={AboutBanner} showTitleBanner={false}/>
      </section>
      <section className="about__contenair__collapse">
        {collapseText.map((item,index) => (
          <Collapse key={index} className="collapse--about" title={item.label} description={item.text} />
        ))}
      </section>
    </main>
  )
}

export default About;