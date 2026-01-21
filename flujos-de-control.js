

//Ejercicio de flujos de control : validación de contraseña
function passwordValidator (pass) {
    let counter = 0
    do {
        let password = prompt('Escribe tu contraseña')
        if (typeof password === 'number') {
            const error = new Error('La contraseña no puede ser un número')
            return error
        }
        if (password.length < 6) {
            const error = new Error('La contraseña debe de tener 6 dígitos')
            return error
        }
        if (password !== pass) {
            alert(`Contraseña incorrecta, te quedan ${3 - counter} intentos`)
            counter++
        } else {
            alert('Contraseña correcta')
        }
    
    } while (counter < 3)
}



//Ejercicio de flujos de control : calculadora con salida

function calculadoraConSalida () {
    let res = ''
    let r = 0
    do {
        const num1 = Number(prompt('Elige un número'))
        const num2 = Number(prompt('Elige otro número'))
        let op = prompt('Elige una operación, -Suma +. -Resta -. -Multiplicación *. -División /')
        switch (op) {
            case '+':
                r = num1 + num2
                break;
            case '-':
                r = num1 - num2
                break;
            case '/':
                r = num1 / num2
                break;
            case '*':
                r = num1 * num2
                break;
            default:
            alert( 'Operación inválida')
            break;
        }
        alert(`El resultado es ${r}`)
        res = prompt('Quieres realizar mas operaciones?')
    } while (res === 'S' || res === 's')
    
    
}


//Ejercicio de flujos de control : factorial de un número dado
function factorial(num) {
    let acc = 1
    for (let i = num; i > 0; i--) {
        acc *= i
    }
    return acc
}


//Ejercicio de flujos de control : cálculo de potencias de un número
function calcularPotencia(num, pot) {
    let res = 1
    for (let i = 0; i < pot; i++) {
        res *= pot
    }
    return `${num} elevado a ${pot} es ${res}`
}

//Ejercicio de flujos de control : determinar un número primo
function determinarPrimo (numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0 ) {
            return 'No es primo'
        } 
    }
    return 'Es primo'
}


//Ejercicio de flujos de control : comprobar si el número es perfecto
function esPerfecto (n) {
    let arr = []
    
    if (!n) {
        const error = new Error('Debes introducir un número')
        return error
    }
    if (typeof n !== 'number' || isNaN(n)) {
        const error = new Error('Debes introducir un número, no una letra')
        return error
    }
    if (n <= 0) {
        const error = new Error('Debes introducir un número mayor de 0')
        return error
    }
    
    //Obtenemos los divisores
    for (let i = 1; i < n/2; i++) {
        if (n % i === 0) {
            arr.push(i)
        }
    }
    //Obtenemos el total de la suma de los divisores
    let sum = arr.reduce((acc, curr) => acc + curr, 0)

    if (sum !== n) {
        return 'No es es un número perfecto'
    }

    return 'Es un número perfecto'
}

//Ejercicio de flujos de control : encontrar mayor y menor en una lista
function encontrarMayorYMenor (arr) {
    let mayor = arr[0]
    let menor = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i]
        } 
        if (arr[i] < menor) {
            menor = arr[i]
        }
    }

    return {mayor, menor}
}

const mayorMenor = [32,523,13,535,21,29]

console.log(encontrarMayorYMenor(mayorMenor))


function factorial (n) {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
        console.log(`El factorial de ${i} es : ${factorial}`)
    }
}

//Ejercicio de flujos de control : encontrar las poblaciones mas grandes en un array anidado
function poblacionMasGrande (ciu) {
    let i = 0
    while (i < 8) {
        let mayor = 0
        let j = 0
        while (j < 25) {
            let ciudadActual = ciu[i][j]
            if (ciudadActual > mayor) {
                mayor = ciudadActual
            }
            j++
        }
        console.log(`La ciudad mayor es ${mayor}`)
        i++
    }
}

