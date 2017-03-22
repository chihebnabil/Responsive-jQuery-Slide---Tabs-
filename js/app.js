(function($) {
 $("#tabs li").on('click',function (e) {
 	// body...
      var $target = $(e.target);
      var $tabs = $target.closest('#tabs');
      var $current = $target.closest('li');
      var $next = $current.next()
      var $prev = $current.prev()

      $tabs.find('li').removeClass('next')
      $tabs.find('li').removeClass('prev')
      $tabs.find('li').removeClass('active')
      
      $target.addClass('active');
      $prev.addClass('prev');
      $next.addClass('next');
      
      $('.tab-content').removeClass('show')
      var $hash = $('.active a')[0].hash
      console.log($hash)
      $($hash).addClass('show');

})

$(".next-link").on('click',function (e) {
      var $target = $(e.target);
      var $tabs = $('#tabs');
      $tabs.find('li').removeClass('active')
      $('.next').addClass('active')
      $tabs.find('li').removeClass('next')
      $('.active').next().addClass('next');
      $tabs.find('li').removeClass('prev')
      $('.active').prev().addClass('prev');

      $('.tab-content').removeClass('show')
      var $hash = $('.active a')[0].hash
      console.log($hash)
      $($hash).addClass('show');
}) 
$(".prev-link").on('click',function (e) {
      var $target = $(e.target);
      var $tabs = $('#tabs');
      $tabs.find('li').removeClass('active')
      $('.prev').addClass('active')
      $tabs.find('li').removeClass('next')
      $('.active').next().addClass('next');
      $tabs.find('li').removeClass('prev')
      $('.active').prev().addClass('prev');

      $('.tab-content').removeClass('show')
      var $hash = $('.active a')[0].hash
      console.log($hash)
      $($hash).addClass('show');
}) 
})(jQuery);