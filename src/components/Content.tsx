import React from "react";
import { travelData } from "../travelData";
import { Location } from "./Location";

type Props = {};

const Content = (props: Props) => {
  return (
    <main className="py-9 px-[20%] flex flex-col gap-8">
      {travelData.map((traveledLocation, index) => (
        <Location
          key={`${traveledLocation.location.country} ${traveledLocation.location.name} ${index}`}
          endDate={traveledLocation.endDate}
          startDate={traveledLocation.startDate}
          location={traveledLocation.location}
        />
      ))}
    </main>
  );
};

export { Content };
