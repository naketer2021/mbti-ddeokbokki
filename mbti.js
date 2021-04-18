var i = 1;
//문제
var testNum = {
  1:{
    'title':'문제 1번',
    'description':'문제설명 문제설명 문제설명',
    'type':'EI',
    'A':'E',
    'B':'I'
  },
  2:{
    'title':'문제 2번',
    'description':'문제설명 문제설명 문제설명',
    'type':'EI',
    'A':'E',
    'B':'I'
  },
  3:{
    'title':'문제 3번',
    'description':'문제설명 문제설명 문제설명',
    'type':'EI',
    'A':'E',
    'B':'I'
  },
  4:{
    'title':'문제 4번',
    'description':'문제설명 문제설명 문제설명',
    'type':'SN',
    'A':'S',
    'B':'N'
  },
  5:{
    'title':'문제 5번',
    'description':'문제설명 문제설명 문제설명',
    'type':'SN',
    'A':'S',
    'B':'N'
  },
  6:{
    'title':'문제 6번',
    'description':'문제설명 문제설명 문제설명',
    'type':'SN',
    'A':'S',
    'B':'N'
  },
  7:{
    'title':'문제 7번',
    'description':'문제설명 문제설명 문제설명',
    'type':'TF',
    'A':'T',
    'B':'F'
  },
  8:{
    'title':'문제 8번',
    'description':'문제설명 문제설명 문제설명',
    'type':'TF',
    'A':'T',
    'B':'F'
  },
  9:{
    'title':'문제 9번',
    'description':'문제설명 문제설명 문제설명',
    'type':'TF',
    'A':'T',
    'B':'F'
  },
  10:{
    'title':'문제 10번',
    'description':'문제설명 문제설명 문제설명',
    'type':'JP',
    'A':'J',
    'B':'P'
  },
  11:{
    'title':'문제 11번',
    'description':'문제설명 문제설명 문제설명',
    'type':'JP',
    'A':'J',
    'B':'P'
  },
  12:{
    'title':'문제 12번',
    'description':'문제설명 문제설명 문제설명',
    'type':'JP',
    'A':'J',
    'B':'P'
  }
}

