d="3564"
s=""

for(t of d){
    fact=1
    for(i=1;i<=Number(t);i++){
        fact=fact*i
    }
    s=s+fact+" "
}
console.log(s)