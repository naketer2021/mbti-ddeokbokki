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
    'title':'문제 1번',
    'description':'문제설명 문제설명 문제설명',
    'type':'SN',
    'A':'S',
    'B':'N'
  },
  5:{
    'title':'문제 1번',
    'description':'문제설명 문제설명 문제설명',
    'type':'SN',
    'A':'S',
    'B':'N'
  },
  6:{
    'title':'문제 1번',
    'description':'문제설명 문제설명 문제설명',
    'type':'SN',
    'A':'S',
    'B':'N'
  },
  7:{
    'title':'문제 1번',
    'description':'문제설명 문제설명 문제설명',
    'type':'TF',
    'A':'T',
    'B':'F'
  },
  8:{
    'title':'문제 1번',
    'description':'문제설명 문제설명 문제설명',
    'type':'TF',
    'A':'T',
    'B':'F'
  },
  9:{
    'title':'문제 1번',
    'description':'문제설명 문제설명 문제설명',
    'type':'TF',
    'A':'T',
    'B':'F'
  },
  10:{
    'title':'문제 1번',
    'description':'문제설명 문제설명 문제설명',
    'type':'JP',
    'A':'J',
    'B':'P'
  },
  11:{
    'title':'문제 1번',
    'description':'문제설명 문제설명 문제설명',
    'type':'JP',
    'A':'J',
    'B':'P'
  },
  12:{
    'title':'문제 1번',
    'description':'문제설명 문제설명 문제설명',
    'type':'JP',
    'A':'J',
    'B':'P'
  }
}

//결과
var result = {
  'INTJ': {'mbti': 'INTJ', 'explain': '용의주도한 전략가'},
  'INTP': {'mbti': 'INTP', 'explain': '논리적인 사색가'},
  'ENTJ': {'mbti': 'ENTJ', 'explain': '대담한 통솔자'},
  'ENTP': {'mbti': 'ENTP', 'explain': '뜨거운 논쟁을 즐기는 변론가'},
  'INFJ': {'mbti': 'INFJ', 'explain': '선의의 옹호자'},
  'INFP': {'mbti': 'INFP', 'explain': '열정적인 중재자'},
  'ENFJ': {'mbti': 'ENFJ', 'explain': '정의로운 사회운동가'},
  'ENFP': {'mbti': 'ENFP', 'explain': '재기발랄한 활동가'},
  'ISTJ': {'mbti': 'ISTJ', 'explain': '청렴결백한 논리주의자'},
  'ISFJ': {'mbti': 'ISFJ', 'explain': '용감한 수호자'},
  'ESTJ': {'mbti': 'ESTJ', 'explain': '엄격한 관리자'},
  'ESFJ': {'mbti': 'ESFJ', 'explain': '사교적인 외교관'},
  'ISTP': {'mbti': 'ISTP', 'explain': '만능 재주꾼'},
  'ISFP': {'mbti': 'ISFP', 'explain': '호기심 많은 예술가'},
  'ESTP': {'mbti': 'ESTP', 'explain': '모험을 즐기는 사업가'},
  'ESFP': {'mbti': 'ESFP', 'explain': '자유로운 영혼의 연예인'},
  'INTJ': {'mbti': 'INTJ', 'explain': '용의주도한 전략가'}
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
