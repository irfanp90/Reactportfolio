import axios from "axios";

export default {
  saveContact: function (FormData) {
    console.log("APIJS-7", FormData);
    return axios.post("/api/forms", FormData);
  }
};