let currentDiscoverSlider = 0,
    currentDecorSlider = 0,
    discoverSliderLength = $(".discover .slider img").length,
    decorSliderLength = $(".decor-discover .slider img").length,
    discoverNext = $(".discover-next"),
    decorNext = $(".decor-next");

/* slider part start */

function slideTo(order, slider) {
    if (slider == "discover") {
        $("#discover-slider").css({
            transform: `translateX(${(100 / discoverSliderLength) * order}%)`,
        });
        currentDiscoverSlider = order;
    } else if (slider == "decor") {
        $("#decor-slider").css({
            transform: `translateX(${(100 / decorSliderLength) * order}%)`,
        });
        currentDecorSlider = order;
    }
}

function slideDiscoverStep() {
    currentDiscoverSlider == discoverSliderLength - 1
        ? (currentDiscoverSlider = 0)
        : (currentDiscoverSlider += 1);
    slideTo(currentDiscoverSlider, "discover");
}

function slideDecorStep() {
    currentDecorSlider == decorSliderLength - 1
        ? (currentDecorSlider = 0)
        : (currentDecorSlider += 1);
    slideTo(currentDecorSlider, "decor");
}

/* slider part end */
