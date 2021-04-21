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
  'INTJ': {'img':'<img src="img/cream.png" id="img" class="mt-5" style="width: 300px;">', 'mbti': 'INTJ', 'explain': '떡볶이의 새로운 비전 크림떡볶이',
          'sub_explain': '일반적인 것과는 어울리지 않는 당신! 생각과 행동이 뭔가 특별한 사람입니다. 무언가 발명하고 새로운 것을 해보는 것을 좋아해요. 하지만, 고집스러움 때문에 호불호가 갈릴 수 있겠네요.'},
  'INTP': {'img':'<img src="img/hothot.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'INTP', 'explain': '떡볶이계의 매콤한 비평가 동대문떡볶이',
          'sub_explain': '평소에는 조용히 자기일에 집중하다가도 토론이나 논쟁을 할때면 매콤하게 쏘는 당신은 마치 매운 떡볶이를 닮았네요~. 다른 사람을 신경 쓰지 않고 독립적으로 행동하는 것을 좋아하지만 가끔은 소프트하게 다른 사람에게도 시선을 돌려보면 어떨까요?'},
  'ENTJ': {'img':'<img src="img/school.png" id="img"class="mt-5" style="width: 300px;">','mbti': 'ENTJ', 'explain': '행동대장 학교 앞 분식집 떡볶이',
          'sub_explain': '"우리 끝나고 떡볶이먹으러가자~" 학교다닐 때 친구들을 자주 이끌지 않았나요? 활동적이고 무리를 이끄는 힘이 있는 당신은 마치 학교 앞 분식집 떡볶이를 떠올리게 하네요. 호기심이 많고 나서는 것을 좋아해서 간혹 오해를 사기도 해요.'},
  'ENTP': {'img':'<img src="img/rose.png" id="img" class="mt-5" style="width: 300px;"">','mbti': 'ENTP', 'explain': '획기적인 발명가! 로제떡볶이',
          'sub_explain': '창의력이 풍부한 당신은 마치 새롭게 개발된 로제떡볶이를 떠올리게 하네요. 넘치는 창의력을 바탕으로 실행하는 힘이 있습니다. 하지만 때론 그 끝이 미약하게 끝나버리는 경우가 많겠네요.'},
  'INFJ': {'img':'<img src="img/soup.png" id="img" style="width: 300px;">','mbti': 'INFJ', 'explain': '투명한듯 칼칼한 국물떡볶이',
          'sub_explain': '당신의 투명해보이는 모습에 한 입 배어물었다가 매콤함에 깜짝 놀라는 사람들이 있지 않나요? 친절한 모습에 가까이 다가가면 왠지 톡 쏘는 모습을 보이는 당신. 사실은 늘 눈치보느라 피곤해있지는 않나요? 때론 마음껏 솔직해져도 괜찮아요.'},
  'INFP': {'img':'<img src="img/royal.png" id="img" class="mt-5"  style="width: 300px;">','mbti': 'INFP', 'explain': '맵지 않아도 괜찮아. 남녀노소 궁중떡볶이',
          'sub_explain': '배려심이 많고 감정이 풍부한 당신은 남녀노소 잘 맞는 궁중떡볶이를 떠오르게 합니다. 궁중떡볶이는 너무 삼삼해서 맛 없다고 하지 말아주세요! 상처를 쉽게 받아요.'},
  'ENFJ': {'img':'<img src="img/noodle.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'ENFJ', 'explain': '매끄러운 언변, 누들떡볶이',
          'sub_explain': '붙임성이 좋고 말을 잘하는 당신은 매끄럽게 넘어가는 누들 떢볶이를 떠오르게 합니다. 감수성이 풍부하여 종종 오그라든다는 이야기를 듣기도 하지만 그만큼 다른 사람들에게 진심입니다.'},
  'ENFP': {'img':'<img src="img/ramyun.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'ENFP', 'explain': '떡볶이에 왜 떡이 꼭 있어야 돼? 라볶이',
          'sub_explain': '예술을 좋아하는 당신은 개성이 강해요. 마치 떡이 없는 떡볶이, 라볶이를 떠오르게 합니다. 새로운 것을 하는 것을 좋아하고 또 새로운 사람과 잘 어울리기도해요. 하지만 곧 "역시 떡볶이는 떡이 있어야지..!"라고 생각하는 당신. 매사에 쉽게 질려하기도 하네요.'},
  'ISTJ': {'img':'<img src="img/oil.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'ISTJ', 'explain': '클래식한 떡볶이의 정석 기름떡볶이',
          'sub_explain': '"물에 빠진 것은 떡볶이가 아냐..!" 원리원칙을 준수하는 당신은 떡볶이의 정석! 기름 떡볶이를 닮았네요. 규칙은 꼬박꼬박 지키고 팩트를 중요시 하는 성격이에요. 피곤하게 산다는 이야기를 듣기도 하지만, 그만큼 책임감이 강하답니다.'},
  'ISFJ': {'img':'<img src="img/riceddeock.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'ISFJ', 'explain': '묵묵하고 꾸준한 가래떡 떡볶이',
          'sub_explain': '"밀떡은 떡으로 인정하지 않아..!" 성실하고 보수적인 당신. 주변과 잘 어울리기는 하지만, 그래도 자기 취향은 확고한 편이에요. 아기자기한 가래떡처럼 작지만 확실한 나만의 행복을 추구해요.'},
  'ESTJ': {'img':'<img src="img/jaws.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'ESTJ', 'explain': '실용적인 프랜차이즈, 상어떡볶이',
          'sub_explain': '똑부러지고 체계를 세우는 것을 좋아하는 당신! 효율적인 것을 좋아해서 마치 프랜차이즈 떢볶이를 떠오르게 합니다. 확실하고 정확한 것을 좋아하지만 종종 다른 사람들에게 공감능력을 키우라는 얘기를 듣기도해요.'},
  'ESFJ': {'img':'<img src="img/cup.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'ESFJ', 'explain': '학교 끝나고 같이 놀래? 컵볶이',
          'sub_explain': '따듯하게 한 컵 가득 정이 넘치는 컵볶이를 떠오르게 하는 당신. 상대방의 감정에 잘 맞춰주어서 당신 곁에 있으면 사람들은 편안함을 느껴요. 불편한 상황을 피하기위해 불만이 있어도 속에 차곡차곡 쌓아두는 타입이네요.'},
  'ISTP': {'img':'<img src="img/jjajang.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'ISTP', 'explain': '마이웨이, 짜장떡볶이',
          'sub_explain': '한가지 일에 몰두하는 당신은, 맛이 강한 짜장떡볶이를 생각나게 해요. 개인적인 일에 간섭 받기를 싫어하고 좁고 깊은 인간관계를 유지해요. 낯가림이 심하지만 한 번 친해지면 푹 빠지게 되는 성격이랍니다.'},
  'ISFP': {'img':'<img src="img/homemade.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'ISFP', 'explain': '삼삼하지만 종종 생각나는, 홈메이드 떡볶이',
          'sub_explain': '욕심이 없고 정이 많은 당신은 엄마가 만들어줬던 홈메이드 떡볶이를 떠오르게해요. 공감능력이 뛰어나고 칭찬을 잘해주지만, 갑자기 선을 그어서 사람들을 당혹시키기도 합니다.'},
  'ESTP': {'img':'<img src="img/stick.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'ESTP', 'explain': '떡볶이도 먹고 싶고 피카츄도 먹고 싶은 나는? 떡꼬치',
          'sub_explain': '선입견이 없고 갈등의 중재를 잘하는 당신은 친구들과 한줄 씩 나누어 먹던 떡꼬치를 떠오르게 합니다. 현재를 즐기며 열적적으로 살아가지만 때론 생각보다 앞서는 행동에 주변의 제재를 받기도 해요.'},
  'ESFP': {'img':'<img src="img/everything.png" id="img" class="mt-5" style="width: 300px;">','mbti': 'ESFP', 'explain': '우리는 모두 친구 즉석떡볶이',
          'sub_explain': '혼자 있기 보다는 여럿이 어울리는 걸 좋아하는 당신은 삼삼오오 모여서 먹는 즉석떡볶이를 떠오르게 합니다. 사교성이 좋아서 처음 보는 사람들과도 잘 어울려요. 메사에 낙천적인 성격 탓에 진심이 전달되지 않는 경우도 있네요.'},
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
    document.querySelector('#sub_explain').innerHTML = result[mbti]['sub_explain'];
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
