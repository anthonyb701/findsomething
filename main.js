// let Money;
// while (Money < 100){
//    console.log(`you have ${Money} !`);
//     Money++;
// };

// while (Money < 100){
//    Money++;
//    if( Money === 35){
//       console.log('Ya bogat');
//       continue;
//    };
//    console.log(`you have ${Money} !`);
// }

// for(Money = 0; Money < 100; Money++){
//    console.log(`you have ${Money} !`);
// }
// console.log('Ya bogat');

// let coffe = 4;
// for (let x = 0; x < coffe; x++){
//    console.log('coffe')
// }

// let favCity = [ 
//    'Kiev',
//    'Toronto',
//    'Sidey',
//    'New York',
//    'San - Hose',
//    'Los - Angelos'
// ];

// for( let x = 0; x < favCity.length; x++){
//    console.log(`My favorite city is: ${favCity[x]} !`);
// }


 //// ////////// 222222222222 ///////////////
// let fruits = ['Lemon', 'Tangetrine', 'Orange', 'Apricot'];
// let desc = ' - Fresh and tasty!';
// console.log(fruits)

// for (x = 0; x < fruits.length; x++){
//    fruits[x] = fruits[x] + desc;
// };
// console.log(fruits);

//////////// 2222222222 //////////


// let line = 'abcdefghijklmnopqrstuvwxyz';

// let str = 'Наше слово: ';

// for (let i = 0; i < 10; i++){
//    let y = Math.floor(Math.random() * line.length);
//    str = str + line.charAt(y);
// };

// console.log(str);

///////////// 333333333333 /////////////

// let start = "Cool JavaScript";
// let result = start.replace(/i/g, "1").replace(/a/g,"4").replace(/o/g, "0");
// console.log(result);

////////////////////////////////////////////

// let name = prompt('What is your name?');

// console.log(`Hey, ${name}`);

// let likeOrange = confirm('Do you like oranges?');
// if (likeOrange == true){
//    console.log('this fructs is very tasty!')
// } else {
//    console.log(' I prefer Lemons too)');
// }


// let words = ['арбуз', 'персик' , 'яблоко', 'банан'];
// let word = words[Math.floor(Math.random() * words.length)];

// let answerArray = [];

// for (let i = 0; i < word.length; i++){
//    answerArray[i] = '_';
// };

// let remainingLetters = word.length;

// while (remainingLetters > 0){
//    alert(answerArray.join(' '));

//    let guess = prompt('Угадайте букву, или нажмите отмена для выхода изи игры.')
//    if (guess === null){
//       break;
//    } else if (guess.length !== 1){
//       alert('Пожалуйста, введите одну букву!'); 
//    } else {
//       for (let j = 0; j < word.length; j++){
//          if (word[j] === guess){
//             answerArray[j] = guess;
//             remainingLetters--;
//          }
//       }
//    }
// } 
// if(guess !== null){
// alert(answerArray.join(' '));
// alert(`Отлично! Было загадано слово ${word}`);
// }

/////////////////////// 

let getRandomNumber = function (size){
   return Math.floor(Math.random() * size);
};

let width = 600;
let height = 600;
let clicks = 0;

let target = {
   x: getRandomNumber(width),
   y: getRandomNumber(height)
};
let getDistance = function (event, target){
   let diffX = event.offsetX - target.x;
   let diffY = event.offsetY - target.y;
   return Math.sqrt((diffX * diffX) + (diffY * diffY));
};




let getDistanceHit = function (distance){
   if (distance < 10){
      return 'Обпечешся!!';
   } else if (distance < 20){
      return 'Дуже гаряче!!';
   } else if(distance < 40){
      return 'Гаряче';
   } else if (distance < 80){
      return 'Тепло';
   } else if(distance < 160){
      return 'Холодно';
   } else if(distance < 320){
      return 'Дуже холодно';
   } else {
      return 'Замерзнеш!';
   }
};




$('#map').click(function (event){
   clicks++;
   let distance = getDistance(event, target);
   let distanceHit = getDistanceHit(distance);
   $('#distance').text(distanceHit);
   if(distance < 8){
      alert(`Ви знайшли захований блок! Зроблено спроб: ${clicks}`)
   };
});


