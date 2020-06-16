const apiKey = "368ab75ab792aa4b3554cc613df27da1";

$("#searchbtn").on("click", function (event) {
    const citySearch = $("#seach-input").val();
    $("#search-input").val("");
    weather(citySearch);
});

$(".history").on("click", "li", function () {
    weather($this.text());
});

function newRow(text) {
    const li = $("<li").addClass("list-group-item list-group-item-action").text(text);
    $(".history").append(li);
};

function weather(citySearch) {
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apikey + "&units=imperial",
        dataType: "json",

        success: function (data) {
            if (history.indexOf(citySearch) === -1) {
                history.push(citySearch);
                window.localStorage.setItem("history", JSON.stringify(history));
                newRow(citySearch);
            }
            $("#currentweath").empty();

            const title = $("<h2>").addClass("card-title").text(data.name + " (" + newDate().toLocalDateString() + ")");
            const card = $("<div>").addClass("card");
            const wind = $("<p>").addClass("card-text").text("Wind speed:" + data.wind.speed + "MPH");
            const humidity = $("<p>").addClass("card-text").text("Humidity:" + data.wind.speed + "%");
            const temperature = $("<p>").addClass("card-text").text("Temp:" + data.wind.speed + "F");
            const cardBody = $("<div>").addClass("card-body");
            const img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

            title.append(img);
            cardBody.append(title, temperature, humidity, wind);
            card.append(cardBody);
            $("#currentWeath").append(card);

            forecast(citySearch);
            getUVIndex(data.coord.lat, data.coord.lon);


        }

    });
}

function forecast(citySearch) {
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + apikey + "&units=imperial",
        dataType: "json",

        success: function (data) {
            $("forecast").html('<h3 class="qt-3">5 Day Forecast:</h3>').append('<div class="row">');

            for (const i = 0; i < datat.list.length; i++) {
                if (data.list[i].datatext.indexOf("12:00:00") !== -1) {
                    const col = $("<div>").addClass("col-md-2");
                    const card = $("<div>").addClass("card text-black");
                    const body = $("<div>").addClass("card-body");
                    const title = $("<h5>").addClass("card-title").text(new Date(data.list[i].datatext).toLocaleDateString());
                    const img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png");
                    const p1 = $("<p>").addClass("card-text").text("Temp: " + data.list[i].main.temp_max + "F");
                    const p2 = $("<p>").addClass("card-text").text("humidity: " + data.list[i].main.humidity + "%");

                    col.append(card.append(body.append(title, img, p1, p2)));
                    $("#forecast .row").append(col);
                }
            }
        },
    });

};

function getUVIndex(lat, lon) {
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + apikey + "&units=imperial",
        dataType: "json",

        success: function (data) {
            const uv = $("<p>").text("U.V. Index: ");
            const btn = $("<span>").addClass("btn btn-sm").text(data.value);

            if (data.value < 3) {
                btn.addClass("btn-success");
            } else if (data.value < 7) {
                btn.addClass("btn-warning");
            } else {
                btn.addClass("btnpdanger");
            }

            $("#currentweath .card-body").append(uv.append(btn));
        },

    });
}


const history = JSON.parse(window.localStorage.getItem("history")) || [];
if (history.length > 0) {
    weather(history[history.length - 1]);
}

for (const i = 0; i < history.length; i++) {
    newRow(history[i]);
}
});