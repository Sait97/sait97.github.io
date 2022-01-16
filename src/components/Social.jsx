import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/aBs0Lu.7/",
  },
  { iconName: "fa fa-linkedin", link: "http://linkedin.com/in/sait-chaush" },
  {
    iconName: "fa fa-github",
    link: "https://github.com/Sait97",
  },
  
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
