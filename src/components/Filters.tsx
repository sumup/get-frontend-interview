import React from "react";
import './Filters.css';

const Filters = () => {
  const onChangeAcquirer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  const onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h3>
        Filters
      </h3>
      <div>
        <div>
          <label className="filter-title">Acquirer</label>
          <select onChange={onChangeAcquirer}>
            <option value="">All</option>
            <option value="West">West</option>
            <option value="North">North</option>
            <option value="East">East</option>
            <option value="South">South</option>
          </select>
        </div>
        <>
          <label className="filter-title">Status</label>
          <select onChange={onChangeStatus}>
            <option value="">All</option>
            <option value="success">Success</option>
            <option value="failed">Failed</option>
          </select>
        </>
      </div>
    </div>
  );
};

export default Filters;
