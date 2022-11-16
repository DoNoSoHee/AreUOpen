var markers = new Array(); // 마커 정보를 담는 배열
var infoWindows = new Array(); // 정보창을 담는 배열

var marker_icon_ready_content = '<img src="./img/gray_icon.png" style="width:30px">';
var marker_icon_open_content = '<img src="./img/blue_icon.png" style="width:30px">';
var marker_icon_break_content = '<img src="./img/orange_icon.png" style="width:30px">';
var marker_icon_close_content = '<img src="./img/red_icon.png" style="width:30px">';
var marker_icon_selected_content = '<img src="./img/gray_icon.png" style="width:20px">';

var positions = new Array();  // 지역을 담는 배열 ( 지역명/위도경도 )

positions.push(
    //{ "title": '제나키친', foodtype: "한식" , closeD: "Sat", openH:"11", openM:"00", closeH:"20", closeM:"00", breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"30", latlng: new naver.maps.LatLng(37.6034, 127.04169) },
    { "title":"조아버거",  foodtype: "햄버거", closeD: "Sun", openH:"11", openM:"00", closeH:"20", closeM:"00", break:false, latlng: new naver.maps.LatLng(37.6039015, 127.0408758) },
    { "title": '송송식탁', foodtype: "한식",  closeD: "Sun", openH:"11", openM:"00", closeH:"21", closeM:"00", break:true, breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00", latlng: new naver.maps.LatLng(37.6038977, 127.0427576) },
    { "title": '스시빈',  foodtype: "일식",closeD: "Sun", openH:"11", openM:"30", closeH:"22", closeM:"00", break:true, breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00", latlng: new naver.maps.LatLng(37.60385, 127.0433) },
    { "title": '백소정',   foodtype: "일식",closeD:null, openH:"11", openM:"00", break:true, breakOH:"15", breakOM:"00",  breakCH:"17", breakCM:"00" ,closeH:"21", closeM:"00" , latlng: new naver.maps.LatLng(37.6028850, 127.0412987)},
    { "title":"서브웨이",  foodtype: "샌드위치", closeD:"null", openH:"08", openM:"00", break:false ,closeH:"22", closeM:"00" ,latlng: new naver.maps.LatLng(37.60384, 127.04272) },
    { "title":"밥은화",  foodtype: "한식", closeD:"Sun", openH:"11", openM:"30", break:false, closeH:"20", closeM:"30" ,latlng: new naver.maps.LatLng(37.605748, 127.044525) },
    { "title":"연이네 과자점",  foodtype: "카페, 디저트", closeD:"Sat", openH:"11", openM:"00", break:false, closeH:"20", closeM:"00" ,latlng: new naver.maps.LatLng(37.603879, 127.041563) },
    { "title":"돈가스명가",  foodtype: " 일식", closeD: " null", openH:" 11", openM:"00", closeH:"21 ", closeM:"00 ", break:false, latlng: new naver.maps.LatLng( 37.6052135, 127.0446544)},
    { "title":"신축산식당 ",  foodtype: " 육류", closeD: "Sun", openH:" 11", openM:"30", closeH:" 22", closeM:"00 ", break:false, latlng: new naver.maps.LatLng(37.6051346 ,127.0384570 )},
    { "title":"하이데어",  foodtype: " 샌드위치", closeD: " Sun", openH:"10 ", openM:"00", closeH:" 20", closeM:"00 ", break:false, latlng: new naver.maps.LatLng( 37.6048373, 127.0439574)},
    { "title":"바이트미",  foodtype: "샌드위치 ", closeD: "null", openH:" 10", openM:"00", closeH:" 22", closeM:"00 ", break:false, latlng: new naver.maps.LatLng( 37.6068837, 127.0461840)},
    { "title":"화덕과베토벤",  foodtype: " 피자", closeD: "nul", openH:"10 ", openM:"00", closeH:"22 ", closeM:" 00", break:false, latlng: new naver.maps.LatLng( 37.6057333, 127.0447981)},
    { "title":"DA피자",  foodtype: " 피자", closeD: "null", openH:"11 ", openM:"00", closeH:" 23", closeM:" 00", break:false, latlng: new naver.maps.LatLng(37.6053212 , 127.0416806)},
    { "title":"원조멸치국수 ",  foodtype: "한식 ", closeD: "null", openH:"00 ", openM:"00", closeH:"24 ", closeM:"00 ", break:false, latlng: new naver.maps.LatLng(37.6024144 ,127.0421996 )},
    { "title":"김만희떡볶이",  foodtype: "분식 ", closeD: "Sun", openH:"12 ", openM:"00", closeH:"22 ", closeM:"00 ", break:false, latlng: new naver.maps.LatLng( 37.6042639 ,127.0399216 )},
    { "title":"밥앤죽",  foodtype: " 한식", closeD: "Sat", openH:" 10", openM:"30", closeH:" 21", closeM:"00 ", break:false, latlng: new naver.maps.LatLng(37.6040962 , 127.0427116)},
    { "title":"오매떡",  foodtype: "분식", closeD: "Sat", openH:" 11", openM:"00", closeH:"23 ", closeM:" 00", break:false, latlng: new naver.maps.LatLng(37.6046034 , 127.0422940)},
    { "title":"아라부대찌개",  foodtype: " 한식", closeD: "null ", openH:"11 ", openM:"00", closeH:" 21", closeM:"00 ", break:false, latlng: new naver.maps.LatLng(37.6037559 ,37.6037559 )},
    { "title":"국수나무",  foodtype: " 한식", closeD: "Sun", openH:" 10", openM:"30", closeH:" 20", closeM:" 00", break:false, latlng: new naver.maps.LatLng(37.6037559 ,37.6037559 )},
    { "title":"유메노카츠",  foodtype: " 일식", closeD: "Sun", openH:"11 ", openM:"00", closeH:"21 ", closeM:" 00", break:false, latlng: new naver.maps.LatLng(37.6029312 ,127.0428020 )},
    { "title":"윤가네",  foodtype: " 한식", closeD: "null", openH:" 7", openM:"00", closeH:" 21", closeM:" 00", break:false, latlng: new naver.maps.LatLng(37.6051431 ,127.0417973 )},
    { "title":"사보르김밥",  foodtype: "분식 ", closeD: "null", openH:"5 ", openM:"00", closeH:"24 ", closeM:"00 ", break:false, latlng: new naver.maps.LatLng( 37.6037438,127.0428396 )},
    { "title":"고봉민김밥",  foodtype: " 분식", closeD: "null", openH:" 8", openM:"00", closeH:" 21", closeM:" 00", break:false, latlng: new naver.maps.LatLng( 127.0428396, 127.0415961)},
    { "title":"지지고",  foodtype: "한식", closeD: "Sun ", openH:" 10", openM:"00", closeH:" 19", closeM:" 50", break:false, latlng: new naver.maps.LatLng( 37.6043268,127.0425190 )},
    { "title":"공복식당",  foodtype: "육류", closeD: "Sun", openH:" 17", openM:"00", closeH:" 22", closeM:" 30", break:false, latlng: new naver.maps.LatLng(37.6060685 ,127.0448854 )},
    { "title":"청년고기장수",  foodtype: "육류 ", closeD: "Sun", openH:"12 ", openM:"00", closeH:"22 ", closeM:"00 ", break:false, latlng: new naver.maps.LatLng(37.6031973 ,37.6031973 )},
    { "title":"피클",  foodtype: " 양식", closeD: "Sat", openH:"11 ", openM:"00", closeH:" 21", closeM:" 00", break:false, latlng: new naver.maps.LatLng(37.6047844 , 127.0432505)},
    { "title":"88제육",  foodtype: "육류", closeD: "null", openH:" 10", openM:"00", closeH:" 22", closeM:" 00", break:false, latlng: new naver.maps.LatLng(37.6046034 ,127.0422940)},
    { "title":"홍곱창",  foodtype: " 육류", closeD: "Sun", openH:"15 ", openM:"00", closeH:" 1", closeM:"00 ", break:false, latlng: new naver.maps.LatLng(37.6039478,127.0392785 )},
    { "title":"스페셜리",  foodtype: " 양식", closeD: "Sun", openH:"11 ", openM:"00", closeH:"21 ", closeM:"00 ", break:false, latlng: new naver.maps.LatLng(37.6075901 ,37.6075901 )},
    { "title":"누들아한타이",  foodtype: "태국음식", closeD: "Sun", openH:"10", openM:"30", closeH:"21 ", closeM:"00 ", breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00", latlng: new naver.maps.LatLng(37.6038977,127.0427576)},
    { "title":"토라카츠",  foodtype: "돈가스", closeD: "Sun", openH:"11", openM:"30", closeH:"20", closeM:"30 ", breakOH:"14", breakOM:"30", breakCH:"17", breakCM:"30", latlng: new naver.maps.LatLng(37.6050394,127.0437699)},
    { "title":"토리돈까스",  foodtype: "돈가스", closeD: "Sun", openH:"11", openM:"30", closeH:"20", closeM:"00 ", breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00", latlng: new naver.maps.LatLng(37.6031973,127.0337784)},
    { "title":"춘리마라탕",  foodtype: "중식당", closeD: "Sun", openH:"11", openM:"30", closeH:"20", closeM:"00 ", breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00", latlng: new naver.maps.LatLng(37.6028943,127.0416767)},
    { "title":"착한짬뽕 더 착한 탕수육",  foodtype: "중식당", closeD: "Sun", openH:"11", openM:"30", closeH:"21", closeM:"00 ", breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00", latlng: new naver.maps.LatLng(37.6016044,127.0417699)},
    { "title":"미소야",  foodtype: "돈가스", closeD: "Sun", openH:"11", openM:"00", closeH:"21", closeM:"00 ", breakOH:"15", breakOM:"30", breakCH:"17", breakCM:"30", latlng: new naver.maps.LatLng(37.6032943,127.0421427)},
    { "title":"남매부대찌개",  foodtype: "피자", closeD:null, openH:"10", openM:"10", closeH:"21", closeM:"00 ", breakOH:"15", breakOM:"30", breakCH:"16", breakCM:"30", latlng: new naver.maps.LatLng(37.6036836,127.0418607)}
)

//현재 요일/시간/분 구하기
var today = new Date();
var day_idx = today.getDay();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now_day = days[day_idx];
var now_hour = today.getHours();
var now_min = today.getMinutes();
var selectedMarker = null;

//지도 생성
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = { 
        center: new naver.maps.LatLng(37.6034, 127.04169), // 지도의 중심좌표
        //level: 3 // 지도의 확대 레벨
        zoom : 17
    };
var map = new naver.maps.Map(mapContainer, mapOption);

for (var i = 0; i < positions.length; i++) {
    // 지역을 담은 배열의 길이만큼 for문으로 마커와 정보창을 채워주자 !
    var markerOptions = {
        map: map,
        title: positions[i].title, // 지역구 이름 
        position: positions[i].latlng, // 지역구의 위도 경도 넣기 
        icon: {
            content: returnContent(i, now_day, now_hour, now_min),
            size: new naver.maps.Size(22, 35),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(11, 35),
            scaledSize : new naver.maps.Size(22, 35)
        }
    };
    var marker = new naver.maps.Marker(markerOptions);
    
    /* 정보창 */
    var infoWindow = new naver.maps.InfoWindow({
        content: 
    '   <div style="width:200px;text-align:center;padding:10px;">'
    +'     <p style="color: #6F263D">  <strong>  ' + positions[i].title + '</strong></p>'
    +'      <p style="font-size:15px">'+positions[i].foodtype+'</p>'+
    +       positions[i].openH + ':'+ positions[i].openM + '~'+positions[i].closeH +":" +positions[i].closeM
    +'  </div>'
    }); // 클릭했을 때 띄워줄 정보 HTML 작성
    
    markers.push(marker); // 생성한 마커를 배열에 담는다.
    infoWindows.push(infoWindow); // 생성한 정보창을 배열에 담는다.
}	
// function showMarkers() {
//     setMarkers(map)
// }
function getClickHandler(seq) {
		
    return function(e) {  // 마커를 클릭하는 부분
        var marker = markers[seq], // 클릭한 마커의 시퀀스로 찾는다.
        infoWindow = infoWindows[seq]; // 클릭한 마커의 시퀀스로 찾는다
        
        if (infoWindow.getMap()) {
            infoWindow.close();
            // changeMarkerBack(marker);
        } else {
            infoWindow.open(map, marker); // 표출
            // changeMarkerSmall(marker);
        }
        
    }
}

for (var i=0; i<markers.length; i++) {
    naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i)); // 클릭한 마커 핸들러
}

//입력한 시간에 따른 마커 색 return 하는 함수
function returnContent(i, selectedD, selectedH, selectedM){
    var openH = parseInt(positions[i].openH);
    var openM = parseInt(positions[i].openM);
    var closeH = parseInt(positions[i].closeH);
    var closeM = parseInt(positions[i].closeM);
    var breakOH = parseInt(positions[i].breakOH);
    var breakOM = parseInt(positions[i].breakOM);
    var breakCH = parseInt(positions[i].breakCH);
    var breakCM = parseInt(positions[i].breakCM);
    if (selectedD == positions[i].closeD)
    //휴무일이랑 같으면
        return marker_icon_close_content;
    //휴무일 아닌 애들
    else if( selectedH < openH)
        //오픈시간보다 작으면
        return marker_icon_ready_content;
    else if( selectedH == openH && selectedM < openM )
        //오픈시간보다 같은데 오픈 분보다 작으면
        return marker_icon_ready_content;
    else if( selectedH > breakOH && selectedH < breakCH)
        //브레이크 시작보다 크고 브레이크 끝보다 작으면
       return marker_icon_break_content;
    else if( selectedH == breakOH && selectedM >= breakOM)
        //브레이크 시작이랑 같은데 분이 크면
        return marker_icon_break_content;
    else if( selectedH == breakCH && selectedM < breakCM)
        //브레이크 끝이랑 같은데 분이 작으면
        return marker_icon_break_content;
    else if( selectedH > closeH) 
        //끝나는 시간보다 크면
        return marker_icon_close_content;
    else if( selectedH == closeH && selectedM >= closeM)
        //끝나는 시간보다 작거나 같은데 끝나는 분보다 같거나 크면
        return marker_icon_close_content;
    else //다 아니면 보이게
       return marker_icon_open_content;
}


//입력한 시간에 따른 영업여부에 따라 마커 색 변경하기
function ChangeValue(){
    var day = document.getElementById('day');
    var hour = document.getElementById('hour');
    var min = document.getElementById('min');
    var D = day.options[day.selectedIndex].value;
    var H = parseInt(hour.options[hour.selectedIndex].value);
    var M = parseInt(min.options[min.selectedIndex].value);
    for(var i=0;i<positions.length;i++){
        markers[i].setIcon({
            content : returnContent(i, D, H, M),
            size: new naver.maps.Size(22, 35),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(11, 35),
            scaledSize : new naver.maps.Size(22, 35)
        })
        markers.push(markers[i]); //바뀐 마커 저장 
    }
    
}

 