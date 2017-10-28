var buildCollectionItemTemplate = function(imageArr){
    var template =
         '<div class="collection-album-container column third">'
        + '  <img alt ="cover" src=assets/images/' + imageArr[2]
            + '>'
       + '  <div class="collection-album-info caption">'
       + '    <p>'
       + '      <a class="album-name" href="/album.html"> ' + imageArr[0] + '</a> &#160|' 
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
    var $bridalContainer = $('.bridals');
    $bridalContainer.empty();
    var $costumeContainer = $('.costume');
    $costumeContainer.empty();
    var $dancesContainer = $('.dances');
    $dancesContainer.empty();
    var $fashionContainer = $('.fashion');
    $fashionContainer.empty();
    for (var i = 0; i< 6; i++) {
        var $bridalThumbnail = buildCollectionItemTemplate(bridalShoots[i]);
        var $fashionThumbnail = buildCollectionItemTemplate(fashionShoots[i]);
//        var $dancesThumbnail = buildCollectionItemTemplate("album_covers/01.png");
//        var $costumeThumbnail = buildCollectionItemTemplate("album_covers/01.png");
        $bridalContainer.append($bridalThumbnail);
//        $dancesContainer.append($dancesThumbnail);
        $fashionContainer.append($fashionThumbnail);
//        $costumeContainer.append($costumeThumbnail);
     }
    for (var j = 0; j< costumeShoots.length; j++) {
        var $costumeThumbnail = buildCollectionItemTemplate(costumeShoots[j]);
        $costumeContainer.append($costumeThumbnail);
     }
    for (var i = 0; i< occasionShoots.length; i++) {
        var $dancesThumbnail = buildCollectionItemTemplate(occasionShoots[i]);
        $dancesContainer.append($dancesThumbnail);
     }

});