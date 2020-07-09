import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=10&nat=us";
// const APIKEY = "&nat=us";

export default {
    getAllEmployees: function () {
        return axios.get(BASEURL);
    }
};
