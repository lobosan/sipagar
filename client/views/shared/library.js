(function (H) {
    H.Chart.prototype.createCanvas = function () {
        var svg = this.getSVG(),
            width = parseInt(svg.match(/width="([0-9]+)"/)[1]),
            height = parseInt(svg.match(/height="([0-9]+)"/)[1]),
            canvas = document.createElement('canvas');

        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);

        if (canvas.getContext && canvas.getContext('2d')) {
            canvg(canvas, svg);
            return canvas.toDataURL("image/jpeg");
        } else {
            alert("Your browser doesn't support this feature, please use a modern browser");
            return false;
        }
    }
}(Highcharts));

(function () {
    _.mixin({
        move: function (array, fromIndex, toIndex) {
            array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
            return array;
        }
    });
}());