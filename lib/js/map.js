function mapHandler(company, address, zoom) {
	var map = new naver.maps.Map("map", {
	    center: new naver.maps.LatLng(37.3595316, 127.1052133),
	    zoom: zoom,
	    zoomControl: true,
	    zoomControlOptions: {
	        position: naver.maps.Position.TOP_RIGHT
	    },
	    mapTypeControl: true,
	    scrollWheel: false,
	});

	var infoWindow = new naver.maps.InfoWindow({
	    anchorSkew: true
	});

	map.setCursor('pointer');
	naver.maps.Service.geocode({
		address: address
	}, function(status, response) {
		if (status === naver.maps.Service.Status.ERROR) {
	        return alert('Something Wrong!');
	    }

	    var item = response.result.items[0];
	    addrType = item.isRoadAddress ? '[도로명 주소]' : '[지번 주소]';
		point = new naver.maps.Point(item.point.x, item.point.y);
		
		infoWindow.setContent([
			'<div style="min-width: 200px; text-align: center;">',
			'<h4 style="padding: 15px 0; font-size: 14px; font-weight: 500;">' + company + '</h4>',
			'</div>'
	    ].join('\n'));


	    map.setCenter(point);
	    infoWindow.open(map, point);
	});
}