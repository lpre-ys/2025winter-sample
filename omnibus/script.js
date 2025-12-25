$(function(){
  // $('.ui-left-menu').parent().hide();
  $('.ui-left-text').parent().hide();
  $('#toggle-bg').click(() => {
    $('.left-list').toggleClass('show-bg');
  })
  $('#toggle-left-type').click(() => {
    $('.ui-left-text').parent().toggle();
    $('.ui-left-menu').parent().toggle();
  });
});
