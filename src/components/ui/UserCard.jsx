/* eslint-disable react/prop-types */

import React, { useState } from "react";
import UserModal from "./UserModal";
const UserCard = ({ usersdata }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-white p-5 rounded-2xl flex flex-col justify-between gap-2">
      {/* <h1>Name: {usersdata?.name}</h1>
      <h1>Email: {usersdata?.email}</h1>
      <h1>City: {usersdata?.address?.city}</h1> */}
      <h1 className="text-gray-700">
        Name:{" "}
        <span className="text-gray-700 font-semibold">{usersdata?.name}</span>{" "}
      </h1>
      <h1 className="text-gray-700">
        User Name:
        <span className="text-gray-700 font-semibold">
          {usersdata?.username}
        </span>
      </h1>
      <div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-block rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none cursor-pointer"
        >
          View full details
        </button>
      </div>
      {showModal ? (
        <UserModal setShowModal={setShowModal} data={usersdata} />
      ) : null}
    </div>
  );
};

export default React.memo(UserCard);
