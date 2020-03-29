(function()
{
    function pageCollapse()
    {
        $("#banner").css("display", "none");
        $("#icon").css("display", "none");
        $("#collapse").css("display", "none");
        $("#expand").css("display", "inline");
    }
    window.pageCollapse = pageCollapse;
    
    function pageExpand()
    {
        $("#banner").css("display", "");
        $("#icon").css("display", "");
        $("#collapse").css("display", "inline");
        $("#expand").css("display", "none");
    }
    window.pageExpand = pageExpand;
}());

$(function()
{
    $("#collapse").css("display", "inline");
});