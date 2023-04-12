var wms_layers = [];

var format_habitat_dense_0 = new ol.format.GeoJSON();
var features_habitat_dense_0 = format_habitat_dense_0.readFeatures(json_habitat_dense_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_habitat_dense_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_habitat_dense_0.addFeatures(features_habitat_dense_0);
var lyr_habitat_dense_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_habitat_dense_0, 
                style: style_habitat_dense_0,
                interactive: true,
                title: '<img src="styles/legend/habitat_dense_0.png" /> habitat_dense'
            });
var format_les_ecoles_1 = new ol.format.GeoJSON();
var features_les_ecoles_1 = format_les_ecoles_1.readFeatures(json_les_ecoles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_les_ecoles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_les_ecoles_1.addFeatures(features_les_ecoles_1);
var lyr_les_ecoles_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_les_ecoles_1, 
                style: style_les_ecoles_1,
                interactive: true,
                title: '<img src="styles/legend/les_ecoles_1.png" /> les_ecoles'
            });
var format_zone_de_vegetation_2 = new ol.format.GeoJSON();
var features_zone_de_vegetation_2 = format_zone_de_vegetation_2.readFeatures(json_zone_de_vegetation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zone_de_vegetation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_de_vegetation_2.addFeatures(features_zone_de_vegetation_2);
var lyr_zone_de_vegetation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zone_de_vegetation_2, 
                style: style_zone_de_vegetation_2,
                interactive: true,
    title: 'zone_de_vegetation<br />\
    <img src="styles/legend/zone_de_vegetation_2_0.png" /> FORET_CLAIRE<br />\
    <img src="styles/legend/zone_de_vegetation_2_1.png" /> FORET_GALERIE<br />\
    <img src="styles/legend/zone_de_vegetation_2_2.png" /> PLANTATION_FORESTIERE<br />\
    <img src="styles/legend/zone_de_vegetation_2_3.png" /> SAVANE<br />\
    <img src="styles/legend/zone_de_vegetation_2_4.png" /> SAVANE_ARBOREE<br />'
        });
var format_ROUTE_ABOMEY_3 = new ol.format.GeoJSON();
var features_ROUTE_ABOMEY_3 = format_ROUTE_ABOMEY_3.readFeatures(json_ROUTE_ABOMEY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROUTE_ABOMEY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROUTE_ABOMEY_3.addFeatures(features_ROUTE_ABOMEY_3);
var lyr_ROUTE_ABOMEY_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROUTE_ABOMEY_3, 
                style: style_ROUTE_ABOMEY_3,
                interactive: true,
    title: 'ROUTE_ABOMEY<br />\
    <img src="styles/legend/ROUTE_ABOMEY_3_0.png" /> BITUME<br />\
    <img src="styles/legend/ROUTE_ABOMEY_3_1.png" /> NON_REVETU<br />\
    <img src="styles/legend/ROUTE_ABOMEY_3_2.png" /> PAVE<br />'
        });
var format_COURS_EAU_ABOMEY_4 = new ol.format.GeoJSON();
var features_COURS_EAU_ABOMEY_4 = format_COURS_EAU_ABOMEY_4.readFeatures(json_COURS_EAU_ABOMEY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COURS_EAU_ABOMEY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COURS_EAU_ABOMEY_4.addFeatures(features_COURS_EAU_ABOMEY_4);
var lyr_COURS_EAU_ABOMEY_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COURS_EAU_ABOMEY_4, 
                style: style_COURS_EAU_ABOMEY_4,
                interactive: true,
                title: '<img src="styles/legend/COURS_EAU_ABOMEY_4.png" /> COURS_EAU_ABOMEY'
            });
var format_LIM_DJIJA_5 = new ol.format.GeoJSON();
var features_LIM_DJIJA_5 = format_LIM_DJIJA_5.readFeatures(json_LIM_DJIJA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIM_DJIJA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIM_DJIJA_5.addFeatures(features_LIM_DJIJA_5);
var lyr_LIM_DJIJA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIM_DJIJA_5, 
                style: style_LIM_DJIJA_5,
                interactive: true,
                title: '<img src="styles/legend/LIM_DJIJA_5.png" /> LIM_DJIJA'
            });
