/* Реализовать функцию curry чтобы выполнялось:

function abc(a, b, c) {
    return a + b + c;
  }
  
  function abcdef(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
  }
  
  abc.curry('A')('B')('C'); // 'ABC'
  abc.curry('A', 'B')('C'); // 'ABC'
  abc.curry('A', 'B', 'C'); // 'ABC'
  
  abcdef.curry('A')('B')('C')('D')('E')('F'); // 'ABCDEF'
  abcdef.curry('A', 'B', 'C')('D', 'E', 'F'); // 'ABCDEF' */

function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }

  function abc(a, b, c) {
    return a + b + c;
  }

  let curriedSum = curry(abc);

  console.log( curriedSum('A')('B')('C'));
  console.log( curriedSum('A', 'B')('C')); 
  console.log( curriedSum('A', 'B', 'C'));


  function abcdef(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
  }
  
  let curriedSumLong = curry(abcdef);

  console.log(curriedSumLong('A')('B')('C')('D')('E')('F'));
  console.log(curriedSumLong('A', 'B', 'C')('D', 'E', 'F'));


/* Что можно улучшить? Как бы вы переписали функцию drawRating при условии что на вход функции drawRating должна приходить переменная vote, содержащая значение от 0 до 100. Интересует именно логика реализации функции, не визуальное отображение звезд.

function drawRating(vote) {
    if (vote >= 0 && vote <= 20) {
        return '★☆☆☆☆';
    }
    else if (vote > 20 && vote <= 40) {
        return '★★☆☆☆';
    }
    else if (vote > 40 && vote <= 60) {
        return '★★★☆☆';
    }
    else if (vote > 60 && vote <= 80) {
        return '★★★★☆';
    }
    else if (vote > 80 && vote <= 100) {
        return '★★★★★';
    }
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★ */



function drawRating(vote) {
    switch(true) {
    case vote >= 0 && vote <= 20:
        return '★☆☆☆☆';
            
    case vote > 21 && vote <= 40:
        return '★★☆☆☆';
        
    case vote > 41 && vote <= 60:
        return '★★★☆☆';
              
    case vote > 61 && vote <= 80:
        return '★★★★☆';
            
    case vote > 81 && vote <= 100:
        return '★★★★★';
           
}}

console.log(drawRating(0) );
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★