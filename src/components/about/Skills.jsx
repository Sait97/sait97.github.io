import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p70", skillPercent: "100", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "100", skillName: "CSS" },
  { skillClass: "p80", skillPercent: "95", skillName: "SCSS" },
  { skillClass: "p30", skillPercent: "88", skillName: "PHP" },
  { skillClass: "p75", skillPercent: "100", skillName: "WORDPRESS" },
  { skillClass: "p30", skillPercent: "95", skillName: "JQUERY" },
  { skillClass: "p20", skillPercent: "50", skillName: "EXPRESS" },
  { skillClass: "p45", skillPercent: "45", skillName: "REACT" },
  { skillClass: "p45", skillPercent: "60", skillName: "VUE" },
  { skillClass: "p45", skillPercent: "30", skillName: "LARAVEL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
