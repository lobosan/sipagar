Template.detailOrganizacion.events({
    'click .print': function () {
        var organizaciones = Session.get('detalleOrganizaciones');

        var columns = [{title: '', key: 'titulo'}];
        for (var c = 0; c < organizaciones[0].data.length; c++) {
            columns.push({
                'title': 'Ficha ' + organizaciones[0].data[c],
                'key' : 'organizacion' + c
            });
        }

        var data = [];
        for (var i = 1; i < organizaciones.length; i++) {
            var temp = {};
            temp['titulo'] = organizaciones[i].titulo;
            for (var j = 0; j < organizaciones[i].data.length; j++) {
                temp['organizacion' + j] = organizaciones[i].data[j];
            }
            data.push(temp);
            if (i == 13) data.push({'titulo': 'GRUPO'});
        }

        var doc = new jsPDF('l', 'pt', 'a4');

        var options = {
            renderHeader: function (doc, pageCount, options) {
                doc.setFontSize(12);
                doc.setTextColor(51, 51, 51);
                doc.text('Reporte de Fichas de Diagnóstico y Organización', options.margins.horizontal, 45);
                doc.setFontSize(options.fontSize);
            },
            renderHeaderCell: function (x, y, width, height, key, value, settings) {
                doc.setLineWidth(0.1);
                doc.setDrawColor(240);
                //doc.setFillColor(222, 222, 222);
                doc.setFillColor(245,245,245);
                doc.setTextColor(21, 21, 21);
                //doc.setFontStyle('bold');
                doc.rect(x, y, width, height, 'B');
                y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2;
                doc.text('' + value, x + settings.padding, y);
            },
            renderCell: function (x, y, width, height, key, value, row, settings) {
                doc.setLineWidth(0.1);
                doc.setDrawColor(240);
                // Colspan
                if (row === 13) {
                    if (value == 'GRUPO') {
                        doc.setFillColor(245,245,245);
                        doc.setTextColor(21, 21, 21);
                        doc.rect(x, y, doc.internal.pageSize.width - settings.margins.horizontal * 2, height, 'F');
                        y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2 - 2.5;
                        doc.text('INDICADORES DE LA ORGANIZACIÓN', x + settings.padding, y);
                    }
                } else {
                    doc.setTextColor(51, 51, 51);
                    doc.rect(x, y, width, height, 'S');
                    y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2 - 2.5;
                    doc.text('' + value, x + settings.padding, y);
                }
            },
            margins: {horizontal: 40, top: 60, bottom: 40}
        };
        doc.autoTable(columns, data, options);

        $('#reporteOrganizacion').each(function (index) {
            var imageData = $(this).highcharts().createCanvas();
            // imageData, type, x, y, width, height
            doc.addImage(imageData, 'JPEG', 240, 127, 500, 500);
        });

        doc.save('Organización.pdf');
    }
});