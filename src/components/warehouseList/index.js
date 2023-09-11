import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
import {
  fetchWarehouses,
  setSearchQuery,
  setFilterOptions,
  setCityFilter,
  setClusterFilter,
  setSpaceAvailableFilter
} from "../../actions/warehouseActions";
import FilterData from "../FilterData";
import SearchBar from "../SearchBox";

const cityOptions=[
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Chennai', label: 'Chennai' },
  {value:'Indore',label:'Indore'}
]
// const options=[
//   {
//     city:["Chennai","Delhi","Indore","Mumbai","Bangalore","Guwahati"]
//   },
//   {
//     cluster:["cluster-a-32","cluster-a-1","cluster-a-21","cluster-a-2","cluster-v-2"]
//   },
// ]

const WareHouseList = () => {
  
  const warehouses = useSelector((state) => state.warehouseReducer.warehouses);

  const searchQuery = useSelector(
    (state) => state.warehouseReducer.searchQuery
  );
  const filterOptions = useSelector(
    (state) => state.warehouseReducer.filterOptions
  );

  const dispatch = useDispatch();
  console.log(filterOptions);
  console.log(searchQuery);

  const handleCityFilterChange = (e) => {
    console.log("Selected City:", e.target.value);
    dispatch(setCityFilter(e.target.value));
  };

  const filteredWarehouses = warehouses.filter((warehouse) => {
    return (searchQuery.toLowerCase()===''?warehouse:warehouse.name.toLowerCase().includes(searchQuery)
    
    )
    // const query = searchQuery.toLowerCase();
    // const name = warehouse.name.toLowerCase();
    // const city = warehouse.city.toLowerCase();
    // const cluster = warehouse.cluster.toLowerCase();
    // const spaceAvailableLimit = parseInt(filterOptions.spaceAvailable);

    // return (
    //   (searchQuery === '' || name.includes(query)) &&
    //   (filterOptions.city === '' || city===filterOptions.city) &&
    //   (filterOptions.cluster === '' || cluster === filterOptions.cluster) &&
    //   (isNaN(spaceAvailableLimit) || warehouse.space_available >= spaceAvailableLimit)
    // );
    
  });
  console.log(filteredWarehouses);

  useEffect(() => {
    dispatch(fetchWarehouses());
  }, [dispatch]);

  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };


  return (
    <div className="container">
      <h1>Warehouse Listing</h1>

      <div className="list-container">
      <SearchBar
        value={searchQuery}
        handleSearchInputChange={handleSearchInputChange}
      />
      <FilterData
        value={filterOptions.city}
        handleFilterChange={handleCityFilterChange}
        options={cityOptions}
       defaultText="Filter by City"
      />
     
      </div>

      <br />
      <table>
        <thead>
          <tr>
            <th>Warehouse Name</th>
            <th>city</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredWarehouses.map((warehouse) => (
            <tr key={warehouse.id}>
              <td>{warehouse.name}</td>
              <td>{warehouse.city}</td>
              <td>
                <Link to={`/warehouse/${warehouse.id}`}>
                  <button>View Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WareHouseList;
