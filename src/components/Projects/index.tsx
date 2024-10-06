import "./Projects.css";

import Project from "../Project";

import terappin from "../../assets/terappin.webp";
import therapist from "../../assets/therapist.webp";
import mapexplorer from "../../assets/MapExplorer.png";

const _projects = {
  terappin: {
    img: terappin,
    name: "Terappin",
    appStoreLink:
      "https://apps.apple.com/tr/app/terappin-mental-health-support/id1532600151",
    googlePlayLink:
      "https://play.google.com/store/apps/details?id=com.terappin",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Jitsi",
      "Agora",
      "Social Media Login(Google, Apple, Facebook)",
      "REST API",
      "CI/CD tools(Fastlane, Firebase Distribution)",
      "Sentry",
      "RevenueCat",
      "Redux",
      "Amplitude",
      "CodePush",
      "Insider",
    ],
    description:
      "Terappin is a mobile app that allows clients to book therapy appointments, track past and upcoming sessions, message therapists,and access relaxing sounds, psychological tests, and daily content",
  },
  therapist: {
    img: therapist,
    name: "Therapist",
    appStoreLink:
      "https://apps.apple.com/tr/app/therapist-by-terappin-therapy/id6468481451",
    googlePlayLink:
      "https://play.google.com/store/apps/details?id=com.terappin.therapist",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Jitsi",
      "Agora",
      "REST API",
      "CI/CD tools(Fastlane, Firebase Distribution)",
      "Sentry",
      "Redux",
      "CodePush",
    ],
    description:
      "Therapist is a companion app for therapists that enables them to manage appointments, update working hours, edit profile information, and track their earnings over time.",
  },
  mapExplorer: {
    img: mapexplorer,
    name: "MapExplorer",
    appStoreLink: "https://apps.apple.com/us/app/mapexplore/id6708241174",
    googlePlayLink:
      "https://play.google.com/store/apps/details?id=com.mapexplorer",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Google Ads",
      "Social Login"
    ],
    description:
      "MapExplorer is a fun, educational app where users play games to learn about countries, flags, and capitals, earning points to create and share virtual maps of places they've visited",
  },
};

const Projects = () => {
  return (
    <section id={"projects"}>
      <div className="projects">
        <div className="content">
          <div>
            <h2>My Recent Work</h2>
            <hr />
          </div>
          <div className="container">
            <Project {..._projects.terappin} />
            <Project {..._projects.therapist} />
            <Project {..._projects.mapExplorer} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
