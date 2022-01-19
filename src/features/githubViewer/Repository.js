import { GoRepoForked, GoStar, GoCalendar } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentRepository,
  setCurrentRepository,
} from "./githubViewerSlice";
import Moment from "react-moment";

export function Repository(props) {
  const { repo } = props;
  const currentRepository = useSelector(selectCurrentRepository);
  const dispatch = useDispatch();

  return (
    <div
      className={`px-10 py-5 cursor-pointer hover:bg-yellow-400 text-gray-700
        ${currentRepository === repo.name ? "repo_list" : ""}`}
      onClick={() => {
        dispatch(setCurrentRepository(repo.name));
      }}
    >
      <div className="text-xl font-bold tracking-wide	">{repo.name}</div>
      <div className="text-white font-normal text-sm">
        {repo.description}
      </div>
      <div className="text-sm text-gray-700 hover:flex-row justify-evenly mt-2 items-center">
      <span className="align-bottom">
          <GoStar className="icon inline-block text-sm mr-1" />
          {repo.stargazers_count}
        </span>
        <span className="font-semibold ml-2"> {repo.language} </span>
        <span className="ml-2 align-bottom">
          <GoRepoForked  className="icon inline-block" />
          {repo.forks}
        </span>
        <span className="ml-2 align-bottom">
          <GoCalendar className="icon inline-block mr-1 " />
          <Moment format="YYYY MMM DD">{repo.created_at}</Moment>
        </span>
      </div>
    </div>
  );
}
