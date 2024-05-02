n=7
result=" "
s=" "
fact=1
for(i=1;i<=7;i++){
    fact=fact*i
    result=result*i
    s=s+i
    if(i<n){
        s=s+"*"
    }

}
console.log(s,"=",fact)


n1="335645"
d=" "
for(k of n1)
{
    if(d.includes(k)==false){
        d+=k
    }    
}
console.log(d)
s=""
fact=1
for(t of d)
{
    fact=1

        for(i=1;i<=Number(t);i++)
            {
             fact=fact*i
            }
    s=s+fact+" "  
}

console.log(s)   


n=10
s=" "
n1=0
n2=1
arr=[]
for(i=1;i<=n;i++){
    s=s+n1+" "
    arr.push(n1)
    n3=n1+n2
    n1=n2
    n2=n3
}
console.log(s)
sum=0
for(k of arr)
{
    if(k>1)
    {
       c=true
       {
        for(i=2;i<k;i++)
        {
            if(k%i==0)
            {
                c=false
                break
            }
        }
       }
       if(c){
        sum=sum+Number(k)
         
       } 
    }
}
console.log(sum)


num = 10
if (num >1) {
    isPrime = true;
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log("Nearest prime to", num, "is:", num);
} else {
    let lower = num - 1;
    let upper = num + 1;
    let primeFound = false;

    while (!primeFound) {
        let LowerPrime = true;
        let UpperPrime = true;
        if (lower >1) {
             LowerPrime = true;
            for (let i = 2; i <= Math.sqrt(lower); i++) {
                if (lower % i === 0) {
                    LowerPrime = false;
                    break;
                }
            }
        }
        for (let i = 2; i <= Math.sqrt(upper); i++) {
            if (upper % i === 0) {
                UpperPrime = false;
                break;
            }
        }

        if (LowerPrime) {
            console.log("Nearest prime to", num, "is:", lower);
            primeFound = true;
        } else if (UpperPrime) {
            console.log("Nearest prime to", num, "is:", upper);
            primeFound = true;
        } else {
            lower--;
            upper++;
        }
    }
}







