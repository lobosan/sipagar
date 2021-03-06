Meteor.methods({
    detailAcompanamientos: function (acompanamientoIds) {
        var acompanamientos = Acompanamientos.find({_id: {$in: acompanamientoIds}}, {fields: {'createdBy': 0}}).fetch();
        var indicadores = AcompanamientoIndicadores.find({}, {fields: {'titulo': 1}}).fetch();

        var indicadoresTitulos = ['Fecha de creación', 'Provincia', 'Cantón', 'Parroquia', 'Sector o comunidad', 
            'Responsable de la producción', 'Nombre de la finca', 'Correo electrónico',
            'Teléfono fijo', 'Área con riego (m²)', 'Área sin riego (m²)'
        ];
        _.each(indicadores, function (indicador) {
            indicadoresTitulos.push(indicador.titulo);
        });

        var data = [];
        for (var key in acompanamientos[0]) {
            var temp = [];
            for (var i = 0; i < acompanamientos.length; i++) {
                temp.push(acompanamientos[i][key]);
            }
            if (key !== '_id') data.push(temp);
            if (key == 'createdAt') data.unshift(temp);
        }
        data.pop();

        var detailAcompanamientos = [];
        for (var j = 0; j < indicadoresTitulos.length; j++) {
            detailAcompanamientos.push({
                'titulo': indicadoresTitulos[j],
                'data': data[j]
            });
        }

        return detailAcompanamientos;
    }
});
