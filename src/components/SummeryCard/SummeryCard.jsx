import React from "react";

const SummeryCard = ({title, data}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary">{title}</h2>
        <h3 className="text-lg font-semibold text-slate-700">{data}</h3>
      </div>
    </div>
  );
};

export default SummeryCard;
