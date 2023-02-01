var lengths = {
        discover: $("#discover .slider img").length,
        decor: $(".decor-discover .slider img").length,
        metal: $("#discover-metal .slider img").length,
    },
    currents = {
        discover: 0,
        decor: 0,
        metal: 0,
    };

function slideTo(slider, ar = false) {
    switch (slider) {
        case "discover":
            $("#discover-slider").css({
                transform: `translateX(${ar ? `-` : ``}${
                    (100 / lengths[slider]) * currents[slider]
                }%)`,
            });
            break;
        case "decor":
            $("#decor-slider").css({
                transform: `translateX(${ar ? `-` : ``}${
                    (100 / lengths[slider]) * currents[slider]
                }%)`,
            });
            break;
        case "metal":
            $("#discover-slider-metal").css({
                transform: `translateX(${ar ? `` : `-`}${
                    (100 / lengths[slider]) * currents[slider]
                }%)`,
            });
            break;
    }
}

function slideStep(slider, condition, ar = false) {
    if (condition == "increase") {
        currents[slider] == lengths[slider] - 1
            ? (currents[slider] = 0)
            : (currents[slider] += 1);
        slideTo(slider, ar);
    } else {
        currents[slider] == 0
            ? (currents[slider] = lengths[slider] - 1)
            : (currents[slider] -= 1);
        slideTo(slider, ar);
    }
}

/* slider part end */
