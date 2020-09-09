import axios from "axios";
import * as nprogress from "nprogress";
import ErrorHandler from "./ErrorHandler";
import { baseUrl } from "../apiConstants/ApiConstant";

export const getData = (url, done) => {
  const endpoint = baseUrl + url;
  nprogress.start();
  return async (dispatch) => {
    try {
      const response = await axios.get({
        url: endpoint,
        headers: {},
      });

      const result = response.json();
      if (result) {
        nprogress.done();
        nprogress.remove();
        dispatch(done(result.data));
      }
    } catch (err) {
      // dispatch(ErrorHandler(true));
      alert("Something went wrong");
    }
  };
};

export const postData = (url, payload, done) => {
  const endpoint = baseUrl + url;
  console.log("Endpoint: " + endpoint);
  console.log("Payload:" + JSON.stringify(payload));
  nprogress.start();
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, payload);

      if (!response.ok) {
        throw Error(response.statusText);
      }
      const result = response;
      console.log("Result: " + JSON.stringify(result));
      if (result) {
        nprogress.done();
        nprogress.remove();
        dispatch(done(result.data));
      }
    } catch (err) {
      // dispatch(ErrorHandler());
      console.log("Error: " + err.message);
    }
  };
};

const packageData = (data) => {
  const form = new FormData();
  for (const key in data) {
    form.append(key, data[key]);
  }
  return form;
};
