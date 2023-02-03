$(function () {

    //tabのpic表示
  

    //top戻る
    $(".go-top-btn").on("click", function () {
        $("body,html").animate({ scrollTop: 0 }, 500);
        console.log("go-top-btn");
    });

})//最後
