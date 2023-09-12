import warehouses from "../warehouses.json";

export const fetchWarehouses = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_WAREHOUSES", payload: warehouses });
  };
};

export const saveWarehouse = (warehouse) => {
    return (dispatch) => {
      dispatch({ type: "SAVE_WAREHOUSE", warehouse });
    };
  };

  export const editWarehouse = (warehouse) => {
    return {
      type: 'EDIT_WAREHOUSE',
      payload: warehouse,
    };
  };

export function setSearchQuery(query) {
    return {
      type: 'SET_SEARCH_QUERY',
      query,
    };
  }
  
  export function setFilterOptions(key, filter) {
    return {
      type: 'SET_FILTER_OPTIONS',
      payload: { key, filter },
    };
  }





  