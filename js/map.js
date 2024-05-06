let map;

async function initMap() {
  const position = { lat: 52.2297, lng: 21.0122 };

  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  map = new Map(document.getElementById('map'), {
    zoom: 14,
    center: position,
    mapId: 'test',
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Salon',
  });
}

initMap();
