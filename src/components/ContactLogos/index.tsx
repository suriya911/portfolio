import React from "react";
import InstagramLogo from "@images/icons/instagram_logo.svg";
import GithubLogo from "@images/icons/github-logo.svg";
import MailLogo from "@images/icons/mail-logo.svg";
import LinkedInLogo from "@images/icons/linkedin-logo.svg";

const contactInfoArr = [
  {
    id: "github",
    icon: GithubLogo,
    url: "https://github.com/suriya911",
  },
  {
    id: "linkedIn",
    icon: LinkedInLogo,
    url: "https://www.linkedin.com/in/suriya-chellappan/",
  },
  {
    id: "instagram",
    icon: InstagramLogo,
    url: "https://www.instagram.com/_.suriya._._/",
  },
  {
    id: "mail",
    icon: MailLogo,
    url: "mailto:suriya.chellappan@sjsu.edu",
  },
];

function ContactLogos(): JSX.Element {
  return (
    <div className="flex items-center justify-start gap-4">
      {contactInfoArr.map((contactInfo) => {
        const { icon: Icon } = contactInfo;
        return (
          <a
            href={contactInfo.url}
            key={contactInfo.id}
            target={"_blank"}
            aria-label={`click to connect Suriya's ${contactInfo.id} account`}
          >
            <Icon className="h-10 w-10 hover:scale-110 transition-transform duration-75 ease-linear" />
          </a>
        );
      })}
    </div>
  );
}

export default ContactLogos;
