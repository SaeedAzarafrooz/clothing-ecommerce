import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) => 
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const setIsProfileOpen = (boolean) =>
    createAction(USER_ACTION_TYPES.TOGGLE_PROFILE_OPEN, boolean);