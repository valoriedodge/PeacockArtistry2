// 
//var animatePoints = function() {
// var revealPoint = function() {
//         $(this).css({
//             opacity: 1,
//             transform: 'scaleX(1) translateY(0)'
////             backgroundColor: 'white',
////             color: 'black'
//         });
// };
//    
// $.each($('.point'), revealPoint);
//};

var favorites = [["Becca", "Bridals", "bridals/becca-3.jpg"], ["Jamie", "Costume", "costume/Jamie-1.jpg"], ["Liz", "Fashion","fashion/Liz-1.jpg"], ["Nicole", "Fashion","fashion/Nicole-1.jpg"], ["Alice","Bridals","bridals/Alice-2.jpg"], ["Callie", "Dance","occasion/Callie-2.jpg"]]

var buildCollectionItemTemplate = function(imageArr){

    var template =
         '<div class="collection-album-container column third">'
        + '  <img alt ="cover" src=assets/images/' + imageArr[2]
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
//    if ($(window).height() > 950) {
//         animatePoints();
//     }
//    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
    $(window).scroll(function(event) {
        if($(window).scrollTop() >= 100){
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
//            if ($(window).scrollTop() >= scrollDistance) {
//             animatePoints(); 
//         }
     });
    var $portfolioContainer = $('.recent-shoots');
    $portfolioContainer.empty();
    for (var i = 0; i< 6; i++) {
        var $costumeThumbnail = buildCollectionItemTemplate(favorites[i]);
        $portfolioContainer.append($costumeThumbnail);
     }
 });

