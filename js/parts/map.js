
if (document.querySelector('.js-map')) {
    let center = [44.945104, 39.090389];
    console.log(document.querySelector('.js-map'));

    function init() {
      let mapElement = document.querySelector('.js-map');
      let map = new ymaps.Map(mapElement, {
        center: center,
        zoom: 15
      });

      let placeMark = new ymaps.Placemark([44.945104, 39.090389], {
        hintContent: 'Дубрава',
        balloonContentHeader: 'Дубрава',
        balloonContentFooter: 'Теучежский район, вдоль а/д «Южный объезд г. Краснодара» Км 2+500, Краснодар, Республика Адыгея, 385228'
      }, {
        iconLayout: 'default#image',
        iconImageHref: './img/map/balun.svg',
        iconImageSize: [56, 78],
        iconImageOffset: [-56, -78]
      });

      map.controls.remove('geolocationControl');
      map.controls.remove('searchControl');
      map.controls.remove('trafficControl');
      map.controls.remove('typeSelector');
      map.behaviors.disable(['scrollZoom']);

      map.geoObjects.add(placeMark);

      placeMark.events.add('mouseenter', function (e) {
        e.get('target').options.set('iconImageHref', './img/map/balun-hover.svg');
      });

      placeMark.events.add('mouseleave', function (e) {
        e.get('target').options.set('iconImageHref', './img/map/balun.svg');
      });
    }

    ymaps.ready(init);
  };
