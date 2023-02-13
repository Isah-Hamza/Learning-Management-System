import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const ActivityCard = ({ clickHanldler }) => {
  return (
    <div
      onClick={clickHanldler ? () => clickHanldler() : null}
      className="cursor-pointer flex text-sm justify-between items-center bg-white p-3 rounded"
    >
      <div className="flex flex-col gap-2 items-center">
        <p className="opacity-60">Status</p>
        <div className="w-2 h-2 rounded-full bg-[coral]"></div>
      </div>
      <div className="flex flex-col">
        <p className="opacity-60">Date / Time</p>
        <p className="font-medium">12/12/2012</p>
      </div>
      <div className="flex flex-col">
        <p className="opacity-60">IP Address</p>
        <p className="font-medium">192.168.20.12</p>
      </div>
      <div className="flex flex-col">
        <p className="opacity-60">Duration</p>
        <p className="font-medium">5s</p>
      </div>
      <div className="flex flex-col">
        <p className="opacity-60">User</p>
        <p className="font-medium">Unknown</p>
      </div>
      <div className="flex flex-col">
        <p className="opacity-60">Executable</p>
        <p className="font-medium">Safari</p>
      </div>
      <div className="flex flex-col">
        <p className="opacity-60">Descripition</p>
        <p className="font-medium">Lorem ipsum...</p>
      </div>
      <FiMoreVertical className="cursor-pointer" />
    </div>
  );
};

export default ActivityCard;
