import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toLocaleString(),
          },
        };
      },

      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },

    updateName(state, action) {
      state.fullName = action.payload;
    },
    updateNationalID(state, action) {
      state.nationalID = action.payload;
    },
  },
});

export const { createCustomer, updateName, updateNationalID } =
  customerSlice.actions;

export default customerSlice.reducer;

// const customerReducer = (state = initialStateCustomer, action) => {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };
//     case "customer/updateNationalID":
//       return {
//         ...state,
//         nationalID: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const createCustomer = (fullName, nationalID) => {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       nationalID,
//       createdAt: new Date().toLocaleString(),
//     },
//   };
// };

// export const updateName = (fullName) => {
//   return { type: "customer/updateName", payload: fullName };
// };

// export const updateNationalID = (nationalID) => {
//   return { type: "customer/updateNationalID", payload: nationalID };
// };

// export default customerReducer;
