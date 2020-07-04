//封装JQuery的ajax请求
//请求方式，请求地址，携带参数，响应内容
var baseURL = 'http://39.98.180.71:8099';
function myAjax(url,method,param,successHandle,errorHandle){
  $.ajax({
    url:baseURL + url,
    method:method,
    data:param,
    success:successHandle,
    error:errorHandle
  })
}