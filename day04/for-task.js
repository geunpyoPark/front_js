// 1부터 100까지 출력
// 1부터 100까지 짝수만 출력
// 1부터 100까지 홀수만 출력
// 0~10까지 5만 빼고 출력
// 1~10까지 모든 합 출력
//1~n까지 합의 출력
// 012340123401234 출력

// 1부터 100까지 출력
// for(let i=0; i < 100; i++){
//   console.log(i+1);
// }

// 1부터 100까지 짝수만 출력
// for(let i=0; i < 100; i++){
//   if(i % 2 == 0){continue;}
//   console.log(i+1);
// }

// 1부터 100까지 홀수만 출력
// for(let i=0; i < 100; i++){
//   if(i % 2 != 0){continue;}
//   console.log(i+1);
// }

// 0~10까지 5만 빼고 출력
// for(let i = 0; i<11; i++){
//   if(i == 5){continue;}
//   console.log(i);
// }

// 1~10까지 모든 합 출력
// let sum = 0;
// for(let i = 1; i<11; i++){
//   sum += i;
// }
// console.log(sum);

//1~n까지 합의 출력
let sum = 0;
let n = 100
for(let i = 1; i<n; i++){
  sum += i;
}
console.log(sum);


// 012340123401234 출력
let result = ""
let pattern = "01234"
for(let i = 0; i<3; i++){
  result += pattern
}
console.log(result)

// 1~10까지 짝수면 짝수입니다. 홀수면 홀수입니다. 출력
// ex)1는 홀수입니다.
// ex)2는 짝수입니다.
// ...
for(let i = 0; i<=10; i++){
  if(i % 2 == 0){
    console.log(`${i}는 짝수입니다`)
  }
  else if(i % 2 != 0){
    console.log(`${i}는 홀수입니다`)
  }
}


//100~1까지 출력
for (let i = 100; i >= 1; i--) {
  console.log(i);
}


// 1~10까지 5부터는 +2를 시켜서 출력
for(let i=1; i<=10; i++){
  if(i >= 5){
    console.log(i+2)
  }
  else{
    console.log(i)
  }
}