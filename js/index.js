$(function(){
  $('.left-nav li').click(function(){
    console.log($(this).text())
    var text = $(this).text();
    //判断切换
    if(text == '首页'){
      $('.right-content').load('./pages/home.html')
    }else if(text == '栏目管理'){
      $('.right-content').load('./pages/category.html')
    }else if(text == '文章管理'){
      $('.right-content').load('./pages/article.html')
    }else if(text == '评论管理'){
      $('.right-content').load('./pages/comment.html')
    }else if(text == '用户管理'){
      $('.right-content').load('./pages/user.html')
    }else{
      return;
    }
    //改变背景色
    $(this).css({
      backgroundColor:'rgb(240,242,245)',
      color:'#333'
    })
    //未点击的地方恢复至原来的颜色
    $(this).siblings().css({
      backgroundColor:'rgb(48,65,86)',
      color:'#ccc'
    })
  })
  //页面刚加载显示首页
  $('.right-content').load('./pages/home.html')
})