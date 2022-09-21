import about1 from "../images/Kahoots-home-icon-01_300x.avif";
import about2 from "../images/Kahoots-home-icon-02_300x.avif";
import about3 from "../images/Kahoots-home-icon-03_300x.avif";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-item">
        <img alt="about" src={about1} className="about-icon" />
        <p>
          We’re a family, your neighbors, and we work harder every single day to
          help you strengthen the love you share with your pets
        </p>
      </div>
      <div className="about-item">
        <img alt="about" src={about2} className="about-icon" />
        <p>
          From farm to bowl, every Petsy product is handcrafted using top
          quality ingredients chosen by actual pet parents.
        </p>
      </div>{" "}
      <div className="about-item">
        <img alt="about" src={about3} className="about-icon" />
        <p>
          The Petsy No-Risk Guarantee. Your pet’s health is our number one
          priority, if you’re not 100% happy, neither are we.
        </p>
      </div>
    </div>
  );
}
