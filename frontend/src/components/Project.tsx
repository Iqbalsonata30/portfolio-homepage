import CardList from "./CardList.tsx";

function Project() {
  return (
    <section className="flex flex-col py-10 bg-white dark:bg-slate-900">
      <div className="text-center max-w-lg mx-auto p-5 ">
        <h1 className="text-3xl font-extrabold font-mono text-zinc-800 dark:text-white  ">
          Portfolio
        </h1>
        <p className="my-4 font-poppins text-gray-600/85 dark:text-slate-50/90 text-md">
          Check out my portfolio to see the cool stuff I've worked on!
        </p>
        <hr className="h-1 my-2 bg-gray-300 border-0 rounded dark:bg-gray-400" />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-6 md:gap-4 my-5 w-10/12 md:w-full mx-auto md:max-w-7xl max-w-4xl">
        <CardList
          imgUrl="/assets/img/astronaut.png"
          title="Project 1 Title"
          stack="Laravel,React Js, PostgreSQL"
          description="some description of project 1"
        />
        <CardList
          imgUrl="/assets/img/astronaut.png"
          title="Project 2 Title"
          stack="Golang,React JS, TailwindCSS"
          description="some description of project 2"
        />
        <CardList
          imgUrl="/assets/img/astronaut.png"
          title="Project 3 Title"
          stack="Python,Go,Kotlin,Keras"
          description="some description of project 3"
        />
      </div>

      <a
        href="/portfolio"
        className="p-3 mx-auto rounded-lg bg-sky-100 shadow-sm text-gray-600 font-medium font-poppins hover:text-black"
      >
        See More
      </a>
    </section>
  );
}

export default Project;
