const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    case "customer/updateNationalID":
      return {
        ...state,
        nationalID: action.payload,
      };
    default:
      return state;
  }
};

export const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toLocaleString(),
    },
  };
};

export const updateName = (fullName) => {
  return { type: "customer/updateName", payload: fullName };
};

export const updateNationalID = (nationalID) => {
  return { type: "customer/updateNationalID", payload: nationalID };
};

export default customerReducer;
