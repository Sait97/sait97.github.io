import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Sait" },
  { meta: "last name", metaInfo: "Chaush" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Bulgaria" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Plovdiv" },
  { meta: "phone", metaInfo: "+359895774959" },
  { meta: "Email", metaInfo: "Sait97@abv.bg" },
  { meta: "langages", metaInfo: "Bulgarian, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
