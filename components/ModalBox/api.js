import axios from "axios";
// http://localhost:8000/api/v1/landingpage-register

export const RegisterNewUser = (data) => {
  return axios
    .post(
      `${process.env.NEXT_PUBLIC_BaseURL}/api/v1/landingpage-register`,
      data
    )
    .then((response) => {
      return response.data;
    });
};
