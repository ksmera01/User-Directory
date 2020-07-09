import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=15&nat=us&name=";
// const APIKEY = "&nat=us";

export default {
    search: function (query) {
        return axios.get(BASEURL + query);
    }
};
