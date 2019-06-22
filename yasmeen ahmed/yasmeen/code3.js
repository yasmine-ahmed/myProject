////////////////////////////////sound

$(".sound").click(function()
{
  $(".sound").hide();
  $(".mute").show();
})




$(".mute").click(function()
{
  $(".mute").hide();
  $(".sound").show();
})

////////////////////menu
$(".Openmenu").mouseenter(function()
{
  $(".Openmenu").hide(500);
$(".word").show(500);
$(".menu2").show(500);


})

$(".menu2").mouseleave(function()
{
  $(".Openmenu").show(500);
$(".word").hide(500);
$(".menu2").hide(500);


})
