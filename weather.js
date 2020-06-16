const apiKey = "368ab75ab792aa4b3554cc613df27da1";

$("#searchbtn").on("click", function (event) {
    const citySearch = $("#seach-input").val();
    weather(citySearch);
});

let cities = localStorage.getItem("cities");
if (cities) {
    cities = JSON.parse(cities)
} else {
    cities = []
}

function weather(citySearch) {
    const currentAPI =
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    $.ajax({
        method: "GET",
        url: currentAPI,
    }).then(function (oneDay) {
        $(".city").html("<h1>" + oneDay.name + " Weather Details</h1>");
        $(".date").html("<h2>" + oneDay.date + " Date</h2>");
        $(".wind").text("Wind Speed: " + oneDay.wind.speed);
        $(".humidity").text("Humidity: " + oneDay.main.humidity);
        $(".lat").text("Latitude: " + oneDay.coord.lat);
        $(".lon").text("Longitude: " + oneDay.coord.lon);

        const tempInF = (oneDay.main.temp - 273.15) * 1.8 + 32;

        $(".temperature").text("Temperature (F) " + tempInF.toFixed(2));

        var lat = oneDay.coord.lat;
        var lon = oneDay.coord.lon;


