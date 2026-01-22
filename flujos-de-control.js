

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

//Ejercicio de flujos de control : obtención de media positiva y negativa de una lista
function mediaNegativaYPositiva (nums) {
    let sumaPos = 0
    let contadorPos = 0
    let sumaNeg = 0
    let contadorNeg = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            sumaPos += nums[i]
            contadorPos++
        } else {
            sumaNeg += nums[i]
            contadorNeg++
        }
    }

    let mediaPos = contadorPos ? sumaPos / contadorPos : 0
    let mediaNeg = contadorNeg ? sumaNeg / contadorNeg : 0

    return {mediaPos, mediaNeg}
}

//Ejercicio de flujos de control : simulación de inventario
function fichasDeAlmacen () {
    const fichas = [
    { codigo: 'A', precio: 10.50, cantidad: 5 },
    { codigo: 'B', precio: 20.00, cantidad: 2 },
    { codigo: 'A', precio: 5.00,  cantidad: 10 },
    { codigo: 'B', precio: 15.00, cantidad: 3 },
    { codigo: 'Z', precio: 0,      cantidad: 0 } // Centinela para finalizar
];

    let totalArticulosA = 0
    let totalArticulosB = 0
    let importeTotalA = 0
    let importeTotalB = 0

    for (let i = 0; i < fichas.length; i++) {
        const ficha = fichas[i]

        if (ficha.codigo !== 'A' && ficha.codigo !== 'B') {
            break
        }
        const importeFicha = ficha.cantidad * ficha.precio
        if (ficha.codigo === 'A') {
            importeTotalA += importeFicha
            totalArticulosA += ficha.cantidad
        }
        if (ficha.codigo === 'B') {
            importeTotalB += importeFicha
            totalArticulosB += ficha.cantidad
        }
    }

    return {importeTotalA, importeTotalB, totalArticulosA, totalArticulosB}
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
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
        }
    }
}



//Ejercicio de flujos de control : validación de un número entero proporcionado por el usuario
function error () {
    let n = 0
    let isValid = false
    do {
        n = Number(prompt('Escribe un número'))
        if (!Number.isInteger(n) || isNaN(n)) {
            alert('No es un número entero válido')
        } else {
            alert(`Número válido ${n}`)
            isValid = true
        }
    } while (!isValid)
    
    return n
}

//Ejercicio de flujos de control : media de una lista
const lis = [5, 12, 3, 8, 20, 1, -1]
function mediaLista (l) {
    let i = 0
    let acc = 0
    let count = 0
    while (l[i] > 0) {
        acc += l[i]
        i++
        count++
    }

    const media = acc / count

    return media
}



//Ejercicio de flujos de control : obtención de días de un mes específico
function diasDelMes (mes, bisiesto) {
    let meses31 = [ "enero", "marzo"," mayo", "julio", "agosto", "octubre", "diciembre"]

    if (meses31.includes(mes.toLowerCase())) {
        return 'El mes tiene 31 días'
    } else {
        if (bisiesto && mes.toLowerCase() === 'febrero') {
            return 'El mes tiene 29 días'
        }
        if (!bisiesto && mes.toLowerCase() === 'febrero' ) {
            return 'El mes tiene 28 días'
        }
        return 'El mes tiene 30 días'
    }
}


/*function sumarEnteros1A100DiferentesEstructuras () {
    let contador = 0
    let suma = 0
    do {
        suma += contador
        contador++
    } while (contador <= 100)

    return suma
}*/


/*function sumarEnteros1A100DiferentesEstructuras () {
    let contador = 0
    let suma = 0
    while (contador <= 100) {
        suma += contador
        contador++
    }

    return suma
}*/

//Ejercicio de flujos de control : suma de enteros con diferentes estructuras
function sumarEnteros1A100DiferentesEstructuras () {
    let suma = 0
    for (let i = 0; i <= 100; i++) {
        suma += i
    }
    return suma
}

//Ejercicio de flujos de control : primos hasta 1000
function imprimirPrimosHasta1000 () {
    let contador = 2

    while (contador <= 1000) {
        let esPrimo = true
        for (let i = 2; i < contador; i++) {
            if (contador % i === 0) {
                esPrimo = false
                break
            }
        }
        if (esPrimo) {
            console.log(contador)
        }
        contador++
    }

}

const lecturasClimaticas = [
    { max: 25.5, min: 12.0 },
    { max: 9.0,  min: 5.0 },
    { max: 18.0, min: 9.0 },
    { max: 30.2, min: 15.8 },
    { max: 22.0, min: 10.0 },
    { max: 0.0,  min: 0.0 } // Par de fin
];
//Ejercicio de flujos de control : obtención de temperaturas en array de objetos
function clima (lecturas) {
    //Enteros
    let num_dias = 0 
    let num_errores = 0 
    let cont_max = 0
    let cont_min = 0
    let porc_err = 0
    let i = 0
    //Reales
    let media_max = 0 
    let media_min = 0 
    let suma_max = 0 
    let suma_min = 0
   
    while (i < lecturas.length && (lecturas[i].max !== 0 || lecturas[i].min !== 0)) {
        
        if (lecturas[i].max !== 9) {
            suma_max += lecturas[i].max
            cont_max++
        }
        if (lecturas[i].min !== 9) {
            suma_min += lecturas[i].min
            cont_min++
        }

        if (lecturas[i].max === 9 || lecturas[i].min === 9) {
            num_errores++
        }
        num_dias++
        i++
    }
    media_max = cont_max > 0 ? suma_max / cont_max : 0
    media_min = cont_min > 0 ? suma_min / cont_min : 0
    porc_err = num_dias > 0 ? (num_errores / num_dias) * 100 : 0

    return {media_max, media_min, numero_errores : num_errores, porcentaje_errores : porc_err, num_dias}
}


//Ejercicio de flujos de control : cálculo de la serie de x número
function calcularSerie (x, n) {
    let e = 0
    for (let i = 1; i < n; i++) {
        let factorial = 1
        for (let j = 1; j < n; j++) {
            
            factorial *= j
            
        }
        
        e += Math.pow(x, n) / factorial
    }

    return e
}

console.log(calcularSerie(23,4))

const archivoEmpresa = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Pedro", edad: 66 },
    { nombre: "Marta", edad: 65 },
    { nombre: "Luis", edad: 70 },
    { nombre: "Ana", edad: 25 }
];
//Ejercicio de flujos de control : contador de edad en array de objetos
function contadorEdad (arch) {
    let contadorMayores65 = 0
    for (let i = 0; i < arch.length; i++) {
        if (arch[i].edad >= 65) {
            contadorMayores65++
        }
    }

    console.log(`Hay ${contadorMayores65 > 1 ? contadorMayores65 : '1'} ${contadorMayores65 > 1 ? 'trabajadores' : 'trabajador'} de 65 o más años`)
}



