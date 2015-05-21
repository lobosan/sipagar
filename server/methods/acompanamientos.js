Meteor.methods({

    initializeAcompanamientos: function (user_id, countAcompanamientos) {

        if (countAcompanamientos === 0) {
            Factory.define('acompanamiento', Acompanamientos, {
                acomProvincia: function () {
                    return Fake.fromArray(['Pichincha', 'Imbabura', 'Loja']);
                },
                acomCanton: function () {
                    return Fake.fromArray(['Quito', 'Alausí', 'Archidona']);
                },
                acomParroquia: function () {
                    return Fake.fromArray(['Abdón Calderón', 'Achupallas', 'Alamor, Cabecera Cantonal']);
                },
                acomSectores: function () {
                    return Fake.fromArray(['Cotocollao', 'La Independencia', 'Pedro de Jaramillo']);
                },
                acomNombreFinca: function () {
                    return Fake.fromArray(['Energía solidaria', 'Alternativas de desarrollo', 'La lucha de los pobres']);
                },
                acomResponsableProduccion: function () {
                    return Fake.fromArray(['Juan Guillén', 'María Loor', 'Diego Pilataxi']);
                },
                acomCorreo: function () {
                    return Fake.fromArray(['maria@hotmail.com', 'pedro@gmail.com', 'lucho@yahoo.com']);
                },
                acomTelefono: function () {
                    return Fake.fromArray(['025689569', '042365856', '062214455']);
                },
                /*** Indicadores para el entorno ***/
                entoForestalesNativos: function () {
                    return _.random(1, 10);
                },
                entoEspeciesFrutales: function () {
                    return _.random(1, 10);
                },
                entoCaminosAgua: function () {
                    return _.random(1, 10);
                },
                entoMateriaOrganica: function () {
                    return _.random(1, 10);
                },
                entoMateriaNoOrganica: function () {
                    return _.random(1, 10);
                },
                entoPoscosecha: function () {
                    return _.random(1, 10);
                },
                entoBodegasAlmacenes: function () {
                    return _.random(1, 10);
                },
                entoAguaHumedad: function () {
                    return _.random(1, 10);
                },
                entoAmenazasExternasContaminacion: function () {
                    return _.random(1, 10);
                },
                /*** Indicadores para el subsistema del suelo ***/
                sueloErosionActual: function () {
                    return _.random(1, 10);
                },
                sueloMecanizacionAgricola: function () {
                    return _.random(1, 10);
                },
                sueloMateriaOrganica: function () {
                    return _.random(1, 10);
                },
                sueloAbastecimientoMateriaOrganica: function () {
                    return _.random(1, 10);
                },
                sueloCobertura: function () {
                    return _.random(1, 10);
                },
                sueloSoltura: function () {
                    return _.random(1, 10);
                },
                sueloActividadBiologica: function () {
                    return _.random(1, 10);
                },
                sueloEstructura: function () {
                    return _.random(1, 10);
                },
                /*** Indicadores para el subsistema de agua y humedad ***/
                aguaCantidad: function () {
                    return _.random(1, 10);
                },
                aguaCalidadCultivos: function () {
                    return _.random(1, 10);
                },
                aguaCalidadSistemasReserva: function () {
                    return _.random(1, 10);
                },
                aguaHumedadSuelo: function () {
                    return _.random(1, 10);
                },
                /*** Indicadores para el subsistema de cultivos ***/
                cultRotacion: function () {
                    return _.random(1, 10);
                },
                cultAsociacion: function () {
                    return _.random(1, 10);
                },
                cultDiversidadVegetal: function () {
                    return _.random(1, 10);
                },
                cultDiversidadGenetica: function () {
                    return _.random(1, 10);
                },
                cultPresenciaFlores: function () {
                    return _.random(1, 10);
                },
                cultLibreQuimicos: function () {
                    return _.random(1, 10);
                },
                cultOrigenSemillas: function () {
                    return _.random(1, 10);
                },
                cultInsectosEnfermedades: function () {
                    return _.random(1, 10);
                },
                cultHierbasSilvestres: function () {
                    return _.random(1, 10);
                },
                cultAreasSilvestres: function () {
                    return _.random(1, 10);
                },
                /*** Indicadores para el subsistema forestal ***/
                forestFertilidadSuelo: function () {
                    return _.random(1, 10);
                },
                forestErosion: function () {
                    return _.random(1, 10);
                },
                forestDivisionesLotes: function () {
                    return _.random(1, 10);
                },
                forestCortinasRompevientos: function () {
                    return _.random(1, 10);
                },
                forestLuzSombraArboles: function () {
                    return _.random(1, 10);
                },
                forestDiversidadEspeciesArboreas: function () {
                    return _.random(1, 10);
                },
                forestNativas: function () {
                    return _.random(1, 10);
                },
                /*** Indicadores para el subsistema animal ***/
                animalDiversidad: function () {
                    return _.random(1, 10);
                },
                animalDiversidadGenetica: function () {
                    return _.random(1, 10);
                },
                animalInfraestructuraAdecuada: function () {
                    return _.random(1, 10);
                },
                animalAlimentoNecesario: function () {
                    return _.random(1, 10);
                },
                animalCalidadNutricionalAlimento: function () {
                    return _.random(1, 10);
                },
                animalSanidadAnimales: function () {
                    return _.random(1, 10);
                },
                animalLimpiezaInstalaciones: function () {
                    return _.random(1, 10);
                },
                animalManejoAnimales: function () {
                    return _.random(1, 10);
                },
                /*** Indicadores para instalaciones angares y bodegas ***/
                instalCondicion: function () {
                    return _.random(1, 10);
                },
                instalComodidad: function () {
                    return _.random(1, 10);
                },
                instalRiesgosContaminacion: function () {
                    return _.random(1, 10);
                },
                instalGuardadoHerramientas: function () {
                    return _.random(1, 10);
                },
                instalSenaletica: function () {
                    return _.random(1, 10);
                },
                instalDesechos: function () {
                    return _.random(1, 10);
                },
                createdBy: function () {
                    return user_id;
                }
            });

            _(50).times(function () {
                Factory.create('acompanamiento');
            });
            return true;
        } else {
            return false;
        }
    }
});