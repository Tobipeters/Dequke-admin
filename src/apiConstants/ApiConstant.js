// export let apiHeader = () => {
//   return [
//     {
//       key: "Authorization",
//       value: "Bearer " + userService.authToken(),
//     },
//     {
//       key: "Accept",
//       value: "application/json",
//     },
//     {
//       key: "Content-Type",
//       value: "application/json ",
//     },
//   ];
// };

let localURL = "https://deqube.herokuapp.com/";
let prodURL = "";

export let baseUrl = process.env.NODE_ENV === "production" ? prodURL : localURL;

//admin login
export let userLogin = "api/v1/auth/login";

//settings
export let getAllSettings = "";
export let createSettings = "api/v1/backend/settings/create";
export let updateSettings = "api/v1/backend/settings/update";

//list users
