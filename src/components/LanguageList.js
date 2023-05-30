import React from "react";

const LanguageList = ({ languages }) => {
    return(
        <ul>
        {Object.values(languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    )
}

export default LanguageList;