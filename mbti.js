var i = 1;
//문제
var testNum = {
  1:{
    'title':'문제 1번',
    'description':'가고 싶은 떡볶이 집이 생겼을 때 나는?',
    'type':'EI',
    'A':'바로 일정 가능한 친구를 섭외한다.',
    'B':'일단 맛집 리스트에 올려둔다.'

  },
  2:{
    'title':'문제 2번',
    'description':'새로운 떡볶이집을 방문했을 때 나는?',
    'type':'EI',
    'A':'이거 먹을까? 같이 간 친구들과 신나서 얘기한다.',
    'B':'진지하게 처음부터 끝까지 메뉴판을 읽어본다'
  },
  3:{
    'title':'문제 3번',
    'description':'줄서서 먹은 맛집 떡볶이가 맛이 없을 때 나는?',
    'type':'EI',
    'A':'"이 집 별로다" 바로 친구들한테 공유해준다.',
    'B':'맛이 없는데도 왜 맛집으로 소문났는지 생각해본다.'
  },
  4:{
    'title':'문제 4번',
    'description':'주문한 떡볶이가 옆테이블보다 늦게 나올 때 나는?',
    'type':'SN',
    'A':'"뭐지..? 예약손님인가" 속으로 생각하고 기다려본다.',
    'B':'사장님~ 여기 옆테이블 보다 일찍 왔는데 왜 안나와요?'
  },
  5:{
    'title':'문제 5번',
    'description':'친구가 놀러와서 떡볶이를 끓여주기로 했다.',
    'type':'SN',
    'A':'맛집 레시피를 찾고 재료를 정량으로 준비해둔다.',
    'B':'새로운 재료를 넣어볼까?..'
  },
  6:{
    'title':'문제 6번',
    'description':'친구가 맛있는 떡볶이집을 추천해달라고 하면 나는?',
    'type':'SN',
    'A':'매운거 좋아해? 쌀떡/밀떡? 친구 취향에 맞는 맛집을 추천해준다. ',
    'B':'OOO! 바로 생각나는 떡볶이 맛집 하나를 추천해준다.'
  },
  7:{
    'title':'문제 7번',
    'description':'같이 떡볶이를 먹는 친구가 너무 매워한다.',
    'type':'TF',
    'A':'쿨피스 마셔! 단무지 좀 더 갖다줄까?',
    'B':'어떡해..괜찮아? 많이 매워?'
  },
  8:{
    'title':'문제 8번',
    'description':'자주 가던 단골집 떡볶이의 맛이 변했을때 나는?',
    'type':'TF',
    'A':'"오늘은 평소보다 덜 끓였군.."왜 맛이 달라졌는지 고민해본다.',
    'B':'다신 그 집 떡볶이를 먹지 않는다.'
  },
  9:{
    'title':'문제 9번',
    'description':'여러 명이 모였을 때, 누구는 크림 떡볶이를 누구는 매운 떡볶이를 먹고싶어한다.',
    'type':'TF',
    'A':'로제 떡볶이 먹자! 두 의견을 만족시킬 대안을 제시한다.',
    'B':'다수결로 고르자~'
  },
  10:{
    'title':'문제 10번',
    'description':'떡볶이 투어에서 가장 설레는 순간은?',
    'type':'JP',
    'A':'떡볶이 맛집 방문 전, 사전조사 할 때',
    'B':'맛있는 떡볶이를 처음 입에 넣은 그 순간!'
  },
  11:{
    'title':'문제 11번',
    'description':'떡볶이 맛집 투어 하루 전 날 나는?',
    'type':'JP',
    'A':'어떤 사이드 메뉴를 시킬지, 어떻게 먹어야 제일 맛있는지 조사한다.',
    'B':'너무 신나서 잠이 안 온다.'
  },
  12:{
    'title':'문제 12번',
    'description':'기껏 찾아간 맛집, 브레이크 타임에 걸려버렸을 때 나는?',
    'type':'JP',
    'A':'근처 카페에서 브레이크 타임이 끝나길 기다린다.',
    'B':'맛집의 옆집을 탐방해본다.'
  }
}

