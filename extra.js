 function roman(n){
    let thos=["","M","MM","MMM"];
    let hund=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let ten=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let one=["","I","II","III","IV","V","VI","VII","VIII","IX"];
    
    return  thos[parseInt(n/1000)]+hund[parseInt((n/100)%10)]+ten[parseInt((n/10)%10)]+one[parseInt(n % 10)];

}

console.log(roman(3000));