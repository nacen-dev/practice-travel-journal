import React from "react";
import { ImLocation } from "react-icons/im";
import format from "date-fns/format";

type Props = {
  location: {
    image: string;
    country: string;
    name: string;
    description: string;
    googleMapLink: string;
  };
  startDate: Date;
  endDate: Date;
};

const Location = (props: Props) => {
  return (
    <div className="grid grid-cols-[25%_75%]">
      <img src={props.location.image} alt={props.location.name} className="rounded-lg h-full"/>
      <div className="flex-1 p-6">
        <div className="flex gap-2 items-center">
          <ImLocation className="text-red-400" />
          <p className="tracking-wider">{props.location.country.toUpperCase()}</p>
          <a href={props.location.googleMapLink} className="text-gray-400">
            View on Google Maps
          </a>
        </div>
        <p className="text-4xl font-bold py-4">{props.location.name}</p>
        <p className="font-bold">
          {format(props.startDate, "EEEE d MMM, yyyy")} -{" "}
          {format(props.endDate, "EEEE d MMM, yyyy")}
        </p>
        <p>{props.location.description}</p>
      </div>
    </div>
  );
};

export { Location };