//결과
var result = {
  'INTJ': {'img':'<img src="http://imagescdn.gettyimagesbank.com/500/201811/a11221752.jpg" class="mt-5" style="width: 300px;">', 'mbti': 'INTJ', 'explain': '떡볶이의 새로운 비전 크림떡볶이'},
  'INTP': {'img':'<img src="https://www.yupdduk.com/images/menu/2020_hotmenuY01.png" class="mt-5" style="width: 300px;">','mbti': 'INTP', 'explain': '떡볶이계의 매콤한 비평가 동대문떡볶이'},
  'ENTJ': {'img':'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyA4fgWtu6FdiWZt36TzCwl1uoTpD3tpwDCYMnw7RVTfXEOFuxrLwi5SgqBo1iL9IUHws&usqp=CAU "class="mt-5" style="width: 300px;">','mbti': 'ENTJ', 'explain': '학교 앞 대장 분식집 떡볶이'},
  'ENTP': {'img':'<img src="https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/74709_1608102130_aqBw8y0I.png" class="mt-5" style="width: 300px;"">','mbti': 'ENTP', 'explain': '획기적인 발명가! 로제떡볶이'},
  'INFJ': {'img':'<img src="https://imagescdn.gettyimagesbank.com/500/201811/a11203592.jpg" style="width: 300px;">','mbti': 'INFJ', 'explain': '투명한듯 칼칼한 국물떡볶이'},
  'INFP': {'img':'<img src="https://recipe1.ezmember.co.kr/cache/recipe/2017/05/10/1b6d4020fc0c24370a624eddae427cdf1.jpg" class="mt-5"  style="width: 300px;">','mbti': 'INFP', 'explain': '맵지 않아도 괜찮아. 남녀노소 궁중떡볶이'},
  'ENFJ': {'img':'<img src="https://lh3.googleusercontent.com/proxy/W_vEyT8rCMiflHkrm1wB6u2AH1o9ZyOoj6ww6mfzIPn28x0UVo79W_GyYI64KcxaVkUsbXRUoSzjokSc4aVy78OKMQQMbulbZTCk3f5kxyeh2vXHHGM" class="mt-5" style="width: 300px;">','mbti': 'ENFJ', 'explain': '매끄러운 언변, 누들떡볶이'},
  'ENFP': {'img':'<img src="https://recipe1.ezmember.co.kr/cache/recipe/2018/03/04/ba55307500f38b5b93e75f479290cd711.jpg" class="mt-5" style="width: 300px;">','mbti': 'ENFP', 'explain': '떡볶이에 왜 떡이 꼭 있어야 돼? 라볶이'},
  'ISTJ': {'img':'<img src="https://www.yupdduk.com/images/menu/2020_hotmenuY01.png" class="mt-5" style="width: 300px;">','mbti': 'ISTJ', 'explain': '클래식한 떡볶이의 정석 기름떡볶이'},
  'ISFJ': {'img':'<img src="https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20210402033645688_photo_5ad86b50a6d2.jpg" class="mt-5" style="width: 300px;">','mbti': 'ISFJ', 'explain': '묵묵하고 꾸준한 가래떡 떡볶이'},
  'ESTJ': {'img':'<img src="https://lh3.googleusercontent.com/proxy/oGxEg6HCrME0s-B8w8r4jWhuPwLNxOE_Y2fg8h9ct4OykWk-7IxMJ1azGNdnGKQT34zwU03r0Fl7nZeKOc6EG0MvFetEGsyYObpo8s9uDYLHaA" class="mt-5" style="width: 300px;">','mbti': 'ESTJ', 'explain': '실용적인 프랜차이즈, 상어떡볶이'},
  'ESFJ': {'img':'<img src="https://cdn.crowdpic.net/list-thumb/thumb_l_E54128D72667B788B6899908E91CF139.jpg" class="mt-5" style="width: 300px;">','mbti': 'ESFJ', 'explain': '학교 끝나고 같이 놀래? 컵볶이'},
  'ISTP': {'img':'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3Ad7JxGVgODuhjuq4WBi7EG6GErdYGDi5Q&usqp=CAU" class="mt-5" style="width: 300px;">','mbti': 'ISTP', 'explain': '어디에나 잘 어울리는, 짜장떡볶이'},
  'ISFP': {'img':'<img src="https://t1.daumcdn.net/cfile/blog/2566044658A4FDA832" class="mt-5" style="width: 300px;">','mbti': 'ISFP', 'explain': '삼삼하지만 종종 생각나는, 홈메이드 떡볶이'},
  'ESTP': {'img':'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3Ad7JxGVgODuhjuq4WBi7EG6GErdYGDi5Q&usqp=CAU" class="mt-5" style="width: 300px;">','mbti': 'ESTP', 'explain': '떡볶이도 먹고 싶고 피카츄도 먹고 싶은 나는? 떡꼬치'},
  'ESFP': {'img':'<img src="https://imagescdn.gettyimagesbank.com/500/201709/jv11003662.jpg" class="mt-5" style="width: 300px;">','mbti': 'ESFP', 'explain': '우리는 모두 친구 즉석떡볶이'},
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
