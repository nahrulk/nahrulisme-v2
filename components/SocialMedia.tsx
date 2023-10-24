import { Instagram, Linkedin } from "lucide-react";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/nahrul-khayattullah/"
        target="_blank"
      >
        <Linkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/nahrul.k/" target="_blank">
        <Instagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
