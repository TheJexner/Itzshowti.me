$(function()
{
    $("input.copy").each(function()
    {
       $(this).attr("size", $(this).val().length); 
       $(this).attr("title", "Click to select");
    });
    
    $("input.copy").focus(function()
    {
        $(this).select();
    });
});