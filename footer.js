$(function(){
  $.ajax({
    url:"../footer.html",
    type:"get",
    success:function(html){
      $(html).replaceAll("#footer");
      $(`<link rel="stylesheet" href="../../CSS/footer.css"/>`).appendTo("footer")
    }
  })
})