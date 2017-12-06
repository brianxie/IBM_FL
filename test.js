//$(".imgUploadFilepath").change(function() {
//  //alert(  $(this).val() );
//  $(this).parent(".uploadBtn").hide();
//  $(this).parents().eq(2).find(".uploadConfirm").show();
//  $("#imgUploadFilepath").text($(this).val().replace(/C:\\fakepath\\/i, ''));
//});
//
//$(".cancelBtn").click(function() {
//	$(this).parents().eq(2).find(".uploadInput").show();               
//  $(this).parent(".uploadConfirm").hide();
//  
//  $(".imgUploadFilepath").text('');
//});


function clear() {
   var reset = document.getElementsByClassName('reset');
    reset.value = "";
};