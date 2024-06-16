for(let i=0 ;i<=4;i++){
    // console.log(`you printed i : ${i}`);

  for(let j=0 ;j<=4;j++){
    // console.log(`you printed j ${j}`);
  }
}

//array loop
let myarr = ["dibya","ambika","chandan"]

for(let i=-0;i<myarr.length;i++)
{
    let ele = myarr[i];  //dibya , ambika , chandan
    // console.log(ele);
}

//break and continue 

for(let i=0 ;i<10 ;i++)
{
    // if(i==5){
    //     console.log("breaking the loop");
    //     break;
    // }
    if(i==5){
        console.log("skipped the iteration");
        continue;
    }
    console.log(`you value is ${i}`);
}