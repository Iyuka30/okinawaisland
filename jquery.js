
$(function(){
  
  // tab-list
  $(".tab-list li").on("click",function(){
    let id = $(this).attr("id");
    console.log(id);
    $(".box").removeClass("current");
    $(id).addClass("current");

  })

  // island-menu アコーディオン
  $("#island").on("click",function(){
    $(this).siblings().slideToggle();
    console.log(this);
  })

  // コメントボタン押すと次のサイトに飛べる

  $("#hontou").on("click", function () {
    console.log($("#hontou"));
    window.location.href = 'https://www.okinawastory.jp/';
  })
  $("#yonaguni").on("click", function () {
    console.log($("#yonaguni"));
    window.location.href = 'https://welcome-yonaguni.jp/';
  })

  $("#ishigaki").on("click", function () {
    console.log($("#ishigaki"));
    window.location.href = '  https://ooritoori-ishigaki.com/';
  })

  $("#iriomote").on("click", function () {
    console.log($("#iriomote"));
    window.location.href = ' https://painusima.com/category/sima/iriomotejimawest/';
  })

  $("#miyakojima").on("click", function () {
    console.log($("#miyakojima"));
    window.location.href = ' https://miyako-guide.net/';
  })

  $("#kumejima").on("click", function () {
    console.log($("#kumejima"));
    window.location.href = 'https://www.kanko-kumejima.com/know';
  })

  // button トップへ戻る
  $(".go-top-btn").on("click",function(){
    $("body,html").animate({scrollTop:0},500);
  })  
  /* butoon ボタンまでスクロールされたら表示 */
  $(window).on("scroll",function(){
    let button = $(".button").offset().top; //button座標取得
    // console.log(button.top);
    let wh = $(window).height(); //画面の高さを取得
    // console.log(wh);
    let position = $(window).scrollTop(); //現在地の座標取得
    // console.log(position);
    if(button <= position + wh){
      $(".button").removeClass("hide");
    }
  })



})//最後
