const URL="https://restcountries.com/v3.1/all";
const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload=function(){
   let result=JSON.parse(xhr.response);
   for(i=0;i<result.length;i++){
    console.log(result[i].flags);
   }
}
