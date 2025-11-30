import React from "react";
import { useLoaderData, useNavigation } from "react-router";

import Event from "./Event";
import Loading from "../Loading";

const Events = () => {
  const data = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-2xl text-center font-semibold mt-10 text-orange-500">
        {" "}
        See All routes
      </h1>
      <div className=" m-5 md:10 xl:m-16 grid grid-cols-1  xl:grid-cols-2 gap-20">
        {data.map((data) => (
          <Event key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Events;
