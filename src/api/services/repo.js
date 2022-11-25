import axiosClient from "../client";

const repoList = {
    repoContributors: (owner, repo_name) => axiosClient.get(`/repos/${owner}/${repo_name}/collaborators`)
}

export default repoList;