(function()
{
    function indicatorUpdate()
    {
        /* Stubbed temporarily until I figure out Nimble's API */
    }
    window.indicatorUpdate = indicatorUpdate;
}());

$(function()
{
    $.ajaxSetup({cache: false });
    //indicatorUpdate();
    //setInterval(indicatorUpdate, 30000);
});