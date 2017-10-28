var buildCollectionItemTemplate = function(imageArr){
    var name = "Sarah";
    var type = "Fashion";
    var space = " &#160| ";
    var template =
         '<div class="collection-album-container column third">'
        + '  <img alt ="cover" src=../assets/images/' + imageArr[2]
            + '>'
       + '  <div class="collection-album-info caption">'
       + '    <p>'
       + '      <a class="album-name" href="/album.html"> ' + imageArr[0] + '</a> ' + " &#160| "
//       + '      <br/>'
       + '      <a href="/album.html"> ' + imageArr[1] + '</a>'
       + '      <br/>'
       + '    </p>'
       + '  </div>'
       + '</div>'
       ;
    return $(template);
};

$(window).load(function() {

    $(window).scroll(function(event) {
        if($(window).scrollTop() >= 100){
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
            
     });
    var $portfolioContainer = $('.costumes');
    $portfolioContainer.empty();
    for (var i = 0; i< costumeShoots.length; i++) {
        var $costumeThumbnail = buildCollectionItemTemplate(costumeShoots[i]);
        $portfolioContainer.append($costumeThumbnail);
     }
 });

