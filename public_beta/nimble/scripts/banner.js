(function()
{
    var banners = [ { file: "error.png", creator: "Solar" } ];
    
    function getBannerList()
    {
        $.ajax({
            type: "GET",
            url: "banners/banner.json",
            dataType: "json",
            
            success: function(json)
            {
                console.log("Itz Showtime: Banner Ajax request successful");
                banners = json.banners;
                setRandomBanner();
            },
            
            error: function()
            {
                console.log("Itz Showtime: Banner Ajax request failed");
                setRandomBanner();
            }
        });
    }
    window.getBannerList = getBannerList;
    
    function setRandomBanner()
    {
        var banner = getRandomBanner();
        $("#banner").attr("src", "banners/" + banner.file);
    }
    window.setRandomBanner = setRandomBanner;
    
    function getRandomBanner()
    {
        var i = Math.floor(Math.random() * banners.length);
        return banners[i];
    }
}());

$(function()
{
    getBannerList();
});