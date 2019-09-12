function loadSlide(next = null) {
  let slideshow = [ //this can be pulled form the server directly
    {
      image: "images/slideshow_1.jpeg",
      caption: "Cloudy with a chance of moon"
    },
    {
      image: "images/slideshow_2.jpeg",
      caption: "Half moon mountain"
    },
    {
      image: "images/slideshow_3.jpeg",
      caption: "Moonrise"
    }
  ];

  let pos,
    currentSlide = parseInt(localStorage.getItem("currentSlide")) || 0; //using local storage to save the current position of the slide which remembers the last render position.
  if (next) { //next
    pos = currentSlide === slideshow.length - 1 ? 0 : currentSlide + 1;
  } else { //previous
    pos = currentSlide === 0 ? slideshow.length - 1 : currentSlide - 1; //manipulating the position based on selection
  }
  
  if (next === null) { //setting the default view to the 1st image
    pos = 0;
  }
  localStorage.setItem("currentSlide", pos); //setting the possition in localstorage for efficient render, rather than rerendering each element.
  let obj = $("#slideshow"); 
  let img = obj.find("img");
  if (img.length === 0) { //manipulating dom
    img = $("<img/>").insertAfter(obj.find("#caption"));
  }
  let link = $("<a/>") //adding links to the captions
    .attr("href", "#")
    .html(slideshow[pos].caption);
  obj.find("#caption").html(link);//manipulating dom
  img.attr("src", slideshow[pos].image);//manipulating dom
  return;
}

$(document).on("click", "#slideshow > button", function () { //Next button feature
  loadSlide($(this).attr("id") === "next");
});

$(document).ready(function() { //loading the jquery
  loadSlide();
});
