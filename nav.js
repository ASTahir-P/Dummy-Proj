$(document).ready(function () { 
  $(document).click(function () {
    $('#dropdown').hide(); //default behavior of keeping the menu always hidden
  });
  $('[data-related-panel]').click(function (event) {
    event.stopPropagation(); //interupting the default behavior
    let target = $(this).data('related-panel'); //setting the target to the related panel data elemnts

    function hideShow() {  //parsing the data elements into the section finder
      $('#dropdown').find('section').hide();
      $("#" + target).show();
    }
    $('#dropdown').slideDown("fast", hideShow())
  });
});