let nameUser = prompt('Як тебе звати?', 'Іра');
let emotion = prompt('Що ти відчуваєш, коли перегортаєш подушку, а вона холодненька?', 'радість');
let subject = prompt('Яка була тема останнього уроку в Hillel?', 'JS');

let info = nameUser + ' ' + emotion + ' ' + subject;
console.log(info);

let numb = +prompt('Введи 5-значне число', '95846');
while(numb < 10000 || numb > 99999) {
    numb = +prompt('Введи 5-значне число');
}

let result = numb.toString().split('');
console.log(result.join(' '));

let deadInside = 'Мене звати ' + nameUser + ' і я більше не відчуваю ' + emotion + ', бо намагаюся зрозуміти ' + subject + '. Сьогодні я билася головою об стіну ' + numb + ' разів.';
console.log(deadInside);