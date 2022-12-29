let currentDiscoverSlider = 0,
    currentDecorSlider = 0,
    discoverSliderLength = $(".discover .slider img").length,
    decorSliderLength = $(".decor-discover .slider img").length,
    discoverNext = $(".discover-next"),
    decorNext = $(".decor-next");

/* slider part start */

function slideTo(order, slider, ar = false) {
    if (slider == "discover") {
        $("#discover-slider").css({
            transform: `translateX(${ar ? `-` : ``}${
                (100 / discoverSliderLength) * order
            }%)`,
        });
        currentDiscoverSlider = order;
    } else if (slider == "decor") {
        $("#decor-slider").css({
            transform: `translateX(${ar ? `-` : ``}${
                (100 / decorSliderLength) * order
            }%)`,
        });
        currentDecorSlider = order;
    }
}

function slideDiscoverStep(condition, ar = false) {
    if (condition == "increase") {
        currentDiscoverSlider == discoverSliderLength - 1
            ? (currentDiscoverSlider = 0)
            : (currentDiscoverSlider += 1);
        slideTo(currentDiscoverSlider, "discover", ar);
    } else {
        currentDiscoverSlider == 0
            ? (currentDiscoverSlider = discoverSliderLength - 1)
            : (currentDiscoverSlider -= 1);
        slideTo(currentDiscoverSlider, "discover", ar);
    }
}

function slideDecorStep(condition, ar = false) {
    if (condition == "increase") {
        currentDecorSlider == decorSliderLength - 1
            ? (currentDecorSlider = 0)
            : (currentDecorSlider += 1);
        slideTo(currentDecorSlider, "decor", ar);
    } else {
        currentDecorSlider == 0
            ? (currentDecorSlider = decorSliderLength - 1)
            : (currentDecorSlider -= 1);
        slideTo(currentDecorSlider, "decor", ar);
    }
}

/* slider part end */
