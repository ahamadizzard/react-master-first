// explain this code below
// This file is responsible for fetching the data from the server and sending the data to the server.
// This file is responsible for the API calls.
// This file is responsible for the communication between the server and the client.
// import ky from "ky";
import { api } from "@/lib/api";

export const loginUser = async (loginData) => {
  //fetching the data from the server
  const response = await fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });
  console.log("LOGIN ACTION", response.json());
};

export const registerUser = async (formData) => {
  try {
    // console.log("Form Data: ", formData);
    const response = await api.post("v1/register", { json: formData });
    if (response.ok) {
      return response.json();
    } else {
      return undefined;
    }
    // console.log("Registration Response: ", response);
  } catch (error) {
    //console.log("Registration Error: ", error);
    const status = error.response.status;
    const responseBody = await error.response.json();
    if (status && responseBody) {
      if (status === 409) {
        return responseBody;
      }
      return undefined;
    }
    return undefined;
  }
};

export const getMovies = async () => {
  try {
    const response = await api.get("v1/movies", {
      cache: "no-store",
    }); //fetching the data from the server
    if (response.ok) {
      return response.json(); //returning the data
    } else {
      return { error: true, message: "Failed to fetch movies" };
    }
    // return response; //returning the data
  } catch (error) {
    if (error) {
      //Handle HTTP errors specifically

      const status = error?.response?.status; // HTTP staus code (eg. 404, 500)
      const responseBody = await error?.response?.json(); // Parse the response body if possible
      console.log("HTTP Error: ", status, responseBody);
    } else {
      //Handle non-HTTP errors (eg. network errors, timeouts)
      console.log("Unknown error", error);
    }
    return undefined; // Return undefined to indicate failure
  }
};

export const getMoviesNewDB = async () => {
  try {
    const response = await api.get("v1/moviesnewdb", {
      cache: "no-store",
    }); //fetching the data from the server
    if (response.ok) {
      return response.json(); //returning the data
    } else {
      return { error: true, message: "Failed to fetch movies" };
    }
    // return response; //returning the data
  } catch (error) {
    if (error) {
      //Handle HTTP errors specifically

      const status = error?.response?.status; // HTTP staus code (eg. 404, 500)
      const responseBody = await error?.response?.json(); // Parse the response body if possible
      console.log("HTTP Error: ", status, responseBody);
    } else {
      //Handle non-HTTP errors (eg. network errors, timeouts)
      console.log("Unknown error", error);
    }
    return undefined; // Return undefined to indicate failure
  }
};
