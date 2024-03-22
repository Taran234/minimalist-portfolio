import classNames from "classnames";
import Image from "next/image";

interface UserProps {
  name: string;
  imgUrl: string;
  websiteUrl: string;
}

export function User(props: UserProps) {
  return (
    <a
      className="group"
      href={
        props.websiteUrl
      }
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={classNames(
          "flex items-center gap-x-2",
          "text-neutral-900 dark:text-neutral-50"
        )}
      >
        <Image
          src={props.imgUrl}
          alt="alternate image"
          height={50}
          width={50}
          className="-ml-1 object-cover h-10 w-10 rounded-full first:ml-0"
        />
        <span className="group-hover:underline group-focus:underline">
          {props.name}
        </span>
      </div>
    </a>
  );
}
