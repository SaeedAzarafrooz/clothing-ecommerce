import { createAction } from "../../utils/reducer/reducer.utils";
import { PRODUCT_ACTION_TYPES } from "./product.types";

export const setActiveProduct = (product) =>
  createAction(PRODUCT_ACTION_TYPES.SET_ACTIVE_PRODUCT, product);

export const clearActiveProduct = () =>
  createAction(PRODUCT_ACTION_TYPES.CLEAR_ACTIVE_PRODUCT);