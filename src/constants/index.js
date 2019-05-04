export const API_ROOT = "http://api.repo.nypl.org/api/v1/items/search.json?q=";

export const NYPL_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: process.env.NYPL_KEY
};