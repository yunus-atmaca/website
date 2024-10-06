import "./Project.css";
import google_play from "../../assets/google_play.png";
import play_store from "../../assets/app_store.png";

type Props = {
  img: string;
  name: string;
  description: string;
  appStoreLink: string;
  googlePlayLink: string;
  technologies: string[];
};

const Project = ({
  googlePlayLink,
  appStoreLink,
  img,
  name,
  description,
  technologies,
}: Props) => {
  return (
    <div
      style={{ marginTop: name === "Terappin" ? 0 : 24 }}
      className="project-container"
    >
      <div className="project">
        <img src={img} width={128} height={128} />
        <div className="details">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="stores">
            <a target="_blank" href={appStoreLink} style={{}}>
              <img width={512} height={548} src={play_store} />
              Apple Store
            </a>
            <a target="_blank" href={googlePlayLink} style={{ marginLeft: 24 }}>
              <img width={512} height={548} src={google_play} />
              Google Play
            </a>
          </div>
        </div>
      </div>
      <ul>
        {technologies.map((t, index) => {
          return <li key={"tech-" + index}>{t}</li>;
        })}
      </ul>
    </div>
  );
};

export default Project;
