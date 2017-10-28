

var favorites = [["Becca", "Bridals", "bridals/becca-3.jpg"], ["Jamie", "Costume", "costume/Jamie-1.jpg"], ["Liz", "Fashion","fashion/Liz-1.jpg"], ["Nicole", "Fashion","fashion/Nicole-1.jpg"], ["Alice","Bridals","bridals/Alice-2.jpg"], ["Callie", "Dance","occasion/Callie-2.jpg"]]

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
    var $portfolioContainer = $('.bridals');
    $portfolioContainer.empty();
    for (var i = 0; i< bridalShoots.length; i++) {
        var $costumeThumbnail = buildCollectionItemTemplate(bridalShoots[i]);
        $portfolioContainer.append($costumeThumbnail);
     }
 });

