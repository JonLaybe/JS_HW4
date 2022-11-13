const isNumber = (num) => {
    if (typeof (num) === "string" && num === '')
        return false;
    if (Number(num) === 0 || !!Number(num))
        return true;
    return false;
};

function One() {
    alert('Задайте диапозон чисел')
    let number_one = prompt('От');
    let number_two = prompt('До');

    if (isNumber(number_one) && isNumber(number_two)) {
        number_one = Number(number_one);
        number_two = Number(number_two);
        let sum = 0;
        for (let i = number_one; i < number_two + 1; i++) {
            sum += i;
        }
        alert(`Summ: ${sum}`);
    } else {
        alert("No");
    }
}
function Two() {
    let a = prompt('a');
    let b = prompt('b');

    if (isNumber(a) && isNumber(b)) {
        a = Number(a);
        b = Number(b);

        while (a != 0 && b != 0) {
            if (a > b)
                a %= b;
            else
                b %= a;
        }
        alert(a + b);
    } else {
        alert("No");
    }
}
function Three() {
    let number = prompt('Number');

    if (isNumber(number)) {
        number = Number(number);

        for (let i = 1; i < number + 1; i++) {
            if (number % i === 0)
                console.log(i);
        }
    }
}
function Four() {
    let number = prompt('Number');

    if (isNumber(number)) {
        number = String(Number(Math.abs(number)));
        let result = 0;

        while (number) {
            result++;
            number = Math.floor(number / 10);
        }
        alert(result);
    }
}
function Five() {
    let pol = 0 //положительные
    let otr = 0 //отрицательные
    let nulls = 0 //нули
    let chet = 0 //четные
    let nechet = 0 //нечетные
    let numbers = prompt('Введите не более 10 чисел через пробел').split(' ');
    for (item of numbers) {
        if (item % 2 === 0)
            chet++;
        else
            nechet++;

        if (item === '0')
            nulls++;
        else if (item > 0)
            pol++;
        else if (item < 0)
            otr++;
    }
    console.log(`Положительные ${pol}\nОтрицательные ${otr}\nНули ${nulls}\nЧетные ${chet}\nНечетные ${nechet}`);
}
function Six() {
    function ChackValue(num_one, num_two, value) {
        switch (value) {
            case '*':
                return num_one * num_two;
            case '/':
                return num_one / num_two;
            case '+':
                return num_one + num_two;
            case '-':
                return num_one - num_two;
            default:
                return null;
        }
    }
    do {
        let number_one = prompt('Введите число');
        let number_two = prompt('Введите число');
        let value = prompt('Введите знат(*; /; -; +)');
        if (isNumber(number_one) && isNumber(number_two)) {
            let result = ChackValue(+number_one, +number_two, value)
            result !== null ? alert(result) : console.log('Неверный ввод данных');
        }
    } while (prompt('Yes or no').toLowerCase() === 'yes' ? true : false);
}
function Seven() {
    let number = prompt('Введите число');
    let value = prompt('Введите число сдвигов');

    if (isNumber(number) && isNumber(value) && number.length >= value) {
        let result = '';
        for (let i = value; i < number.length; i++) {
            result += number[i];
        }
        for (let i = 0; i < value; i++) {
            result += number[i];
        }
        alert(result);
    }
}
function Eight() {
    function DayWeek(day_status) {
        switch (day_status) {
            case 0: return 'Понедельник';
            case 1: return 'Вторник';
            case 2: return 'Среда';
            case 3: return 'Четверг';
            case 4: return 'Пятница';
            case 5: return 'Суббота';
            case 6: return 'Воскресенье';
            default:
                return null;
        }
    }
    let day_status = 0;
    while (confirm(`${DayWeek(day_status)}. Хотите увидеть следующий день?`)) {
        day_status === 6 ? day_status = 0 : day_status++;
    }
    // do {
    //     let querty = confirm(`${DayWeek(day_status)}. Хотите увидеть следующий день?`);
    // } while (condition);
}
function Nine() {
    for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 11; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}
function Ten() {
    while (true) {
        alert('Загадайте число от 0 до 100');
        let ot = 0;
        let to = 100;
        let n = 50;
        while (true) {
            if (confirm(`Ваше число ${n}`))
                break;
            else if (confirm(`Ваше число > ${n}`)) {
                ot = ++n;
                n = Math.floor((n + to) / 2);
            }
            else {
                to = --n;
                n = Math.floor((n + ot) / 2);
            }
        }
    }
}
Ten();