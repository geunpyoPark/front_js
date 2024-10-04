// 이름 : 여러분들의 성함
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 총점, 구하기
// if문을 사용해서 평균이 60점이면 합격, 60점 이하는 불합격 출력하기

// 최종문장
// 000님의 이번 총점은 00, 평균은 00점으로 (합격 또는 불합격)입니다.

const name = "박근표"
let korean = 80;
let math = 70;
let english = 90;
let science = 20;

let sum = korean + math + english + science;
let avg = sum / 4;

if(avg >= 60){
  console.log(`${name}님의 이번 총점은 ${sum}, 평균은 ${avg}으로 합격입니다`);
}
else{
  console.log(`${name}님의 이번 총점은 ${sum}, 평균은 ${avg}으로 불합격입니다`);
}

// ----------------------------------------------------------------------------------------------------------------
// 강사님 방식

// const name = "김세환";
// let korScore = 80;
// let mathScore = 70;
// let engScore = 90;
// let scScore = 20;

// let totalScore = korScore + mathScore + engScore + scScore;
// let average = totalScore / 4;

// let pass = "합격";
// let notPass = "불합격";
// let cutline = average >= 60;
// let passingResult = cutline ? pass : notPass;
// let result = `${name}님의 이번 총점은 ${totalScore}, 평균은 ${average}으로 ${passingResult}입니다.`

// if(cutline){
//   console.log(result);
// }else{
//   console.log(result);
// }
