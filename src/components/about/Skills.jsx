import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p100", skillPercent: "100", skillName: "JAVASCRIPT" },
  { skillClass: "p100", skillPercent: "100", skillName: "CSS" },
  { skillClass: "p95", skillPercent: "95", skillName: "SCSS" },
  { skillClass: "p88", skillPercent: "88", skillName: "PHP" },
  { skillClass: "p100", skillPercent: "100", skillName: "WORDPRESS" },
  { skillClass: "p95", skillPercent: "95", skillName: "JQUERY" },
  { skillClass: "p50", skillPercent: "50", skillName: "EXPRESS" },
  { skillClass: "p45", skillPercent: "45", skillName: "REACT" },
  { skillClass: "p60", skillPercent: "60", skillName: "VUE" },
  { skillClass: "p30", skillPercent: "30", skillName: "LARAVEL" },
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
