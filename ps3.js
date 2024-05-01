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








