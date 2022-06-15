for (let a = 1; a<=10; a++){
    let factorial = 1
    for (let b = 1; b<=a; b++){

        factorial *= b
    }
    console.log(`$(a) ---- $(factorial)`)
}