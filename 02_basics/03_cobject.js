//object destructuing 
const course = {
    name :"js" ,
    price :999 ,
    "courseInstructor" : "hitesh"
}

// const {courseInstructor} =course;
// console.log(courseInstructor); //op : hitesh

const {courseInstructor:instructor} =course;
console.log(instructor);//op : hitesh

//api : kuch values ati hai backend se unko kaise likhte hai hum .
