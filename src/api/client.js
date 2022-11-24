import axios from "axios";
import { baseURL } from "../utils/constant";

const instance = axios.create({
    baseURL,
    headers: {
        'Authorization': `Bearer ${process.env.token}`,
        'Accept': "application/vnd.github+json"
    }
});


export default instance;
  