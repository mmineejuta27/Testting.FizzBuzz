const fizzbuzz = require('./fizzBuzz')

test('num mod 3 == 0 is Fizz', ()=>{
    for(i = 0 ; i <= 100 ; i++ ){
        if(i % 3 == 0 && i % 5 != 0){
          expect(fizzbuzz(i)).toBe("Fizz")
         
        }  
    }
 })

 test('num mod 5 == 0 is Buzz', ()=>{
    for(i = 1 ; i <= 100 ; i++ ){
        if(i % 5 == 0 && i % 3 != 0 && i != 35){
          expect(fizzbuzz(i)).toBe("Buzz")
         
        }  
    }
 })

 test('num mod 3 == 0 and num mod 5 == 0 is FizzBuzz', ()=>{
    for(i = 1 ; i <= 100 ; i++ ){
        if(i%3 ==0 && i % 5 == 0 ){
          expect(fizzbuzz(i)).toBe("FizzBuzz")
         
        }  
    }
 })

 test('num = 35 or num == 53 is FizzBuzz', ()=>{
    for(i = 1 ; i <= 100 ; i++ ){
        if(i == 35 || i == 53 ){
          expect(fizzbuzz(i)).toBe("FizzBuzz")
         
        }  
    }
 })


test('num is includes 3 is Fizz', ()=>{
    for(i = 1 ; i <= 100 ; i++ ){
    strNum = i.toString();
        if(strNum.includes("3") && i % 3 == 0 && i % 5 != 0 && i != 35 && i != 53 ){
          expect(fizzbuzz(i)).toBe("Fizz")
        }  
    }
 })

 test('num is includes 5 is Buzz', ()=>{
    for(i = 1 ; i <= 100 ; i++ ){
    strNum = i.toString();
        if(strNum.includes("5") && i % 5 == 0 && i % 3 != 0 && i != 35 && i != 53 ){
          expect(fizzbuzz(i)).toBe("Buzz")
        }  
    }
 })


 