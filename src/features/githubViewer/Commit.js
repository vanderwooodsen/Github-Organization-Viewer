import Moment from "react-moment";

export function Commit(props) {
  const {commit} = props;

  let title = commit.commit.message;
  let end = title.indexOf("\n");
  if (end !== -1) {
    title = title.substring(0, end);
  }

  return (
    <div className="bg-gray-700 py-3 px-3 border-blue-200 border-2 mb-1">
      <div className="text-l tracking-wide	line-clamp-2">
        {title}
      </div>
      <div className="mt-1 text-blue-400 font-normal text-sm">
        {commit.commit.committer.name}
        <span className="px-1 text-blue-200">commited at </span>
        <span className="text-sm  font-light text-blue-200">
          <Moment format="YYYY MMM DD">
            {commit.commit.committer.date}
          </Moment>
        </span>
      </div>
      <div className="text-sm flex-row justify-evenly mt-1">
        <span className=" text-xs font-light text-gray-500">
          {commit.sha}
        </span>
      </div>
    </div>
  );
}
