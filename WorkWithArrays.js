  
  
  var name = [
    {name:'santhosh',ooru:'trichy'},
    {name:'san',ooru:'cbe'},
    {name:'elite',ooru:'ch'}
  ]


console.log(name[0].ooru)

function oooru(oorula) {
  return oorula.ooru
  // body...
}

console.log(name.map(oooru))

function list (x){
  return x.name;
}
console.log(name.map(list))

function nameonly(x){
return x.ooru == 'cbe'
}

console.log(name.filter(nameonly))


let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7 
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }];
  
  function type (x){
    return x.type == 'minivan';
  }
// console.log(cars.filter(type))
 
cars.push({
    "color": "bule",
    "type": "minivan",
    "registration": new Date('2018-03-03'),
    "capacity": 4
  })






function cap(x) 
{
  return x.capacity > 6 ;
}
 

console.log(cars.filter(type).filter(cap))

