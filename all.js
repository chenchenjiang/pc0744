$(function (){
  $.ajax({
  url:"http://localhost:8081/HTML/spots/all",
  type:"get",
  dataType:"json",  
success:function(result){
  console.log(result)
  var p1=result[0];
  var html=`
  <div class="su_two_one ">
    <div class="su_two_two">
      <img src="../../img/uploads/2016/1101/453e0e93538f3ac515d20ce4dea436dd_265x180.jpg" alt="">
    </div>
    <div class="su_two_three">
      <h4><a href="javascript:;">${p1.jdname}</a></h4>
      <p>景点地址${p1.jddizhi}</p> 
      <p>景点主题${p1.jdzhuti}</p>
      <p> 景点简介${p1.jdjieshao}</p>
    </div>
    <div class="su_two_four">
      <p><span>￥</span><b>${p1.jdjiaqian}</b>起</p>
      <p><a href="javascript:;">查看详情</a></p>
   <div>
      <p><i>${p1.jdhaoping}%</i> 好评率</p>
      <p>${p1.jddianping}条点评</p>
   </div>
    </div>
  </div>`
  document.getElementById("p1").innerHTML=html
  }
  })
 })


//  $(document).ready(function(){
//   $("p").hover(function(){
//     $("p").css("background-color","yellow");
//     },function(){
//     $("p").css("background-color","pink");
//   });
// });


$(ul.ul_1).ready(function(){
  console.log(ul.ul_l)
  $("li").hover(function(){
    $("li").css("background-color","yellow");
    },function(){
    $("li").css("background-color","pink");
  });
});






















