
// $(document).ready(function () {
//     var apikey = "8dac3336189cee50e7d7525baa71c91d";
//     $("#searchbtn").on("click", function (event) {
//         var searchValue = $("#seach-input").val();
//         $("#search-input").val("");
//         searchWeather(searchValue);
//     });

//     $(".history").on("click", "li", function () {
//         searchWeather($this.text());
//     });

//     function makeRow(text) {
//         var li = $("<li").addClass("list-group-item list-group-item-action").text(text);
//         $(".history").append(li);
//     };

// function searchWeather(searchValue) {
//     $.ajax({
//         type: "GET",
//         url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + apikey + "&units=imperial",
//         dataType: "json",

//         success: function (data) {
//             if (history.indexOf(searchValue) === -1) {
//                 history.push(searchValue);
//                 window.localStorage.setItem("history", JSON.stringify(history));
//                 makeRow(searchValue);
//             }
//             $("#currentweath").empty();

//             var title = $("<h2>").addClass("card-title").text(data.name + " (" + newDate().toLocalDateString() + ")");
//             var card = $("<div>").addClass("card");
//             var wind = $("<p>").addClass("card-text").text("Wind speed:" + data.wind.speed + "MPH");
//             var humidity = $("<p>").addClass("card-text").text("Humidity:" + data.wind.speed + "%");
//             var temperature = $("<p>").addClass("card-text").text("Temp:" + data.wind.speed + "F");
//             var cardBody = $("<div>").addClass("card-body");
//             var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

//             title.append(img);
//             cardBody.append(title, temp, humid, wind);
//             card.append(cardBody);
//             $("#currentWeath").append(card);

//             getForecast(searchValue);
//             getUVIndex(data.coord.lat, data.coord.lon);


//         }

//     });
// }

// function getForecast(searchValue) {
//     $.ajax({
//         type: "GET",
//         url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=" + apikey + "&units=imperial",
//         dataType: "json",

//         success: function (data) {
//             $("forecast").html('<h3 class="qt-3">5 Day Forecast:</h3>').append('<div class="row">');

//             for (var i = 0; i < datat.list.length; i++) {
//                 if (data.list[i].datatext.indexOf("12:00:00") !== -1) {
//                     var col = $("<div>").addClass("col-md-2");
//                     var card = $("<div>").addClass("card text-black");
//                     var body = $("<div>").addClass("card-body");
//                     var title = $("<h5>").addClass("card-title").text(new Date(data.list[i].datatext).toLocaleDateString());
//                     var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png");
//                     var p1 = $("<p>").addClass("card-text").text("Temp: " + data.list[i].main.temp_max + "F");
//                     var p2 = $("<p>").addClass("card-text").text("humidity: " + data.list[i].main.humidity + "%");

//                     col.append(card.append(body.append(title, img, p1, p2)));
//                     $("#forecast .row").append(col);
//                 }
//             }
//         },
//     });


// function getUVIndex(lat, lon) {
//     $.ajax({
//         type: "GET",
//         url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=" + apikey + "&units=imperial",
//         dataType: "json",

//         success: function (data) {
//             var uv = $("<p>").text("U.V. Index: ");
//             var btn = $("<span>").addClass("btn btn-sm").text(data.value);

if (data.value < 3) {
    btn.addClass("btn-success");
} else if (data.value < 7) {
    btn.addClass("btn-warning");
} else {
    btn.addClass("btnpdanger");
}

                //     $("#currentweath .card-body").append(uv.append(btn));
                // },

            });


var history = JSON.parse(window.localStorage.getItem("history")) || [];
if (history.length > 0) {
    searchWeather(history[history.length - 1]);
}

for (var i = 0; i < history.length; i++) {
    makeRow(history[i]);
}

        }

    }
});