import "./Contact.css";
import mail from "../../assets/mail.png";
import logo from "../../assets/logo.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact">
        <div className="content">
          <img src={mail} />
          <h4>
            Whether you have a project idea or just want to discuss
            possibilities, feel free to drop me an email!
          </h4>

          <a
            href="mailto:yunusatmacabm@gmail.com"
            rel="noopener noreferrer"
            target="_black"
          >
            Let’s get the conversation started!
          </a>

          <a href="/" className="a">
            <img className="img" src={logo} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
