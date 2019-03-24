import axios from "axios";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const setJwtToken = token => {
  if (token) axios.defaults.headers.common["Authorization"] = token;
  else delete axios.defaults.headers.common["Authorization"];
};

export const checkJwt = () => {
  const jwtToken = localStorage.jwtToken;
  if (jwtToken) setJwtToken(jwtToken);
};
