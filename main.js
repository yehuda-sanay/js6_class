//שאלה 1 

// class Students {
//     constructor(studentName,studentClas,studentId){
//         this.studentName=studentName;
//         this.studentClass=studentClas;
//         this.studentId=studentId;
//     }
// }
// const student1 = new Students("yehuda","english",305202582);
// const student2 = new Students("yoav", "music", 305202546)
// //שאלה 2
// console.log(student1);
// console.log(student2);

//שאלה 3
let tableh=document.getElementById("user_thead");
let tableb=document.getElementById("user_tbody");
function UsersDitels(){
class Useres {
    constructor(firstName,lastName,age,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }
}
const user1=new Useres("yehdua","sanay",31,"yehudasanay1@gmail.com");
const user2=new Useres("aviv","tadela",31,"aviv1@gmail.com");
const user3=new Useres("nadav","talala",32,"nadavt@gmail.com");
// console.log(user1,user2,user3);
const user4=new Useres(user_firstname.value,user_lastname.value,user_age.value,user_email.value);
console.log(user4);

for(key in user4){
    // let th =document.createElement("th");
    // tableh.oppendChild(th);
    // th.innerHTML=key+":"+" ";
    // console.log(key+" ");
    user_table.innerHTML+= `<tr> <td> ${user4[key]} </td></tr>`

}



}