import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills">
        <div className="content">
          <div>
            <h2>Skills</h2>
            <hr />
          </div>

          <div className="container">
            <div className="skill">
              <h5 className="title">Language:</h5>
              <ul>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            <div className="skill">
              <h5 className="title">Framework:</h5>
              <ul>
                <li>React Native</li>
                <li>Node</li>
                <li>React</li>
              </ul>
            </div>

            <div className="skill">
              <h5 className="title">CI/CD Tools:</h5>
              <ul>
                <li>AppCenter</li>
                <li>Fastlane</li>
                <li>Firebase Dist.</li>
                <li>Github Action</li>
                <li>EAS</li>
              </ul>
            </div>

            <div style={{ width: "40%" }} className="skill">
              <h5 className="title">Experienced In</h5>
              <ul>
                <li>Redux / ReduxToolkit / Saga / Mobx </li>
                <li>Firebase / Insider / Contentfull</li>
                <li>Sentry / Bugsnag / Crashlytics</li>
                <li>Amplitude / Analytics</li>
                <li>RevenueCat / IAP/Subscriptions</li>
                <li>Social Logins</li>
                <li>Agora / Jitsi</li>
                <li>Store Management: Apple / Google</li>
                <li>Google Ads / ACR Cloud</li>
                <li>Google Cast / AirPlay / Mux / FFmpeg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
