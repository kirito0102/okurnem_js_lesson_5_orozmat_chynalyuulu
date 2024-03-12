const fr = [];
const vegetables =['AK-ORGO','Turusbekova kievskii', 'Maximum'];

fr.push('AK-ORGO');
fr.push('Turusbekova kievski');
fr.push('Maximum');
console.log(fruits);

const new1 = vegetables.concat(fruits);
const ar1 = new1.join(',\n ');


 


 const fr1 = [];
 const arrayOfBooks =('Будь лучшей версией себя','Подсознание может все', 'Искусство жить просто', 'Магическая уборка', 'Меньше значит Болше');
 
fr1.push('-Меньше значит Болше');
fr1.push('-Магическая уборка');
fr1.push('-Искусство жить просто');
fr1.push('-Подсознание может все');
fr1.push('-Будь лучшей версией себя');
console.log(fruits);


const new2 = arrayOfBooks.concat(fruits);
const string = new2.join(',');



const name1 = [];

name1.push('AMIR');
name1.push('ADAM');
name1.push('EMIR');
name1.push('BEKBOL');
name1.push('ADIL');

const name2 = [];

name1.push('ADEMI');
name1.push('AGATA');
name1.push('MAYA');
name1.push('AZALYA');
name1.push('MARIA');

console.log(name1);

const okuuchular = name2.concat(name1);






let flowers = ['роза', 'тюлпан', 'лотос', 'лилия', 'Пион'];

for (let i=0; i < flowers.length; i++){
    console.log( i + 1 + ' ' + flowers[i]);
}








const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0;  i < number.length; i++){
    number[i] *= 5;   
}

console.log(number);
