ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([247040.173551, 6604141.906611, 511166.721971, 6773432.020175]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Uusimaa_1 = new ol.format.GeoJSON();
var features_Uusimaa_1 = format_Uusimaa_1.readFeatures(json_Uusimaa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Uusimaa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uusimaa_1.addFeatures(features_Uusimaa_1);
var lyr_Uusimaa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uusimaa_1, 
                style: style_Uusimaa_1,
                popuplayertitle: 'Uusimaa',
                interactive: false,
                title: '<img src="styles/legend/Uusimaa_1.png" /> Uusimaa'
            });
var format_Municipality_2 = new ol.format.GeoJSON();
var features_Municipality_2 = format_Municipality_2.readFeatures(json_Municipality_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Municipality_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipality_2.addFeatures(features_Municipality_2);
var lyr_Municipality_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipality_2, 
                style: style_Municipality_2,
                popuplayertitle: 'Municipality',
                interactive: true,
                title: '<img src="styles/legend/Municipality_2.png" /> Municipality'
            });
var format_Flyingsquirrel_3 = new ol.format.GeoJSON();
var features_Flyingsquirrel_3 = format_Flyingsquirrel_3.readFeatures(json_Flyingsquirrel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Flyingsquirrel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flyingsquirrel_3.addFeatures(features_Flyingsquirrel_3);
cluster_Flyingsquirrel_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Flyingsquirrel_3
});
var lyr_Flyingsquirrel_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Flyingsquirrel_3, 
                style: style_Flyingsquirrel_3,
                popuplayertitle: 'Flying squirrel',
                interactive: true,
                title: '<img src="styles/legend/Flyingsquirrel_3.png" /> Flying squirrel'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Uusimaa_1.setVisible(true);lyr_Municipality_2.setVisible(true);lyr_Flyingsquirrel_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Uusimaa_1,lyr_Municipality_2,lyr_Flyingsquirrel_3];
lyr_Uusimaa_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'id': 'id', 'maakunta': 'maakunta', 'vuosi': 'vuosi', 'nimi': 'nimi', 'namn': 'namn', });
lyr_Municipality_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'id': 'id', 'kunta': 'kunta', 'vuosi': 'vuosi', 'nimi': 'nimi', 'namn': 'namn', 'kuvaaja': 'kuvaaja', });
lyr_Flyingsquirrel_3.set('fieldAliases', {'fid': 'fid', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'team': 'team', 'year': 'year', });
lyr_Uusimaa_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'id': 'Range', 'maakunta': 'TextEdit', 'vuosi': 'Range', 'nimi': 'TextEdit', 'namn': 'TextEdit', });
lyr_Municipality_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'id': 'Range', 'kunta': 'TextEdit', 'vuosi': 'Range', 'nimi': 'TextEdit', 'namn': 'TextEdit', 'kuvaaja': 'ExternalResource', });
lyr_Flyingsquirrel_3.set('fieldImages', {'fid': '', 'taxonomic_order': '', 'formatted_taxon_name': '', 'abundance_verbatim': '', 'formatted_date_time': '', 'country': '', 'bio_province_interpreted': '', 'locality': '', 'collection_name': '', 'team': '', 'year': '', });
lyr_Uusimaa_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'id': 'no label', 'maakunta': 'no label', 'vuosi': 'no label', 'nimi': 'no label', 'namn': 'no label', });
lyr_Municipality_2.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'id': 'hidden field', 'kunta': 'hidden field', 'vuosi': 'hidden field', 'nimi': 'inline label - always visible', 'namn': 'inline label - always visible', 'kuvaaja': 'inline label - always visible', });
lyr_Flyingsquirrel_3.set('fieldLabels', {'fid': 'hidden field', 'taxonomic_order': 'hidden field', 'formatted_taxon_name': 'hidden field', 'abundance_verbatim': 'hidden field', 'formatted_date_time': 'hidden field', 'country': 'hidden field', 'bio_province_interpreted': 'hidden field', 'locality': 'inline label - always visible', 'collection_name': 'inline label - always visible', 'team': 'inline label - always visible', 'year': 'inline label - always visible', });
lyr_Flyingsquirrel_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});