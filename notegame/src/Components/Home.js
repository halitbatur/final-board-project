import React from "react";
import Card from "./Card";
import Form from "./Form";
function Home() {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <h1 className="text-3xl font-bold underline">Home page</h1>
      <br />
      <br />
      <br />

      <Form />
      {/* Cards */}
      <Card />
    </div>
  );
}
export default Home;
