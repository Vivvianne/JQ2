jQuery(document).ready(function() {
    jQuery("h1").click(function() {
        alert("This is a header.");
    });
    jQuery("p").click(function(){
        alert("This is a paragraph.");
    });
    jQuery("img").click(function(){
        alert("This is an image.");
    });
});
$(document).ready(function(){
    $("p").click(function(){
        $("img").show();
    });
});
.bumble_bee-showing{
    display: none;

}
$ document.ready(function(){
    $("p").click(function(){
        $(.bumble_bee-showing).show();
        $(.bumble_bee-hidden).hide();
    });
});
$(document).ready(function(){
    $("p").click(function(){
        $(.bumble_bee-showing).toggle();
        &(.bumble_bee-hidden).toggle();
    });
});
