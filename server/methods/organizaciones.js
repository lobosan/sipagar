Meteor.methods({
    initializeOrganizaciones: function () {
        Factory.define('organizacion', Organizaciones, {
            provincia: function () {
                return Fake.fromArray(['PICHINCHA', 'IMBABURA', 'LOJA']);
            },
            canton: function () {
                return Fake.fromArray(['QUITO', 'ALAUSÍ', 'ARCHIDONA']);
            },
            parroquia: function () {
                return Fake.fromArray(['ABDÓN CALDERÓN', 'ACHUPALLAS', 'ALAMOR, CABECERA CANTONAL']);
            },
            sectores: function () {
                return Fake.fromArray(['Cotocollao', 'La Independencia', 'Pedro de Jaramillo']);
            },
            nombreGrupo: function () {
                return Fake.fromArray(['Energía solidaria', 'Alternativas de desarrollo', 'La lucha de los pobres']);
            },
            representante: function () {
                return Fake.fromArray(['Juan Guillén', 'María Loor', 'Diego Pilataxi']);
            },
            correo: function () {
                return Fake.fromArray(['maria@hotmail.com', 'pedro@gmail.com', 'lucho@yahoo.com']);
            },
            telefonoFijo: function () {
                return Fake.fromArray(['02-568-9569', '04-236-5856', '06-221-4455']);
            },
            telefonoCelular: function () {
                return Fake.fromArray(['098-547-5221', '081-232-2332', '099-992-5466']);
            },
            personeriaJuridica: function () {
                return Fake.fromArray(['Si', 'No', 'En trámite']);
            },
            tiempoVidaGrupo: function () {
                return Fake.fromArray(['5 meses', '2 años', '6 meses y medio', '1 año y 2 meses', '7 años']);
            },
            numeroMiembros: function () {
                return _.random(1, 100);
            },
            diaPreferidoReuniones: function () {
                return Fake.fromArray(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Ninguno']);
            },
            conocimientosGenerales: function () {
                return _.random(1, 10);
            },
            decisionPolitica: function () {
                return _.random(1, 10);
            },
            disenioFinca: function () {
                return _.random(1, 10);
            },
            capacidadesTecnicas: function () {
                return _.random(1, 10);
            },
            capacidadTecnicaGrupo: function () {
                return _.random(1, 10);
            },
            capacidadOrganizacional: function () {
                return _.random(1, 10);
            },
            mecanismoApoyoInterno: function () {
                return _.random(1, 10);
            },
            promotores: function () {
                return _.random(1, 10);
            },
            manejoNormas: function () {
                return _.random(1, 10);
            },
            veedores: function () {
                return _.random(1, 10);
            },
            comiteEtica: function () {
                return _.random(1, 10);
            },
            createdAt: function () {
                return Fake.fromArray(['2015-01-05', '2015-01-26', '2015-02-11', '2015-03-16', '2015-04-08']);
            },
            createdBy: function () {
                return this.userId;
            }
        });

        _(100).times(function () {
            Factory.create('organizacion');
        });
    }
});