var format_LIM_BOHICON_6 = new ol.format.GeoJSON();
var features_LIM_BOHICON_6 = format_LIM_BOHICON_6.readFeatures(json_LIM_BOHICON_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIM_BOHICON_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIM_BOHICON_6.addFeatures(features_LIM_BOHICON_6);
var lyr_LIM_BOHICON_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIM_BOHICON_6, 
                style: style_LIM_BOHICON_6,
                interactive: true,
                title: '<img src="styles/legend/LIM_BOHICON_6.png" /> LIM_BOHICON'
            });
var format_LIM_AGBANGNIZOUN_7 = new ol.format.GeoJSON();
var features_LIM_AGBANGNIZOUN_7 = format_LIM_AGBANGNIZOUN_7.readFeatures(json_LIM_AGBANGNIZOUN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIM_AGBANGNIZOUN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIM_AGBANGNIZOUN_7.addFeatures(features_LIM_AGBANGNIZOUN_7);
var lyr_LIM_AGBANGNIZOUN_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIM_AGBANGNIZOUN_7, 
                style: style_LIM_AGBANGNIZOUN_7,
                interactive: true,
                title: '<img src="styles/legend/LIM_AGBANGNIZOUN_7.png" /> LIM_AGBANGNIZOUN'
            });
var format_PISTE_ABOMEY_8 = new ol.format.GeoJSON();
var features_PISTE_ABOMEY_8 = format_PISTE_ABOMEY_8.readFeatures(json_PISTE_ABOMEY_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PISTE_ABOMEY_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PISTE_ABOMEY_8.addFeatures(features_PISTE_ABOMEY_8);
var lyr_PISTE_ABOMEY_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PISTE_ABOMEY_8, 
                style: style_PISTE_ABOMEY_8,
                interactive: true,
                title: '<img src="styles/legend/PISTE_ABOMEY_8.png" /> PISTE_ABOMEY'
            });
var format_LIM_ABOMEY_9 = new ol.format.GeoJSON();
var features_LIM_ABOMEY_9 = format_LIM_ABOMEY_9.readFeatures(json_LIM_ABOMEY_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIM_ABOMEY_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIM_ABOMEY_9.addFeatures(features_LIM_ABOMEY_9);
var lyr_LIM_ABOMEY_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIM_ABOMEY_9, 
                style: style_LIM_ABOMEY_9,
                interactive: true,
                title: '<img src="styles/legend/LIM_ABOMEY_9.png" /> LIM_ABOMEY'
            });

