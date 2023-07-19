import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Abdul", hasColor: "" },
  { meta: "last name", metaInfo: "Basit", hasColor: "" },
  { meta: "Age", metaInfo: "20 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Pakistani", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Ahmedpur, PB,PK", hasColor: "" },
  { meta: "phone", metaInfo: "+923037489340", hasColor: "" },
  { meta: "Email", metaInfo: "chabdulbasit1029@gmail.com", hasColor: "" },
  { meta: "Facebook", metaInfo: "ch.abdulbasit.359", hasColor: "" },
  { meta: "langages", metaInfo: "English & Urdu", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
