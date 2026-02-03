import { PRODUCT_ACTION_TYPES } from "./product.types";

export const PRODUCT_INITIAL_STATE = {
  activeProduct: null,
};

export const productReducer = (state = PRODUCT_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.SET_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProduct: payload,
      };

    case PRODUCT_ACTION_TYPES.CLEAR_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProduct: null,
      };

    default:
      return state;
  }
};