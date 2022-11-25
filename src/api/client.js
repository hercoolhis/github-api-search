import axios from "axios";
import { baseURL } from "../utils/constant";

const instance = axios.create({
    baseURL,
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
        'Accept': "application/vnd.github+json"
    }
});


export default instance;
  