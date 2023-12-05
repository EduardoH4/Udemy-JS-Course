//Fizz Buzz - de 100 Numero

  /*
Multiplos de 3 (3,6,9,12) impimiran -> fizz
Multiplos de 5 (5,10,15,20) impimiran -> buzz
Multiplos de 3 (3,6,9,12) impimiran -> fizz
Multiplos de ambos o de 15 (15, 30, 45) imprimiran Fizz Buzz
  */

for (let i = 1; i < 100; i++) {
    if (i % 15 === 0) {
        console.log(`${i} : Fizz Buzz`);
    }else if (i % 3 === 0) {
        console.log(`${i} : fizz`);
    }else if (i % 5 === 0) {
        console.log(`${i} : buzz`)
    }
    
}