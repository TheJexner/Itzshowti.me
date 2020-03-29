(function()
{
    window.chatSelected = "html5";

    function chatSwitch()
    {
        window.chatSelected = $("input[name=chat]:checked").val();
        window.frames["content"].frames["chat"].location = "chat/" + chatSelected + ".html";
    }
    window.chatSwitch = chatSwitch;
    
    function chatPopout()
    {
        window.open("chat/" + chatSelected + ".html", "", "height=700,width=500");
    }
    window.chatPopout = chatPopout;
}());

$(function()
{
    $("input[value=" + window.chatSelected + "]").prop("checked", true);
    
    $("a[target=chat]").on("click", function()
    {
        window.chatSelected = $(this).attr("name");
        $("input[value=" + window.chatSelected + "]").prop("checked", true);
    });
});