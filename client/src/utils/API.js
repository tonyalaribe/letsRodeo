import axios from "axios";

export default {
  // Gets all books
  getRodeos: function() {
    return axios.get("/api/rodeos");
  },
  // Gets the book with the given id
  getRodeo: function(id) {
    return axios.get("/api/rodeos/" + id);
  },
  // Deletes the book with the given id
  deleteRodeo: function(id) {
    return axios.delete("/api/rodeos/" + id);
  },
  // Saves a book to the database
  saveRodeo: function(rodeoData) {
    return axios.post("/api/rodeos", rodeoData);
  }
};