lyr_habitat_dense_0.setVisible(true);lyr_les_ecoles_1.setVisible(true);lyr_zone_de_vegetation_2.setVisible(true);lyr_ROUTE_ABOMEY_3.setVisible(true);lyr_COURS_EAU_ABOMEY_4.setVisible(true);lyr_LIM_DJIJA_5.setVisible(true);lyr_LIM_BOHICON_6.setVisible(true);lyr_LIM_AGBANGNIZOUN_7.setVisible(true);lyr_PISTE_ABOMEY_8.setVisible(true);lyr_LIM_ABOMEY_9.setVisible(true);
var layersList = [lyr_habitat_dense_0,lyr_les_ecoles_1,lyr_zone_de_vegetation_2,lyr_ROUTE_ABOMEY_3,lyr_COURS_EAU_ABOMEY_4,lyr_LIM_DJIJA_5,lyr_LIM_BOHICON_6,lyr_LIM_AGBANGNIZOUN_7,lyr_PISTE_ABOMEY_8,lyr_LIM_ABOMEY_9];
lyr_habitat_dense_0.set('fieldAliases', {'type': 'type', 'source': 'source', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_les_ecoles_1.set('fieldAliases', {'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'Arrondisse': 'Arrondisse', 'Quartier': 'Quartier', 'nom_ecol': 'nom_ecol', 'Coord(X)': 'Coord(X)', 'Coord(Y)': 'Coord(Y)', });
lyr_zone_de_vegetation_2.set('fieldAliases', {'type': 'type', 'source': 'source', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_ROUTE_ABOMEY_3.set('fieldAliases', {'NUM_ROUTE': 'NUM_ROUTE', 'TYPE': 'TYPE', 'CL_ADMIN': 'CL_ADMIN', 'REVETEMENT': 'REVETEMENT', 'PRATICAB': 'PRATICAB', 'CHAUSSEE_S': 'CHAUSSEE_S', 'VOIE_LOCAL': 'VOIE_LOCAL', 'FRANCHISST': 'FRANCHISST', 'SOURCE': 'SOURCE', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_COURS_EAU_ABOMEY_4.set('fieldAliases', {'ID': 'ID', 'TYPE': 'TYPE', 'NOM': 'NOM', 'BASSIN': 'BASSIN', });
lyr_LIM_DJIJA_5.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'DEPART': 'DEPART', });
lyr_LIM_BOHICON_6.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'DEPART': 'DEPART', });
lyr_LIM_AGBANGNIZOUN_7.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'DEPART': 'DEPART', });
lyr_PISTE_ABOMEY_8.set('fieldAliases', {'TYPE': 'TYPE', 'SOURCE': 'SOURCE', 'SHAPE_LENG': 'SHAPE_LENG', 'URBAIN': 'URBAIN', });
lyr_LIM_ABOMEY_9.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'DEPART': 'DEPART', });
lyr_habitat_dense_0.set('fieldImages', {'type': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_les_ecoles_1.set('fieldImages', {'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'Arrondisse': 'TextEdit', 'Quartier': 'TextEdit', 'nom_ecol': 'TextEdit', 'Coord(X)': 'TextEdit', 'Coord(Y)': 'TextEdit', });
lyr_zone_de_vegetation_2.set('fieldImages', {'type': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_ROUTE_ABOMEY_3.set('fieldImages', {'NUM_ROUTE': 'TextEdit', 'TYPE': 'TextEdit', 'CL_ADMIN': 'TextEdit', 'REVETEMENT': 'TextEdit', 'PRATICAB': 'TextEdit', 'CHAUSSEE_S': 'TextEdit', 'VOIE_LOCAL': 'TextEdit', 'FRANCHISST': 'TextEdit', 'SOURCE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', });
lyr_COURS_EAU_ABOMEY_4.set('fieldImages', {'ID': 'Range', 'TYPE': 'TextEdit', 'NOM': 'TextEdit', 'BASSIN': 'TextEdit', });
lyr_LIM_DJIJA_5.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'DEPART': 'TextEdit', });
lyr_LIM_BOHICON_6.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'DEPART': 'TextEdit', });
lyr_LIM_AGBANGNIZOUN_7.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'DEPART': 'TextEdit', });
lyr_PISTE_ABOMEY_8.set('fieldImages', {'TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'URBAIN': 'TextEdit', });
lyr_LIM_ABOMEY_9.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'DEPART': 'TextEdit', });
lyr_habitat_dense_0.set('fieldLabels', {'type': 'no label', 'source': 'no label', 'shape_leng': 'header label', 'shape_area': 'header label', });
lyr_les_ecoles_1.set('fieldLabels', {'DEPARTEMEN': 'header label', 'COMMUNE': 'header label', 'Arrondisse': 'header label', 'Quartier': 'header label', 'nom_ecol': 'header label', 'Coord(X)': 'header label', 'Coord(Y)': 'header label', });
lyr_zone_de_vegetation_2.set('fieldLabels', {'type': 'header label', 'source': 'header label', 'shape_leng': 'header label', 'shape_area': 'header label', });
lyr_ROUTE_ABOMEY_3.set('fieldLabels', {'NUM_ROUTE': 'header label', 'TYPE': 'header label', 'CL_ADMIN': 'header label', 'REVETEMENT': 'header label', 'PRATICAB': 'header label', 'CHAUSSEE_S': 'header label', 'VOIE_LOCAL': 'header label', 'FRANCHISST': 'header label', 'SOURCE': 'header label', 'SHAPE_LENG': 'header label', });
lyr_COURS_EAU_ABOMEY_4.set('fieldLabels', {'ID': 'header label', 'TYPE': 'header label', 'NOM': 'header label', 'BASSIN': 'header label', });
lyr_LIM_DJIJA_5.set('fieldLabels', {'ID': 'header label', 'NOM': 'header label', 'DEPART': 'header label', });
lyr_LIM_BOHICON_6.set('fieldLabels', {'ID': 'header label', 'NOM': 'header label', 'DEPART': 'header label', });
lyr_LIM_AGBANGNIZOUN_7.set('fieldLabels', {'ID': 'header label', 'NOM': 'header label', 'DEPART': 'header label', });
lyr_PISTE_ABOMEY_8.set('fieldLabels', {'TYPE': 'header label', 'SOURCE': 'header label', 'SHAPE_LENG': 'header label', 'URBAIN': 'header label', });
lyr_LIM_ABOMEY_9.set('fieldLabels', {'ID': 'header label', 'NOM': 'header label', 'DEPART': 'header label', });
lyr_LIM_ABOMEY_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});