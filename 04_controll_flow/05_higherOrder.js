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
    console.log(val.langauge);
})