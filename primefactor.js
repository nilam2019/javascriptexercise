function primefactor(num){
    var primes=[];
    
    for(var temp=2;num>1;temp+=1){
    for(;num%temp==0;num/=temp){
        primes.push(temp);
    }
  
}
return primes;
}
module.exports=primefactor;
