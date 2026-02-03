import { createSelector } from "reselect";

const selectProductReducer = (state) => state.product;

export const selectActiveProduct = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.activeProduct
);