import "./Social.css";

import github from "../../assets/github.png";
import upwork from "../../assets/upwork.png";
import linkedin from "../../assets/linkedin.png";

const Social = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="https://github.com/yunus-atmaca" target="_blank">
            <img
              style={{ marginBottom: 12 }}
              width={32}
              height={32}
              src={github}
            />
          </a>
        </li>
        <li>
          <a href="https://www.upwork.com/freelancers/yunusatmaca" target="_blank">
            <img
              style={{ marginBottom: 12 }}
              width={32}
              height={32}
              src={upwork}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yunus-atmaca" target="_blank">
            <img
              style={{ marginBottom: 12 }}
              width={32}
              height={32}
              src={linkedin}
            />
          </a>
        </li>
      </ul>
      <div className="vl" />
    </div>
  );
};

export default Social;
