//1.1. Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”

const str = 'HELLO WORLD';

function lowerString(str) {
    let str2 = "";
    for (let i = 1; i < str.length; i++) {
        str2 += str[i].toLowerCase();
    }
    return str[0].toUpperCase() + str2;
}

console.log(lowerString(str));

//1.2. Преобразование строки с целью правильно расстановки пробелов.

const sentence = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";

function correctSentence(str) {
    for (let i = 1; i < str.length - 1; i++) {
        if (str[i] === "." || str[i] === ",") {
            if (str[i - 1] === " ") {
                str = copyStart(0, i - 1, str) + copyEnd(i, str.length, str);
            }
            if (str[i + 1] !== " ") {
                str = copyStart(0, i + 1, str) + " " + copyEnd(i + 1, str.length, str);
            }
        }
        if (str[i - 1] === " " || str[i + 1] === " ") {
            if (str[i] === " ") {
                let count = 0, j = i + 1;
                while (true) {
                    if (str[j] === " ") {
                        count++;
                        j++;
                    } else break;
                }
                str = copyStart(0, i, str) + copyEnd(i + count, str.length, str);
            }
        }
    }

    function copyStart(first, last, str) {
        let copy = "";
        for (let i = first; i < last; i++) {
            copy += str[i];
        }
        return copy;
    }

    function copyEnd(first, last, str) {
        let copy = "";
        for (let i = first; i < last; i++) {
            copy += str[i];
        }
        return copy;
    }

    return str;
}

console.log(correctSentence(sentence));

//1.3. Посдчитывающие кол-во слов в строке.

const line = "Подсчет количества слов в строке, пожалуйста работай";

function counterWords(line) {
    let count = 0;
    let str = "";
    for (let i = 0; i < line.length; i++) {
        if (line[i] !== " ") {
            str += line[i];
            if (i === line.length - 1) {
                count++;
            }
        } else {
            if (str.length >= 3) {
                count++;
            }
            str = "";
        }
    }
    return count;
}

console.log(counterWords(line));

//1.4. Подсчитывающий, уникальные слова.

const text = "Текст, котором слово текст несколько раз встречается и слово в тоже";

function uniqueCounterWords(text) {
    let str = "", result = "Слово => Кол-во повторений \n";
    let array = [];
    let map = new Map();
    let count = 0;
    for (let i = 0; i !== text.length; i++) {
        if (!text[i].includes(',') && !text[i].includes(' ')) {
            str += text[i];
            if (i === text.length - 1) {
                array.push(str.toLowerCase());
                map.set(str.toLowerCase(), i);
            }
        } else {
            array.push(str.toLowerCase());
            map.set(str.toLowerCase(), i);
            str = "";
        }
    }
    for (let word of map.keys()) {
        if (word !== '') {
            for (let j = 0; j < array.length; j++) {
                if (word === array[j]) {
                    count++;
                }
            }
            map.set(word, count);
            count = 0;
        }
        if (word === '') {
            map.delete(word);
        }
    }
    console.log("Слово из текста => Кол-во повторений")
    return map;
}

console.log(uniqueCounterWords(text));
