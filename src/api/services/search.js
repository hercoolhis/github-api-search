import axiosClient from "../client";

const searchList = {
    repo: (query, page = 1) => axiosClient.get(`/search/repositories?q=${query}&page=${page}`)
}

export default searchList;