//결과
var result = {
  'INTJ': {'img':'<img src="http://imagescdn.gettyimagesbank.com/500/201811/a11221752.jpg">', 'mbti': 'INTJ', 'explain': '떡볶이의 새로운 비전 크림떡볶이'},
  'INTP': {'img':'<img src="https://www.yupdduk.com/images/menu/2020_hotmenuY01.png">','mbti': 'INTP', 'explain': '떡볶이계의 매콤한 비평가 동대문떡볶이'},
  'ENTJ': {'img':'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyA4fgWtu6FdiWZt36TzCwl1uoTpD3tpwDCYMnw7RVTfXEOFuxrLwi5SgqBo1iL9IUHws&usqp=CAU">','mbti': 'ENTJ', 'explain': '학교 앞 대장 분식집 떡볶이'},
  'ENTP': {'img':'<img src="https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/74709_1608102130_aqBw8y0I.png">','mbti': 'ENTP', 'explain': '획기적인 발명! 로제떡볶이'},
  'INFJ': {'img':'<img src="https://imagescdn.gettyimagesbank.com/500/201811/a11203592.jpg">','mbti': 'INFJ', 'explain': '투명한듯 칼칼한 국물떡볶이'},
  'INFP': {'img':'<img src="https://recipe1.ezmember.co.kr/cache/recipe/2017/05/10/1b6d4020fc0c24370a624eddae427cdf1.jpg">','mbti': 'INFP', 'explain': '맵지 않아도 괜찮아. 남녀노소 궁중떡볶이'},
  'ENFJ': {'img':'<img src="https://lh3.googleusercontent.com/proxy/W_vEyT8rCMiflHkrm1wB6u2AH1o9ZyOoj6ww6mfzIPn28x0UVo79W_GyYI64KcxaVkUsbXRUoSzjokSc4aVy78OKMQQMbulbZTCk3f5kxyeh2vXHHGM">','mbti': 'ENFJ', 'explain': '매끄러운 언변, 누들떡볶이'},
  'ENFP': {'img':'<img src="https://recipe1.ezmember.co.kr/cache/recipe/2018/03/04/ba55307500f38b5b93e75f479290cd711.jpg">','mbti': 'ENFP', 'explain': '떡볶이에 왜 떡이 꼭 있어야 돼? 라볶이'},
  'ISTJ': {'img':'<img src="https://www.yupdduk.com/images/menu/2020_hotmenuY01.png">','mbti': 'ISTJ', 'explain': '클래식한 떡볶이의 정석 기름떡볶이'},
  'ISFJ': {'img':'<img src="https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20210402033645688_photo_5ad86b50a6d2.jpg">','mbti': 'ISFJ', 'explain': '묵묵하고 꾸준한 가래떡 떡볶이'},
  'ESTJ': {'img':'<img src="https://lh3.googleusercontent.com/proxy/oGxEg6HCrME0s-B8w8r4jWhuPwLNxOE_Y2fg8h9ct4OykWk-7IxMJ1azGNdnGKQT34zwU03r0Fl7nZeKOc6EG0MvFetEGsyYObpo8s9uDYLHaA">','mbti': 'ESTJ', 'explain': '실용적인 프랜차이즈, 상어떡볶이'},
  'ESFJ': {'img':'<img src="https://cdn.crowdpic.net/list-thumb/thumb_l_E54128D72667B788B6899908E91CF139.jpg">','mbti': 'ESFJ', 'explain': '학교 끝나고 같이 놀래? 컵볶이'},
  'ISTP': {'img':'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3Ad7JxGVgODuhjuq4WBi7EG6GErdYGDi5Q&usqp=CAU">','mbti': 'ISTP', 'explain': '어디에나 잘 어울리는, 짜장떡볶이'},
  'ISFP': {'img':'<img src="https://t1.daumcdn.net/cfile/blog/2566044658A4FDA832">','mbti': 'ISFP', 'explain': '갑자기 친구가 놀러왔을때, 엄마표 떡볶이'},
  'ESTP': {'img':'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3Ad7JxGVgODuhjuq4WBi7EG6GErdYGDi5Q&usqp=CAU">','mbti': 'ESTP', 'explain': '떡볶이도 먹고 싶고 피카츄도 먹고 싶은 나는? 떡꼬치'},
  'ESFP': {'img':'<img src="https://imagescdn.gettyimagesbank.com/500/201709/jv11003662.jpg">','mbti': 'ESFP', 'explain': '우리는 모두 친구 즉석떡볶이'},
};

//테스트시작
function start(){
  document.querySelector('#start').style.display="none";
  document.querySelector('#test').style.display="block";
  next();
}

function retry(){
  document.querySelector('#result').style.display="none";
  document.querySelector('#test').style.display="block";
  i = 1;
  EI.value=SN.value=TF.value=JP.value=0;
  next();
}

document.querySelector('#start-btn').addEventListener('click',start);
document.querySelector('#retry').addEventListener('click',retry);

document.querySelector('#A').addEventListener('click',function(){
  var type = document.querySelector('#type').value;
  var preValue = document.querySelector('#'+type).value;
  document.querySelector('#'+type).value = preValue+1;
  next();
});

document.querySelector('#B').addEventListener('click',function(){
  next();
});


function next(){
  if(i==13){
    document.querySelector('#test').style.display="none";
    document.querySelector('#result').style.display="block";
    var mbti='';
    (document.querySelector('#EI').value<2)? mbti+='I': mbti +='E';
    (document.querySelector('#SN').value<2)? mbti+='N': mbti +='S';
    (document.querySelector('#TF').value<2)? mbti+='F': mbti +='T';
    (document.querySelector('#JP').value<2)? mbti+='P': mbti +='J';
    console.log(mbti);
    document.querySelector('#result_img').innerHTML = result[mbti]['img'];
    document.querySelector('#mymbti').innerHTML = result[mbti]['mbti'];
    document.querySelector('#explain').innerHTML = result[mbti]['explain'];
  } else {
    document.querySelector('#number').innerHTML = i+'/12';
    document.querySelector('#prg-bar').style.width= (i/12)*100+'%';
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#description').innerHTML = testNum[i]['description'];
    document.querySelector('#type').value = testNum[i]['type'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML = testNum[i]['B'];
    i++;
  }
}
