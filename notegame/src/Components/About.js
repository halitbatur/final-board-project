import React from "react";
import tools from "./tools.jpg"
function About() {
  return (
    <div>
      <figure className="mx-auto max-w-screen-md text-center">
        <blockquote  class="flex-column justify-center items-center mt-6 space-x-3">
          <p className="text-2xl italic font-medium text-blue-900 dark:text-black">
            Different Recipes and Meal Ideas{" "}
          </p>
        </blockquote>
        <figcaption className="flex justify-center items-center mt-6 space-x-3">
          <div className="flex-cloumn items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <img src={tools} class="object-center flex-column items-center ml-60"></img>
            <p  >Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.</p>
            <cite className="pr-3 font-medium text-blue-900 dark:text-black">
              Made with love 🤍
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
export default About;
