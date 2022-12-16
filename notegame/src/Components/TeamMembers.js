import React from "react";
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
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-blue-900 dark:text-black">
              Yahia, Heyam, Batoul & Ruba
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
export default TeamMembers;
