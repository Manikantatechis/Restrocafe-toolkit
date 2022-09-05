import axios from "axios";

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
   baseURL = "http://127.0.0.1:8000";
}

// baseURL = "https://restrocafebackend.herokuapp.com/";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
  ////////////////////////////////
  // Item
  ////////////////////////////////
  getItems = async (category) => {
    let url = "/items";
    if (category) {
      url += "?category=" + category;
    }
    const items = await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return items;
  };
  ////////////////////////////////
  // Review
  ////////////////////////////////
  getReviews = async (item_id) => {
    let url = "/reviews?item_id=" + item_id;
    const reviews = await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return reviews;
  };
  writeReview = async (item_id, name, body, like_count) => {
    const formData = new FormData();
    formData.append("item", item_id);
    formData.append("name", name);
    formData.append("body", body);
    formData.append("like_count", like_count);
    const savedReview = await api
      .post("/reviews/add", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedReview;
  };
}
