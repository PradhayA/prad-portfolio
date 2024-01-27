/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/image_of_coding.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Huzzle Web Scraper - King's Labs",
    description: "Developed a Python web scraper for Huzzle, a startup that connects students with internships.",
  },
  {
    title: "CNN-LSTM Research for Paralysis Patients",
    description: "Authored research on CNN-LSTM for analyzing EEG signals in paralysis patients using Python, achieving 83% accuracy.",
  },
  {
    title: "American Sign Language Translator",
    description: "Developed a Python app for real-time ASL to English translation, using computer vision. Achieved 93% success rate.",
  },
  {
    title: "Siemens EDA Software Engineer Intern",
    description: "Developed an automated EDA testing framework using C++ and C.",
  },
  {
    title: "Bright Network IEUK Technology Intern",
    description: "Created a JavaFX solution for SMEs to track Net Zero Carbon Emissions, enhancing data-driven decision-making.",
  },
  {
    title: "Pandurange Coffee Full Stack Developer",
    description: "Led the design and development of a web-based coffee recommendation system with Python Machine Learning.",
  },
  {
    title: "Smart-Move: Siemens Hack for Good (Tech for Sustainability)",
    description: "Led a team to win 2nd Prize in a hackathon, creating Smart-Move, a Python ML app predicting regional energy consumption.",
  },
  {
    title: "Hate-Speech-Detector: Global TCS GoIT Hackathon",
    description: "Developed a hate speech detector web app, winning 1st place. Used NLP and sentiment analysis with Python for real-time protection.",
  }
  // You can add more projects here
];
const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio/Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
