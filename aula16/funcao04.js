function fatorial(n) {  //lembrando que fatorial é por ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120
    let fat = 1
    for(let c = n; c > 1; c--) {  // c é contador -> "c--" é = c perde 1
        fat *= c

    }
    return fat
}
console.log(fatorial(5))