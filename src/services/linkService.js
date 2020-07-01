import api from "./api";

export default {
  getLinks() {
    return api().get('/links')
  }
};
