var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PERIMETRO_1 = new ol.format.GeoJSON();
var features_PERIMETRO_1 = format_PERIMETRO_1.readFeatures(json_PERIMETRO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETRO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETRO_1.addFeatures(features_PERIMETRO_1);
var lyr_PERIMETRO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIMETRO_1, 
                style: style_PERIMETRO_1,
                popuplayertitle: 'PERIMETRO',
                interactive: false,
                title: '<img src="styles/legend/PERIMETRO_1.png" /> PERIMETRO'
            });
var format_MANZANAS_2 = new ol.format.GeoJSON();
var features_MANZANAS_2 = format_MANZANAS_2.readFeatures(json_MANZANAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANAS_2.addFeatures(features_MANZANAS_2);
var lyr_MANZANAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANZANAS_2, 
                style: style_MANZANAS_2,
                popuplayertitle: 'MANZANAS',
                interactive: false,
                title: '<img src="styles/legend/MANZANAS_2.png" /> MANZANAS'
            });
var format_LOTES_3 = new ol.format.GeoJSON();
var features_LOTES_3 = format_LOTES_3.readFeatures(json_LOTES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTES_3.addFeatures(features_LOTES_3);
var lyr_LOTES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTES_3, 
                style: style_LOTES_3,
                popuplayertitle: 'LOTES',
                interactive: true,
                title: '<img src="styles/legend/LOTES_3.png" /> LOTES'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PERIMETRO_1.setVisible(true);lyr_MANZANAS_2.setVisible(false);lyr_LOTES_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PERIMETRO_1,lyr_MANZANAS_2,lyr_LOTES_3];
lyr_PERIMETRO_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NOMBRE': 'NOMBRE', });
lyr_MANZANAS_2.set('fieldAliases', {'COD_MZ': 'COD_MZ', 'NOMBRE': 'NOMBRE', });
lyr_LOTES_3.set('fieldAliases', {'Nro_Lote': 'Nro_Lote', 'COD_MZ': 'COD_MZ', 'JOIN': 'JOIN', 'JOIN_GIS': 'JOIN_GIS', 'N°': 'N°', 'AAHH': 'AAHH', 'PARTIDA': 'PARTIDA', 'ET_SECT_GR': 'ET_SECT_GR', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'MANZANA': 'MANZANA', 'LOTE': 'LOTE', 'DESCRIPCIO': 'DESCRIPCIO', 'MAT_PREDOM': 'MAT_PREDOM', 'USO_SEGUN': 'USO_SEGUN', 'FCH_POSESI': 'FCH_POSESI', 'AP_PATERNO': 'AP_PATERNO', 'AP_MATERNO': 'AP_MATERNO', 'NOMBRES': 'NOMBRES', 'SEXO': 'SEXO', 'ESTADO_CIV': 'ESTADO_CIV', 'TIPO_DOC': 'TIPO_DOC', 'N°_DOC': 'N°_DOC', 'NACIONALID': 'NACIONALID', 'FCH_NAC': 'FCH_NAC', 'DEP_PROV_D': 'DEP_PROV_D', 'DOCUMENTOS': 'DOCUMENTOS', 'RESOL__ADJ': 'RESOL__ADJ', 'FCH_RESOL': 'FCH_RESOL', 'AÑOS_DE_A': 'AÑOS_DE_A', 'LEV__DE_CA': 'LEV__DE_CA', 'CORREO': 'CORREO', 'TELEFONO': 'TELEFONO', 'OBSERVACIO': 'OBSERVACIO', });
lyr_PERIMETRO_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_MANZANAS_2.set('fieldImages', {'COD_MZ': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_LOTES_3.set('fieldImages', {'Nro_Lote': 'TextEdit', 'COD_MZ': 'TextEdit', 'JOIN': 'TextEdit', 'JOIN_GIS': 'TextEdit', 'N°': 'TextEdit', 'AAHH': 'TextEdit', 'PARTIDA': 'TextEdit', 'ET_SECT_GR': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'MANZANA': 'TextEdit', 'LOTE': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'MAT_PREDOM': 'TextEdit', 'USO_SEGUN': 'TextEdit', 'FCH_POSESI': 'DateTime', 'AP_PATERNO': 'TextEdit', 'AP_MATERNO': 'TextEdit', 'NOMBRES': 'TextEdit', 'SEXO': 'TextEdit', 'ESTADO_CIV': 'TextEdit', 'TIPO_DOC': 'TextEdit', 'N°_DOC': 'TextEdit', 'NACIONALID': 'TextEdit', 'FCH_NAC': 'DateTime', 'DEP_PROV_D': 'TextEdit', 'DOCUMENTOS': 'TextEdit', 'RESOL__ADJ': 'TextEdit', 'FCH_RESOL': 'TextEdit', 'AÑOS_DE_A': 'TextEdit', 'LEV__DE_CA': 'TextEdit', 'CORREO': 'TextEdit', 'TELEFONO': 'TextEdit', 'OBSERVACIO': 'TextEdit', });
lyr_PERIMETRO_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NOMBRE': 'no label', });
lyr_MANZANAS_2.set('fieldLabels', {'COD_MZ': 'no label', 'NOMBRE': 'inline label - always visible', });
lyr_LOTES_3.set('fieldLabels', {'Nro_Lote': 'hidden field', 'COD_MZ': 'hidden field', 'JOIN': 'hidden field', 'JOIN_GIS': 'hidden field', 'N°': 'hidden field', 'AAHH': 'inline label - always visible', 'PARTIDA': 'inline label - always visible', 'ET_SECT_GR': 'inline label - always visible', 'DEPARTAMEN': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'DISTRITO': 'inline label - always visible', 'MANZANA': 'inline label - always visible', 'LOTE': 'inline label - always visible', 'DESCRIPCIO': 'inline label - always visible', 'MAT_PREDOM': 'inline label - always visible', 'USO_SEGUN': 'inline label - always visible', 'FCH_POSESI': 'inline label - always visible', 'AP_PATERNO': 'inline label - always visible', 'AP_MATERNO': 'inline label - always visible', 'NOMBRES': 'inline label - always visible', 'SEXO': 'inline label - always visible', 'ESTADO_CIV': 'inline label - always visible', 'TIPO_DOC': 'inline label - always visible', 'N°_DOC': 'inline label - always visible', 'NACIONALID': 'inline label - always visible', 'FCH_NAC': 'inline label - always visible', 'DEP_PROV_D': 'inline label - always visible', 'DOCUMENTOS': 'inline label - always visible', 'RESOL__ADJ': 'inline label - always visible', 'FCH_RESOL': 'inline label - always visible', 'AÑOS_DE_A': 'inline label - always visible', 'LEV__DE_CA': 'inline label - always visible', 'CORREO': 'inline label - always visible', 'TELEFONO': 'hidden field', 'OBSERVACIO': 'inline label - always visible', });
lyr_LOTES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});