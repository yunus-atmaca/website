import "./Experience.css";
import WorkDetails from "../WorkDetails";
import { useState } from "react";

const work_details = {
  terappin: {
    name: "Terappin",
    location: "Istanbul / Turkey",
    as: "React Native Developer",
    between: "Aug 2023 – Aug 2024",
    details: [
      "Developed and maintained mobile applications for both clients and therapists",
      "Integrated video conferencing features using Jitsi and Agora",
      "Optimized performance and functionality of mobile apps",
      "Set up and managed CI/CD pipelines for efficient deployment using Firebase Distribution and Fastlane",
      "Participated in technical discussions for system design, API integration, and troubleshooting issues across platforms",
      "Apps: Terappin, Therapist",
    ],
  },
  freelancer: {
    name: "Freelancer",
    location: "Istanbul / Turkey",
    as: "React Native/Android Developer",
    between: "Jan 2021 – June 2023",
    details: [
      "Developed, and deployed React Native and Android Native applications for clients across various industries",
      "Collaborated with clients from different countries, such as US, Russian, and Pakistan...",
      "Apps: CreatorPlus, PAPR, Griddiagnoze, Sport Quiz Puzzle ..",
    ],
  },
  dubmeSoft: {
    name: "Dubme Soft",
    location: "Berlin / Germany",
    as: "React Native/Android Developer",
    between: "Aug 2019 – Jan 2021",
    details: [
      "Developed and maintained React Native and Android Native applications",
      "Apps: Welive, Playlist, CopyCatt",
    ],
  },
  smartface: {
    name: "Smartface",
    location: "Istanbul / Turkey",
    as: "R & D Engineer",
    between: "Dec 2018 – Aug 2019",
    details: [
      "Contributed to the development and maintenance of mobile framework similar to React Native",
      "Fixed bugs and implemented new features to improve the framework’s functionality",
      "Collaborated with the Android team to integrate new features and improve the overall developer experience",
    ],
  },
};

const company_keys = Object.keys(work_details);
type companies = keyof typeof work_details;
const Experience = () => {
  const [details, setDetails] = useState<companies>("terappin");

  return (
    <section id="experience">
      <div className="exp">
        <div className="content">
          <div>
            <h2>Where I've worked</h2>
            <hr />
          </div>
          <div className="work">
            <div className="companies">
              {company_keys.map((c) => {
                return (
                  <button
                    key={"button-" + c}
                    className={details === c ? "button-color" : undefined}
                    onClick={() => setDetails(c as companies)}
                  >
                    {work_details[c as companies].name}
                  </button>
                );
              })}
            </div>
            <WorkDetails data={work_details[details]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
