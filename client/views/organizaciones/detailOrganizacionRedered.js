(function (H) {
    H.Chart.prototype.createCanvas = function (divId) {
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

Template.detailOrganizacion.onRendered(function () {
    var organizacionesData = Session.get('detalleOrganizaciones');

    var categories = [];
    for (var i = 14; i < organizacionesData.length; i++) {
        categories.push(organizacionesData[i].titulo);
    }

    var series = [];
    for (var j = 0; j < organizacionesData[0].data.length; j++) {
        var temp = {};
        temp['name'] = 'Ficha ' + organizacionesData[0].data[j];
        temp['pointPlacement'] = 'on';
        var data = [];
        for (var k = 14; k < organizacionesData.length; k++) {
            data.push(organizacionesData[k].data[j]);
        }
        temp['data'] = data;
        series.push(temp);
    }

    this.$('#reporteOrganizacion').highcharts({
        chart: {
            polar: true,
            type: 'line',
            height: '600'
        },
        pane: {
            size: '80%'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical',
            itemStyle: {
                'font-family': '"Roboto", sans-serif',
                'color': '#676a6c',
                'padding': '5px'
            }
        },
        series: series,
        credits: {
            enabled: false
        }
    });
});
