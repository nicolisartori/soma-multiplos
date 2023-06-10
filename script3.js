somar(1000)
function somar(limite){
    let multiplosde3 = 0;
    let multiplosde5 = 0;
    for (i = 0; i <= limite; i++){
        if(i % 3 === 0)
        multiplosde3 += i;
        res.innerHTML = `A soma dos múltiplos de 3 é: ${multiplosde3}`
        if (i % 5 ===0)
        multiplosde5 += i;
        res2.innerHTML = `A soma dos múltiplos de 5 é: ${multiplosde5}`
    }
    res1.innerHTML = `A soma dos múltiplos de 3 com os múltiplos de 5 é: ${multiplosde3 + multiplosde5}`
}