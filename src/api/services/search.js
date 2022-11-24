import axiosClient from "../client";

const searchList = {
    repo: (query) => axiosClient.get(`/search/repositories?q=${query}`)
}

export default searchList;