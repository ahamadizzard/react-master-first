// explain this code below
// This file is responsible for fetching the data from the server and sending the data to the server.
// This file is responsible for the API calls.
// This file is responsible for the communication between the server and the client.
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
