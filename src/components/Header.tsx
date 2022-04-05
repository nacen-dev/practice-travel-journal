import React from "react";
import { IoEarth } from 'react-icons/io5'

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="px-9 py-6 bg-red-400 text-white flex items-center justify-center">
      <div className="gap-3 flex items-center justify-center text-3xl">
        <IoEarth />
        <p className="text-xl font-semibold">Travel Journal</p>
      </div>
    </div>
  );
};

export { Header };
