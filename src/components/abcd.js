const items=["I","love","my","India"]
const i=items.findIndex((element)=>element==="love")
items.splice(i,i);
console.log(items);