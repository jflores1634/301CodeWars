function capitalize(s){
   let evenStr = "";
   let oddStr = "";
   for(let i = 0; i < s.length; i++){
     if(i%2==0){
       evenStr += s[i].toUpperCase();
       oddStr += s[i];
     } else {
       evenStr+=s[i];
       oddStr+=s[i].toUpperCase();
     }
   }
    return [evenIndexStrings, oddIndexStrings];
  };
