import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/msafeerhussain1214/",
  },
  { iconName: "fa fa-whatsapp", link: "https://www.facebook.com/+923037489340" },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/abdul-basit-268063227/",
  },
  { iconName: "fa fa-github", link: "https://github.com/Abdulbasit1029" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
