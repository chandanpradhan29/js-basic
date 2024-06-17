const lang = ["java" , "c++" , "c" ,"python"  ]

// lang.forEach( function (val) 
// {
//     console.log(val);
// } )

lang.forEach(  (val) =>
{
    // console.log(val);
} )


const coding = [
    {
        "langauge" : "c++" ,
        "extension" : "cpp"
    }
      ,
    {
        "langauge" : "java" ,
        "extension" : "java"
    }
    ,
    {
        "langauge" : "python" ,
        "extension" : "py"
    }
]

coding.forEach((val)=> {
    // console.log(val.langauge);
})

const nums =[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]
// const newNums = nums.filter( (num)=> num > 4 );

const newNums = nums.filter( (num)=> {
    return num > 4
} );
// console.log(newNums);

//achieved above without using filter
const allnums =[];
const resultnums = nums.forEach( (val) => {
    if(val >4) {
        allnums.push(val)
    }
})
console.log(allnums);


const books = [
    {
        title : "book one" , category : "action" , publish:"1997" , edition : "1998"

    } ,
    {
        title : "book two" , category : "romantic" , publish:"1995" , edition : "1997"

    } ,
    {
        title : "book three" , category : "action" , publish:"2009" , edition : "2010"

    } ,
    {
        title : "book four" , category : "funny" , publish:"2001" , edition : "2005"

    } ,
    {
        title : "book five" , category : "fiction" , publish:"2009" , edition : "2010"

    } ,
    {
        title : "book six" , category : "non-fiction" , publish:"2009" , edition : "2010"

    } ,
]

// const userFilter = books.filter( (bk) => bk.category =="action" )
const userFilter = books.filter( (bk) => { 
    return bk.publish >=2000 && bk.category =="funny"
} )

console.log(userFilter);

