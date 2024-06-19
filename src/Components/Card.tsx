import { AiOutlineVideoCamera } from "react-icons/ai";

const Card = ({
  title,
  date,
  to = "/",
  call = true,
  colorbg,
  color,
  avatar,
  titlecard,
}: {
  title?: string;
  date?: any;
  to?: string;
  call?: boolean;
  colorbg?: string;
  color?: string;
  avatar?: string;
  titlecard?: string;
}) => {
  return (
    <div className="flex">
      <div className={`${color || " bg-dark-blue"} rounded-l-lg w-[1vh]`} />
      <div
        className={`${
          colorbg || "bg-light-orange"
        } p-4 rounded-r-lg flex justify-between w-full`}
      >
        <div>
          <h4 className={`${titlecard || "text-dark-blue"}  font-bold mb-3`}>
            {title}
          </h4>
          <div className={`${titlecard || "text-light-blue"} mb-3`}>{date}</div>
          {avatar && (
            <div className="flex items-center">
              <img
                alt=""
                className="w-[4vh] h-[4vh] rounded-full"
                src={avatar}
              />
              <a
                className={`${titlecard || "text-light-blue"} underline ml-3`}
                href={to}
              >
                View Client Profile
              </a>
            </div>
          )}
        </div>
        {call && (
          <div
            className={`${
              titlecard ? "bg-[white]" : "bg-dark-blue"
            } h-fit rounded-full`}
          >
            <AiOutlineVideoCamera
              className={`${
                titlecard ? "text-dark-blue" : "text-[white]"
              } p-[10px]`}
              fontSize={50}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const CardTitle = ({
  title,
  color,
  titlecard,
  colorbg,
}: {
  title: string;
  color?: "bg-light-blue" | "bg-light-orange" | "bg-dark-orange";
  titlecard?: "text-white";
  colorbg?: "bg-dark-blue" | "bg-light-orange" | "bg-dark-orange";
}) => {
  return (
    <div className="flex h-[30px]">
      <div className={`${color || " bg-dark-blue"} rounded-l-lg w-[1vh]`} />
      <div
        className={`${
          colorbg || "bg-light-orange"
        } p-1 rounded-r-lg flex justify-between w-full`}
      >
        <div>
          <h4 className={`${titlecard || "text-dark-blue"}  font-bold mb-3`}>
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export { Card, CardTitle };
