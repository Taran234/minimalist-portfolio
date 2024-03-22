import classNames from "classnames";
import Image from "next/image";

import { Tooltip } from "./Tooltip";

// type ProjectProps = {
//   project: GitHub.GraphQL.API.PinnableItemEdge;
//   contributors: GitHub.GraphQL.API.User[];
// };
type ProjectProps = {
  url: string;
  name: string;
  description: string;
  avatarUrl: string;
};
export default function Project(props: ProjectProps) {
  return (
    <div

      className="group transition-transform hover:-translate-y-0.5"
    >
      <a
        className={classNames(
          "flex justify-between rounded-md py-4 px-6",
          "transition-shadow dark:transition-colors",
          // Background
          "bg-white dark:bg-neutral-800",
          // Shadows
          "shadow-skeuo group-hover:shadow-skeuo-lg dark:!shadow-skeuo-dark",
          // Border
          "border border-transparent dark:border-neutral-700 dark:group-hover:border-neutral-500"
        )}
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-col gap-1">
          <h3>
            <span className="group-hover:underline">
              {props.name}
            </span>
            <span className="opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
              &nbsp;↗
            </span>
          </h3>
          <p className="text-sm text-neutral-400 line-clamp-1">
            {props.description}
          </p>
        </div>
        <div className="hidden shrink-0 items-center sm:flex">


          <Image
            src={props.avatarUrl}
            alt={""}
            height={24}
            width={24}
            className="-ml-1 rounded-full first:ml-0"
          />


        </div>
      </a>
    </div>
  );
}
