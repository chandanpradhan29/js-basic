const arr = ["deba","akash" ,"dibya"] 
const str = "chandan smart boy"

//forof loop : it can iterate array , string 
for (const i of arr) {
    // console.log(i);
}

for(const i of str){
    // console.log(i);
}

//maps
const map = new Map()
map.set("IN" ,"India")
map.set("USA" , "United state of america")
map.set("Fr","France")
map.set("IN" ,"India")

// console.log(map);

//print maps 
for(const [key,pair] of map){
    console.log(key ,":-" ,pair);
}

//forof : willnot work in object 


