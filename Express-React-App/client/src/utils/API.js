import axios from "axios";

export default {
  //Post new question
  saveQuestion: function(newQuestionObj) {
    return axios.post("/api/Question", newQuestionObj);
  },
  saveTopic: function(newTopicObj){
    return axios.post("/api/Topic", newTopicObj);
  },

  getTopics: function(){
    return axios.get("/api/Topic");
  },

  populateDashboard: function(req){
    return axios.get("api/dashboard/"+req);
  },

  search: function(searchPramObj){
    return axios.get("api/search", {params: searchPramObj});
  },

  //Signin and signup users

  signup: function(userInput){
    console.log(userInput);
    return axios.post("api/newUserSignup", userInput);
  },

  login: function(userInput){
    console.log(userInput);
    return axios.post("api/userLogin", userInput);
  },

  

  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
