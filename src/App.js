import React from 'react';
//FOR INLINE CSS//
    
const style={};

const cur_date=new Date(2020, 5, 5, 5);
const hours=cur_date.getHours()
var empaty=""
if(hours>1 && hours<=11){
  empaty="Good morning"
  style.color="orange"
}
else if(hours>11 && hours<=19){
  empaty="Good Afternoon"
  style.color="pink"
}
else{
  empaty="Good night"
  style.color="blue"
}
// USED JAVASCRIPT CONDITIONAL STETMENT ^//
function Hello_sir(params) {
return(
    <>
    <h3>wishes:-</h3>
    <h1>hellow sir, <span style={style}>{empaty}</span></h1>
    </>)
  
  
}
export default  Hello_sir;









