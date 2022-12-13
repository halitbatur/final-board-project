import React, { useState } from "react";

export default function Card() {
  const posts = [
    {
      title: "Title 1",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "Title Grid 2",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "Title Grid 3",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "Title Grid 4",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
  ];

  const [layout, setLayout] = React.useState(1);
  return (
    <>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="w-full">
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => setLayout(1)}
          >
            {" "}
            layout 1
          </button>
          <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => setLayout(3)}
          >
            layout 2
          </button>
        </div>

        {posts.map((item, index) => (
          <div
            // className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            className={`my-1 px-1 w-full md:w-${layout}/2 lg:my-4 lg:px-4 lg:w-${layout}/3`}

            // {layout? style={{width:'100%'}}:}
          >
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={item.img}
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    {item.title}
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>
              <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    {item.content}
                  </a>
                </h1>
              </div>
              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Delete
                </button>
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
