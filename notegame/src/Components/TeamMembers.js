import React from "react";
import cheffs from "./chef1.png";
import chef22 from "./chefgirl.jpg";
function TeamMembers() {
  return (
    <div>
      <figure className="mx-auto max-w-screen-md text-center">
        <blockquote>
          <p className="text-2xl italic font-medium text-blue-900 dark:text-black">
            Our Team{" "}
          </p>
        </blockquote>
        <figcaption className="flex justify-center items-center mt-6 space-x-3">
         <div>
          <div className="block items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <h1 class="text-blue-900 dark:text-black">The Simply Recipes Team</h1>
            <p>Simply Recipes is a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.</p>
            <cite class="  pr-3 font-medium text-blue-900 dark:text-black">Meet the Team </cite>
          </div>
          <div class="cheff flex flex-row items-center  ">
            <img src={cheffs} class="flex rounded-full border-black"></img>
            <img src={chef22} class="flex rounded-full border-black"></img>
            <img src={chef22} class="flex rounded-full border-black"></img>
            <img src={chef22} class="flex rounded-full border-black"></img>
          </div>
            <div class="names flex  items-center ml-20">
             <h2>Yahia</h2>
             <h2>Heyam</h2>
             <h2>Batoul</h2>
             <h2>Ruba</h2>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
export default TeamMembers;
