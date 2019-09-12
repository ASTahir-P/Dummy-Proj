function loadMore() {
  var XHTTP_REQ = new XMLHttpRequest();
  document.getElementById("load-more").innerHTML = "Exploring the archive..."; //changing the dom model with updated text
  XHTTP_REQ.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ARTICLES_CONTAINER = document.getElementById("article-list");
      var PARSED_OBJ = JSON.parse(this.responseText); //parsing the response

      for (var i = 0; i < 4; i++) {
        var FA_ICON = "fa " + PARSED_OBJ.posts[i].category;
        var TITLE = PARSED_OBJ.posts[i].title;
        var DATE = PARSED_OBJ.posts[i].date;
        console.log(FA_ICON + TITLE + DATE);
        let appendHTML = `'<i class= ${FA_ICON}></i><h2>From the Archive</h2><h1> ${TITLE}</h1><h3>${DATE}</h3> 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aperiam eos quia, unde corporis, 
        quosreprehenderit doloremque blanditiis dignissimos laborum repellat aliquam vel officia possimus, debitis esseadipisci natus, molestias.</p></article>'`; //template literal to use with the parse
        ARTICLES_CONTAINER.insertAdjacentHTML('beforeend', '<article>' + appendHTML);
      }
      document.getElementById("load-more").innerHTML = "Load More"; //refitting the dom model with default text
    }
  };
  XHTTP_REQ.open("GET", "https://credentials-api.generalassemb.ly/explorer/posts", true);
  XHTTP_REQ.send();

}
$(document).ready(function () { //loading the AJAX requesting into the dom model
      $('#load-more').click(function () {
          loadMore();
        })
      })