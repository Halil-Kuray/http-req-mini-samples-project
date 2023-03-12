import React, { useEffect, useState } from "react";

function Users() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/certificates")
      .then((response) => response.json())
      .then((data) => setCertificates(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {certificates.map((certificate) => (
        <div key={certificate.firstName}>
          <h2>{certificate.firstName}</h2>
          <p>{certificate.lastName}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
