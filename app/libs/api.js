import ky from "ky";

//create an api instance
// api: This is the exported instance of ky configured with specific options.
// It can be reused across the application for making API calls.
// The options include setting the base URL, headers, and error handling.
export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URI, //This prepends a base URL to every request made with this API instance.
  // It is useful for setting up a consistent API endpoint.
  timeout: 60000, //timeout in milliseconds, Sets the maximum time the request is allowed to take before being aborted.
  retry: 0, //configured how many times a failed request should automatically retry
});
