import { selectCommits } from "./githubViewerSlice";
import { useSelector, useDispatch } from "react-redux";
import { loadNextCommits } from "./githubViewerSlice";
import { Commit } from "./Commit";

export function Commits() {
  const commits = useSelector(selectCommits);
  const dispatch = useDispatch();

  if (commits === null) {
    return (
      <div className="p-10 min-h-full text-blue-700">Select a repostitory</div>
    );
  }

  return (
    <div>
      <div className="my-3 mr-3 bg-gray-700 rounded-2xl border-top-1 border-blue-300">
        <h2 className="text-2xl p-5 pb-2 text-blue-200">Commits</h2>
        <div className="bg-yellow-100">
          {commits.map((commit) => <Commit  key={commit.sha} commit={commit}/>)}
        </div>
      </div>
        <div className="text-center">
ß      <button
        className="px-4 rounded-lg bg-gray-800  text-white font-bold p-4 uppercase border-gray-900 border"
        onClick={() => {
          dispatch(loadNextCommits());
        }}
      >
        Load more
      </button>
      </div>
    </div>
  );
}
