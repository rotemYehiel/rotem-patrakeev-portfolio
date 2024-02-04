import PDFFile from "../assets/files/Rotem Patrakeev-CV.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const LinksBar = () => {
  const links = [
    {
      name: "github",
      url: "https://github.com/rotemYehiel",
      icon: <FontAwesomeIcon icon={["fab", "github"]} />,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/rotem-patrakeev-143608163/",
      icon: <FontAwesomeIcon icon={["fab", "linkedin"]} />,
    },
    {
      name: "whatsapp",
      url: "https://wa.me/972544594273",
      icon: <FontAwesomeIcon icon={["fab", "whatsapp"]} />,
    },
  ];
  return (
    <div className="link-bar header-item">
      {links.map((link, index) => (
        <a className="link" target="_blank" href={link.url} key={index}>
          {link.icon}
        </a>
      ))}
      <a className="cv-btn link" href={PDFFile} download>
        <FontAwesomeIcon icon={faFileDownload} />
      </a>
    </div>
  );
};
export default LinksBar;
