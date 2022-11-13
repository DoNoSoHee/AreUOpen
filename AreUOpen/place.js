export var positions = new Array();  // 지역을 담는 배열 ( 지역명/위도경도 )

positions.push(
    //{ "title": '제나키친', foodtype: "한식" , closeD: "Sat", openH:"11", openM:"00", closeH:"20", closeM:"00", breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"30", latlng: new naver.maps.LatLng(37.6034, 127.04169) },
    { "title":"조아버거",  foodtype: "햄버거", closeD: "Sun", openH:"11", openM:"00", closeH:"20", closeM:"00", break:false, latlng: new naver.maps.LatLng(37.6039015, 127.0408758) },
    { "title": '송송식탁', foodtype: "한식",  closeD: "Sun", openH:"11", openM:"00", closeH:"21", closeM:"00", break:true, breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00", latlng: new naver.maps.LatLng(37.6038977, 127.0427576) },
    { "title": '스시빈',  foodtype: "초밥/롤",closeD: "Sun", openH:"11", openM:"30", closeH:"22", closeM:"00", break:true, breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00", latlng: new naver.maps.LatLng(37.60385, 127.0433) },
    { "title": '백소정',   foodtype: "일식당",closeD:"null", openH:"11", openM:"00", break:true, breakOH:"15", breakOM:"00",  breakCH:"17", breakCM:"00" ,closeH:"21", closeM:"00" , latlng: new naver.maps.LatLng(37.6028850, 127.0412987)},
    { "title":"서브웨이",  foodtype: "샌드위치", closeD:"null", openH:"08", openM:"00", break:false ,closeH:"22", closeM:"00" ,latlng: new naver.maps.LatLng(37.60384, 127.04272) },
    { "title":"밥은화",  foodtype: "한식", closeD:"Sun", openH:"11", openM:"30", break:false, closeH:"20", closeM:"30" ,latlng: new naver.maps.LatLng(37.605748, 127.044525) },
    { "title":"연이네 과자점",  foodtype: "카페, 디저트", closeD:"Sat", openH:"11", openM:"00", break:false, closeH:"20", closeM:"00" ,latlng: new naver.maps.LatLng(37.603879, 127.041563) }
//    { "title": '핏짜피자',  foodtype: "피자",closeD: "null", openH:"11", openM:"00", breakOH:"15", breakOM:"30", breakCH:"17", breakCM:"00" ,closeH:"21", closeM:"30" , latlng: new naver.maps.LatLng(37.6037559, 127.0420138) },
//    { "title": '샐러디',   foodtype: "샐러드", closeD:"null", openH:"08", openM:"30", openH2:"10", openM2:"0", breakOH:"null", breakOM:"null", breakCH:"null" ,breakCM:"null" ,closeH:"21", closeM:"00", closeH2:"2", closeM:"00" , latlng: new naver.maps.LatLng(37.6041401,127.0428911) }

);

