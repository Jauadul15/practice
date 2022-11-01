function jug(...numbers){
    let sum=0;
    for(let i of numbers){
        sum=sum+i;
    }
    console.log(sum);
}
jug(21,312,4,42,24,24)