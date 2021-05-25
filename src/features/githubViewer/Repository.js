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
      className={`px-10 py-5 cursor-pointer hover:bg-green-800
        ${currentRepository === repo.name ? "bg-green-900" : ""}`}
      onClick={() => {
        dispatch(setCurrentRepository(repo.name));
      }}
    >
      <div className="text-xl font-bold tracking-wide	">{repo.name}</div>
      <div className="text-blue-400 font-normal text-sm">
        {repo.description}
      </div>
      <div className="text-sm flex-row justify-evenly mt-2 items-center">
      <span className="align-bottom">
          <GoStar className="text-yellow-400 inline-block text-sm mr-1" />
          {repo.stargazers_count}
        </span>
        <span className="font-semibold ml-2"> {repo.language} </span>
        <span className="ml-2 align-bottom">
          <GoRepoForked className="text-yellow-400 inline-block" />
          {repo.forks}
        </span>
        <span className="ml-2 align-bottom">
          <GoCalendar className="text-yellow-400 inline-block mr-1 " />
          <Moment format="YYYY MMM DD">{repo.created_at}</Moment>
        </span>
      </div>
    </div>
  );
}
