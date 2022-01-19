import { selectRepositories } from "./githubViewerSlice";
import { useSelector } from "react-redux";
import { Repository } from "./Repository";

export function Repositories() {
  const repositories = useSelector(selectRepositories);

  return (
    <div className="rounded-xl  repo_list_bg m-3 shadow-lg drop-shadow">
      <h2 className="text-2xl m-5 mb-2 font-bold">Repositories</h2>
      <div className="divide-red-200 divide-y">
        {repositories.map((repo) => (
          <Repository key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
