
$(function(){

  //tabのpic表示
  $(".tab-list li").on("click", function () {
    let id = $(this).attr("id"); //attra(classとかtypeとかdiv)
    console.log($(this).attr("id"));

  })

  // island-menu アコーディオン
  $("#island").on("click",function(){
    $(this).siblings().slideToggle();
    console.log(this);
  })



  // button トップへ戻る
  $(".go-top-btn").on("click",function(){
    $("body,html").animate({scrollTop:0},500);
  })  


})//最後
