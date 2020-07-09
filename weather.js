const apiKey = "368ab75ab792aa4b3554cc613df27da1";
let citySearch = [];

$("#button").on("click", function () {
    const citySearch = $("#searchButton").val();
    console.log("help");
    console.log(citySearch);
    weather(citySearch);
    // function (fiveDays);

});

let cities = localStorage.getItem("cities");
if (cities) {
    cities = JSON.parse(cities)
} else {
    cities = []
}

function weather(citySearch) {
    const currentAPI =
        `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;
    $.ajax({
        method: "GET",
        url: currentAPI,
        dataType: "json",
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



        // if (responseUVIndex.value > 0 && responseUVIndex.value <= 4) {
        //     $(".uvIndex").attr("class", "uvIndex bg-success pl-3");
        // } else if (responseUVIndex.value > 4 && responseUVIndex.value <= 8) {
        //     $(".uvIndex").attr("class", "uvIndex bg-warning pl-3");
        // } else if (responseUVIndex.value > 8) {
        //     $(".uvIndex").attr("class", "uvIndex bg-danger pl-3");
        // }


        console.log("2)");
        const apiFive =
            `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&appid=${apiKey}&units=imperial`;

        $.ajax({
            url: apiFive,
            method: "GET",
            dataType: "json",
        }).then(function (fiveDays) {
            console.log("5 dslsdkl");
            var dayOne = $("<div>");
            var dayTwo = $("<div>");
            var dayThree = $("<div>");
            var dayFour = $("<div>");
            var dayFive = $("<div>");

            dayOne.attr("class", "d-inline-block bg-primary p-3 text-black");
            dayTwo.attr("class", "d-inline-block bg-primary p-3 text-black");
            dayThree.attr("class", "d-inline-block bg-primary p-3 text-black");
            dayFour.attr("class", "d-inline-block bg-primary p-3 text-black");
            dayFive.attr("class", "d-inline-block bg-primary p-3 text-black");

            var dayOneDiv = $("<div>");
            var dayTwoDiv = $("<div>");
            var dayThreeDiv = $("<div>");
            var dayFourDiv = $("<div>");
            var dayFiveDiv = $("<div>");

            dayOneDiv.text(
                "Day 1 " + fiveDays.list[4].weather[0].icon
            );
            dayTwoDiv.text(
                "Day 2 " + fiveDays.list[12].weather[0].icon
            );
            dayThreeDiv.text(
                "Day 3 " + fiveDays.list[20].weather[0].icon
            );
            dayFourDiv.text(
                "Day 4 " + fiveDays.list[28].weather[0].icon
            );
            dayFiveDiv.text(
                "Day 5 " + fiveDays.list[36].weather[0].icon
            );

            var dayOnetemp = $("<div>");
            var dayTwotemp = $("<div>");
            var dayThreetemp = $("<div>");
            var dayFourtemp = $("<div>");
            var dayFivetemp = $("<div>");

            dayOnetemp.text("Day 1: " + fiveDays.list[4].main.temp);
            dayTwotemp.text("Day 2: " + fiveDays.list[12].main.temp);
            dayThreetemp.text("Day 3: " + fiveDays.list[20].main.temp);
            dayFourtemp.text("Day 4: " + fiveDays.list[28].main.temp);
            dayFivetemp.text("Day 5: " + fiveDays.list[36].main.temp);

            var dayOnehumidity = $("<div>");
            var dayTwohumidity = $("<div>");
            var dayThreehumidity = $("<div>");
            var dayFourhumidity = $("<div>");
            var dayFivehumidity = $("<div>");

            dayOnehumidity.text(
                "Day 1 " + fiveDays.list[4].main.humidity
            );
            dayTwohumidity.text(
                "Day 2 " + fiveDays.list[12].main.humidity
            );
            dayThreehumidity.text(
                "Day 3 " + fiveDays.list[20].main.humidity
            );
            dayFourhumidity.text(
                "Day 4 " + fiveDays.list[28].main.humidity
            );
            dayFivehumidity.text(
                "Day 5 " + fiveDays.list[36].main.humidity
            );

            $("#fiveDayForecast").empty();

            // Append children
            $("#fiveDayForecast").append(dayOne, dayTwo, dayThree, dayFour, dayFive);
            // parent.append(nameOfChildHere);
            dayOne.append(dayOneDiv, dayOnetemp, dayOnehumidity);
            dayTwo.append(dayTwoDiv, dayTwotemp, dayTwohumidity);
            dayThree.append(dayThreeDiv, dayThreetemp, dayThreehumidity);
            dayFour.append(dayFourDiv, dayFourtemp, dayFourhumidity);
            dayFive.append(dayFiveDiv, dayFivetemp, dayFivehumidity);


        }, function (err) { console.log(err); }
        );

    }, function (err) { console.log(err); });
};

// local storage goes here
// $(".weatherDashboard").show();

// // if (citylist.includes(cityName)) {
// //     return citylist;
// // }


// citylist.push(cityName)
// localStorage.setItem("cities", JSON.stringify(citylist));
// const navItemOuterEl = $("<li class='nav-item'>");
// navItemOuterEl.appendTo("#citylist");


// $(
//     '<a class="nav-link active list-group-item bg-black text-dark border-light text-center" href="#">' +
//     cityName +
//     "</a>"
// )
//     .css("textTransform", "capitalize")
//     .appendTo(navItemOuterEl);
