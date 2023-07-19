import React from "react";

const educationContent = [
  {
    year: "2025",
    degree: "BS Software Engineering Degree",
    institute: "The Islamia University Of Bahawalpur",
    details: `3.3 /4 CGPA (4th semester)`,
  },
  {
    year: "2021",
    degree: "FSC Pre-Engineering",
    institute: "United College, Ahmedpur",
    details: `788/1100`,
  },
  {
    year: "2019",
    degree: "Matric ",
    institute: "AhamedPur Public School",
    details: `730/1100`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