const datosCiudades = [
  [8412, 1532, 9283, 4412, 5521, 6722, 1102, 3499, 8821, 2341, 5542, 9001, 3211, 4456, 7781, 1234, 5567, 8890, 2345, 6789, 4432, 1123, 9988, 7765, 5543], // Prov 1
  [1200, 5543, 8821, 3342, 9901, 2231, 4452, 6671, 1129, 8872, 3341, 5562, 7783, 1124, 9905, 4436, 2217, 6658, 8879, 1120, 3344, 5566, 7788, 9910, 2232], // Prov 2
  [9941, 2234, 5561, 7782, 1125, 3347, 8891, 4433, 6654, 2211, 9982, 5545, 1128, 7763, 3349, 8870, 4451, 2239, 6675, 1104, 9907, 5563, 3346, 8825, 1122], // Prov 3
  [5541, 9982, 1123, 3344, 7765, 2211, 8876, 4452, 6673, 1105, 9901, 5567, 3348, 8822, 1129, 7784, 4431, 2235, 6659, 1100, 9988, 5542, 3347, 8871, 1124], // Prov 4
  [2231, 4452, 6673, 8894, 1105, 3346, 5567, 7788, 9909, 1120, 3341, 5562, 7783, 9904, 2215, 4436, 6657, 8878, 1109, 3340, 5561, 7782, 9903, 2214, 4435], // Prov 5
  [7781, 9902, 2213, 4434, 6655, 8876, 1107, 3348, 5569, 7780, 9901, 2212, 4433, 6654, 8875, 1106, 3347, 5568, 7789, 9900, 2211, 4432, 6653, 8874, 1105], // Prov 6
  [3341, 5562, 7783, 9904, 2215, 4436, 6657, 8878, 1109, 3340, 5561, 7782, 9903, 2214, 4435, 6656, 8877, 1108, 3349, 5560, 7781, 9902, 2213, 4434, 6655], // Prov 7
  [1101, 3342, 5563, 7784, 9905, 2216, 4437, 6658, 8879, 1100, 3341, 5562, 7783, 9904, 2215, 4436, 6657, 8878, 1109, 3340, 5561, 7782, 9903, 2214, 4435]  // Prov 8
];


//Ejercicio de flujos de control : representación de un triángulo
function trianguloIsosceles () {
    const num_lineas = 5
    let estructura = ''
    for (let i = 1; i <= num_lineas; i++) {
        let blancos = ''.repeat(num_lineas - i)
        let asteriscos = '*'.repeat(2 * i - 1)
        estructura += blancos + asteriscos + '\n'
    }
    console.log(estructura)
}

//Ejercicio de flujos de control : serie de fibonacci
function fibonnacci (n) { 
    let primero = 0
    let segundo = 1
    for (let i = 0; i < n;  i++) {
        let siguiente = primero + segundo
        primero = segundo
        segundo = siguiente
        console.log(primero + segundo)
    }
}


//Ejercicio de flujos de control : dar la vuelta a un número
function invertirNumero (num) {
    let arr = num.toString().split('')
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    let inverso = newArr.join('')
    return inverso
}
//Ejercicio de flujos de control : representación de un triángulo
function trianguloAsteriscos (n) {
    for (let fila = 1; fila <= n; fila++) {
        let linea = ''
        for (let espacios = 0; espacios < n - fila; espacios++) {
            linea += ' '
        }

        for (let asteriscos = 0; asteriscos < fila; asteriscos++) {
            linea += '*'
        }
        console.log(linea)
    }
}



//Ejercicio de flujos de control : obtención de cociente y resto de un número
function cocienteYResto (m, n) {
    let q = 0
    let r = m 
    do {
        //Restamos en cada iteración el valor del divisor para obtener el resto
        r -= n
        //Por cada resta que hagamos contamos uno para obtener el cociente
        q += 1
    } while (r >= n)

    return `Dividendo ${m}, Divisor${n}, Cociente ${q}, Resto ${r}`
}



function factorialNum (num) {
    let counter = num
    let fact = num
    let res = 0
    while (counter > 0) {
        counter--
        res += fact * counter
    }
    return res
}


function tablaMultiplicaciones (n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
        }
    }
}

tablaMultiplicaciones(10)




