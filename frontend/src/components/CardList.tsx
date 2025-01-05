export interface CardProps {
  imgUrl: string;
  title: string;
  stack: string;
  description: string;
  projectUrl: string;
}

export const CardList: React.FC<CardProps> = ({
  title,
  imgUrl,
  stack,
  description,
  projectUrl,
}) => {
  return (
    <div className="w-full max-w-sm min-h-[340px] border border-slate-300 dark:shadow-md dark:shadow-cyan-100/60 dark:hover:shadow-lg dark:hover:shadow-cyan-100 dark:border-none shadow-md hover:shadow-2xl hover:-translate-y-8 transition-all duration-200 bg-slate-200 dark:bg-slate-700 rounded-lg ">
      <img
        src={imgUrl}
        className="h-[150px] w-full rounded-t-lg bg-white dark:bg-slate-500 border-b border-slate-300 dark:border-sky-200 object-fill"
        alt={title}
      />
      <div className="px-4 pb-4 font-poppins text-wrap overflow-hidden ">
        <div className="my-3">
          <h1 className="font-bold text-sky-950 dark:text-white text-lg capitalize truncate">
            {title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 font-medium text-xs italic capitalize truncate">
            {stack}
          </p>
        </div>
        <p className="text-gray-500 text-sm font-normal text-ellipsis overflow-hidden dark:text-white text-start">
          {description}
        </p>
      </div>
      <div className="w-full flex items-end justify-end flex-1 pb-6 px-8 mt-4">
        <a
          href={projectUrl}
          target="_blank"
          className="relative p-3 bg-neutral-800 hover:underline-offset-2 shadow-xl cursor-pointer rounded-md active:ring active:ring-sky-700 duration-150 transition-all active:scale-95"
        >
          <span className="flex justify-center items-center">
            <svg viewBox="0 0 512 512" fill="white" width="14" height="14">
              <path d="M178.4 287.5c-9.1 0-16.9 4.2-23.2 12.8-6.3 8.5-9.4 19-9.4 31.4 0 12.5 3.2 23 9.4 31.5 6.3 8.5 14 12.8 23.2 12.8 8.5 0 15.9-4.3 22.1-12.8 6.3-8.5 9.4-19 9.4-31.5 0-12.4-3.2-22.9-9.4-31.4-6.3-8.6-13.6-12.8-22.1-12.8zm156.3 0c-9 0-16.9 4.2-23.2 12.8-6.3 8.5-9.4 19-9.4 31.4 0 12.5 3.2 23 9.4 31.5 6.3 8.5 14.1 12.8 23.2 12.8 8.5 0 15.9-4.3 22.2-12.8 6.3-8.5 9.4-19 9.4-31.5 0-12.4-3.2-22.9-9.4-31.4-6.3-8.6-13.6-12.8-22.2-12.8z"></path>
              <path d="M445.8 172c-.1 0 2.7-14.3.3-39.2-2.2-24.9-7.5-47.8-16.1-68.8 0 0-4.4.8-12.8 2.9s-22.1 6.3-40.9 14.8c-18.5 8.5-38 19.8-58.3 33.5-13.8-3.9-34.4-5.9-62-5.9-26.3 0-46.9 2-62 5.9-44.6-30.9-81.9-48-112.1-51.2-8.6 21-13.9 44-16 69-2.4 24.9.4 39.3.4 39.3C42 198.6 32 236.5 32 267.8c0 24.2.7 46.1 6.1 65.5 5.6 19.3 12.7 35.1 21.1 47.2 8.6 12.1 19 22.8 31.6 31.9 12.5 9.3 24 16 34.4 20.2 10.5 4.4 22.4 7.6 36 9.9 13.3 2.4 23.4 3.6 30.5 4 0 0 28 1.5 64.4 1.5s64.3-1.5 64.3-1.5c7-.4 17.1-1.6 30.5-4 13.5-2.3 25.5-5.6 35.9-9.9 10.4-4.3 21.9-10.9 34.5-20.2 12.5-9 22.9-19.7 31.5-31.9 8.4-12.1 15.5-27.9 21.1-47.2 5.5-19.4 6.1-41.4 6.1-65.6 0-30.3-10-68.7-34.2-95.7zm-65.4 233.6c-27.9 13.1-68.9 18.4-123.3 18.4H255c-54.4 0-95.4-5.2-122.8-18.4-27.5-13.1-41.3-40.1-41.3-80.7 0-24.3 8.6-44 25.5-59.1 7.4-6.5 16.4-11 27.6-13.7 11.1-2.6 21.4-2.8 31-2.5 9.4.4 22.6 2.2 39.3 3.5 16.8 1.3 29.3 3 41.8 3 11.7 0 27.2-2 52.1-4 25-2 43.5-3 55.5-1 12.3 2 23 6.2 32.1 14.7 17.7 15.8 26.6 35.5 26.6 59.1-.1 40.6-14.2 67.6-42 80.7z"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default CardList;
