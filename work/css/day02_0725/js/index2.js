var result = 0;
let num1 = 5


//할당 연산자 -------------------
//기본=대입연산자(실행후 result:5)
result = num1;
console.log(`[=대입연산자]${result}`)

//누적+=대입연산자
//result = result + num1
result += num1
console.log(`[+= 대입연사자 더하기]${result}`)

//누적-=연산자
//result = result - num1
result -= num1
console.log(`[-=대입연산자 빼기]${result}`)
console.log("[결과보기:문자연결연산자사용--]"+result);


//누적*=연산자
//result = result * num1
result *= num1
console.log(`[*=대입연산자곱하기]${result}`)


//누적/=연산자
//result = result / num1
result /= num1
console.log(`[/=대입연산자나누기]${result}`)

//누적%=연산자
//result = result % num1
result %= num1
console.log(`[%=대입연산자 나머지0]${result}`)