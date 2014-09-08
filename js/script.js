$(document).ready(function () {
  /* initially hide list items */
  $("#list li").hide();

  /* filter fruits as you type */
  $("#search").on("keyup click input", function () {
  if (this.value.length > 0) {
    $("#list li").hide().filter(function () {
      return $(this).text().toLowerCase().indexOf($("#search").val().toLowerCase()) != -1;
    }).show();
  }
  else {
    $("#list li").hide();
  }
  });


/* Add and remove items from the list */

    $('#add').click(function() {
        var item = $('#search')
        $('ul').prepend("<li>"+item.val()+"</li>");
    });
    $('ul').on('click', 'li', function() {
        $(this).remove();
    });
});

