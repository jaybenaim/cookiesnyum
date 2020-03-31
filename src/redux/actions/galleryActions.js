import { FILTER_GALLERY } from "../types";

export const filterGallery = filter => ({
  type: FILTER_GALLERY,
  payload: filter
});
