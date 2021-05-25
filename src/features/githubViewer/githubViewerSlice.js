import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Octokit } from "octokit";

const initialState = {
  repository: "Christi",
  repositories: [],
  commits: null,
  organization: null,
  accessToken: "",
  currentRepository: "",
  commitsPage: 0,
  loading: false,
  loadingError: null
};

async function loadCommits(octokit, org, repo, page) {
  let result = await octokit.rest.repos.listCommits({
    owner: org,
    repo: repo,
    per_page: 5,
    page: page
  });

  return result.data;
}

function getOctokit(state) {
  const token = state.githubViewer.accessToken;

  if (token !== "") {
    return new Octokit({ auth: token});
  }

  return new Octokit();
}

export const setCurrentRepository = createAsyncThunk(
  'currentRepository/set',
  async function(repository, thunkApi) {
    const state = thunkApi.getState();
    const octokit = getOctokit(state);

    const organization = state.githubViewer.organization.login;

    return {
      commits: await loadCommits(octokit, organization, repository, 0),
      repository: repository
    }
});


export const setOrganization = createAsyncThunk(
  'organization/set',
  async (organization, thunkApi) => {
    const state = thunkApi.getState();
    const octokit = getOctokit(state);

    const orgData = await octokit.rest.orgs.get({org: organization});

    let orgRepos = await octokit.paginate(
      octokit.rest.repos.listForOrg, {
        org: organization,
        type: "public",
        per_page: 100,
    });

    orgRepos = orgRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    let firstRepo = orgRepos[0].name;

    return {
      orgData: orgData.data,
      repos: orgRepos,
      repository: firstRepo,
      commits: await loadCommits(octokit, organization, firstRepo, 0)
    }
  }
);

export const loadNextCommits = createAsyncThunk(
  'commits/load',
  async function(param, thunkApi) {
    const state = thunkApi.getState();
    const octokit = getOctokit(state);

    const organization = state.githubViewer.organization.login;
    const currentRepository = state.githubViewer.currentRepository;
    const commitsPage = state.githubViewer.commitsPage;

    return {
      nextCommits: await loadCommits(octokit, organization, currentRepository, commitsPage + 1),
      page: commitsPage + 1
    }
});

export const githubViewerSlice = createSlice({
  name: 'githubViewer',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: {
    [setOrganization.pending]: (state, action) => {
      state.loading = true;
      state.loadingError = null;
    },
    [setCurrentRepository.pending]: (state, action) => {
      state.loading = true;
      state.loadingError = null;
    },
    [loadNextCommits.pending]: (state, action) => {
      state.loading = true;
      state.loadingError = null;
    },

    [setOrganization.rejected]: (state, action) => {
      state.loading = false;
      state.loadingError = action.payload;
    },
    [setCurrentRepository.rejected]: (state, action) => {
      state.loading = false;
      state.loadingError = action.payload;
    },
    [loadNextCommits.rejected]: (state, action) => {
      state.loading = false;
      state.loadingError = action.payload;
    },

    [setOrganization.fulfilled] : (state, action) => {
      state.repositories = action.payload.repos;
      state.organization = action.payload.orgData;
      state.currentRepository = action.payload.repository;
      state.commits = action.payload.commits;
      state.commitsPage = 0;
      state.loading = false;
      state.loadingError = null;
    },

    [setCurrentRepository.fulfilled] : (state, action) => {
      state.commits = action.payload.commits;
      state.currentRepository = action.payload.repository;
      state.commitsPage = 0;
      state.loading = false;
      state.loadingError = null;
    },

    [loadNextCommits.fulfilled] : (state, action) => {
      state.commits = state.commits.concat(action.payload.nextCommits);
      state.commitsPage = action.payload.page;
      state.loading = false;
      state.loadingError = null;
    }
  }

});

export const { setAccessToken } = githubViewerSlice.actions;

export const selectCurrentRepository = (state) => state.githubViewer.currentRepository;
export const selectRepositories = (state) => state.githubViewer.repositories;
export const selectCommits = (state) => state.githubViewer.commits;
export const selectOrganization = (state) => state.githubViewer.organization;
export const selectLoading = (state) => state.githubViewer.loading;
export const selectLoadingError = (state) => state.githubViewer.loadingError;
export const selectAccessToken = (state) => state.githubViewer.accessToken;

export default githubViewerSlice.reducer;

