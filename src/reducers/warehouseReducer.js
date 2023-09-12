const initialState = {
  warehouses: [],
  searchQuery: "",
  filterOptions: {
    city: "",
    cluster: "",
    spaceAvailable: 0,
  },
  currentFilter: "",
};

const warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WAREHOUSES":
      return {
        ...state,
        warehouses: action.payload,
      };

    case "SAVE_WAREHOUSE":
      const updatedWarehouses = state.warehouses.map((wh) =>
        wh.id === action.warehouse.id ? action.warehouse : wh
      );
      console.log("Updated Warehouses:", updatedWarehouses);
      return {
        ...state,
        warehouses: updatedWarehouses,
      };
    case "EDIT_WAREHOUSE":
      return { ...state, editedWarehouse: action.payload };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.query,
      };
    case "SET_FILTER_OPTIONS":
      action.payload.key = action?.payload?.key?.toLowerCase();
      const data = state.warehouses.filter(
        (item) => item[action.payload.key] == action.payload.filter
      );
      return {
        ...state,
        warehouses: data,
      };
    default:
      return state;
  }
};

export default warehouseReducer;
