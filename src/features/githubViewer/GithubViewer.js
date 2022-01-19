import {
  selectOrganization,
  setOrganization,
  selectLoading,
  selectLoadingError,
  setAccessToken
} from "./githubViewerSlice";
import { useSelector, useDispatch } from "react-redux";
import { Commits } from "./Commits";
import { useEffect, useState } from "react";
import { Repositories } from "./Repositories";
import {Loading} from "./Loading";
import {LoadingError} from "./LoadingError";


export function GithubViewer() {
  const organization = useSelector(selectOrganization);
  const dispatch = useDispatch();

  const [orgInput, setOrgInput] = useState("");
  const [tokenInput, setTokenInput] = useState("");

  const loading =  useSelector(selectLoading);
  const loadingError =  useSelector(selectLoadingError);

  useEffect(() => {
    dispatch(setOrganization("netflix"))
  }, [dispatch]);

  return (
    <div>
      {loading && <Loading/>}

      {loadingError !== null && <LoadingError/>}

      <div id="token_body" className="py-1 px-4 flex justify-between items-center text-gray-500">
        <span className="p-2">
          Github allows only 60 unauthenticated requests per hour per IP. <br/> If you see errors
          {" "}
          <a href="https://github.com/settings/tokens/new" className="underline text-gray-700">create</a>
          {" "}
          and enter your
          Github API token.

        </span>
        <span>
          <form
            className="flex"
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(setAccessToken(tokenInput));
              setTokenInput("");
            }}
          >
            <input
              className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Github Access Token"
              value={tokenInput}
              onChange={(event) => setTokenInput(event.target.value)}
            />
            <button className="button rounded-r-lg   text-white font-bold p-1 px-4 uppercase  border-t border-b border-r">
              Update
            </button>
          </form>
        </span>
      </div>

      <div  className="bg-white  p-5 flex justify-between">
        <span  className="repo_name pl-4 font-semibold text-5xl">
          {organization?.name}
        </span>

        <span>
          <form
            className="flex"
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(setOrganization(orgInput));
            }}
          >
            <input
              className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Organization"
              value={orgInput}
              onChange={(event) => setOrgInput(event.target.value)}
            />
            <button className="button px-4 rounded-r-lg   text-white font-bold p-4 uppercase  border-t border-b border-r">
              GO
            </button>
          </form>
        </span>
      </div>

      <div className="grid grid-cols-2 bg-white gap-0.5">
        <Repositories />
        <Commits />
      </div>
    </div>
  );
}
