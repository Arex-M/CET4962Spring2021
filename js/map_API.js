window.onload = init;
function init(){
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([-73.98716574076468, 40.69643312773043]),
            zoom: 17.2
        })
    });

    const fillStyle = new ol.style.Fill({
        color:[202, 216, 224,1]
    })

    const strokeStyle =  new ol.style.Stroke({
        color: [87, 87, 87,1],
        width: 1.0
    })

    const circleStyle = new ol.style.Circle({
        fill: new ol.style.Fill({
            color:[245,46,6,1]
        }),
        radius: 4,
        stroke: strokeStyle
    })

    const Buildings = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './assets/map.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible: true,
        title: 'Buildings',
        style: new ol.style.Style({
            fill: fillStyle,
            stroke: strokeStyle,
            image: circleStyle
        })    
    })
    map.addLayer(Buildings);

    const overlayContainerElement = document.querySelector('.overlay-container');
    const overlayLayer = new ol.Overlay({
        element: overlayContainerElement
    })
    map.addOverlay(overlayLayer);
    const overlayFeatureName = document.getElementById('building');

    map.on('click',function(e){
        overlayLayer.setPosition(undefined);
        map.forEachFeatureAtPixel(e.pixel, function(properties, layer){
            let clickedName = properties.get('Building');
            let clickedCoord = e.coordinate;
            overlayLayer.setPosition(clickedCoord);
            overlayFeatureName.innerHTML = clickedName;
        })

    })
}