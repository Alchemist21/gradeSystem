//declare all the variables for the student profiles
var studentId;
var fname; 
var lname;
var email;
var pic;

//declare all the variables for the student grades

var p1Num;
var q1Num;

var p2Num;
var q2Num;

var p3Num;
var q3Num;

var gradesAverage;
  
//This function is created to assign the variables for student 1.



function student1(){
    studentId ="1234";   
    fname ="Paul";
    lname ="Calais";
    email ="paul@yahoo.com";
    pic ='images/paul.jpg';

// This function is created to assign for student1 grades

    p1Num = 95;
    q1Num = 95;

    p2Num = 80;
    q2Num = 75;

    p3Num = 88;
    q3Num = 75;
    
gradesAverage = (p1Num + q1Num + p2Num + q2Num + p3Num + q3Num)/6;

    console.log ( p1Num);
    console.log ( q1Num);
    console.log ( p2Num);
    console.log ( q2Num);
    console.log ( p3Num);
    console.log ( q3Num);
    console.log ( gradesAverage);

studentGrades();

}   



function student2(){
    studentId ="4321";   
    fname ="Dan";
    lname ="Snow";
    email ="dsnow@yahoo.com";
    pic ='images/dan.jpg';


    p1Num = 90;
    q1Num = 88;

    p2Num = 89;
    q2Num = 90;

    p3Num = 88;
    q3Num = 90;
    
gradesAverage = (p1Num + q1Num + p2Num + q2Num + p3Num + q3Num)/6;

    console.log ( p1Num);
    console.log ( q1Num);
    console.log ( p2Num);
    console.log ( q2Num);
    console.log ( p3Num);
    console.log ( q3Num);
    console.log ( gradesAverage);


   
studentGrades();

}   


function student3(){
    studentId ="3214";   
    fname ="Pat";
    lname ="Arquette";
    email ="parquette@yahoo.com";
    pic ='images/pat.jpg';

    p1Num = 75;
    q1Num = 85;

    p2Num = 90;
    q2Num = 86;

    p3Num = 88;
    q3Num = 75;
    
gradesAverage = (p1Num + q1Num + p2Num + q2Num + p3Num + q3Num)/6;

    console.log ( p1Num);
    console.log ( q1Num);
    console.log ( p2Num);
    console.log ( q2Num);
    console.log ( p3Num);
    console.log ( q3Num);
    console.log ( gradesAverage);

    
studentGrades();

}   


function student4(){
    studentId ="2134";   
    fname ="Andrew";
    lname ="Bones";
    email ="abones@yahoo.com";
    pic ='images/andrew.jpg';

    p1Num = 82;
    q1Num = 87;

    p2Num = 89;
    q2Num = 88;

    p3Num = 90;
    q3Num = 80;
    
gradesAverage = (p1Num + q1Num + p2Num + q2Num + p3Num + q3Num)/6;

    console.log ( p1Num);
    console.log ( q1Num);
    console.log ( p2Num);
    console.log ( q2Num);
    console.log ( p3Num);
    console.log ( q3Num);
    console.log ( gradesAverage);

 
    
studentGrades();

}   


function studentGrades (){

    // Profile Picture
    document.getElementById('pic').innerHTML = '<img src =' + pic +'>';
    console.log(pic);

    document.getElementById('studentId').innerHTML = "Student ID:" + studentId;
    console.log('studentId');

    document.getElementById('fname').innerHTML = "First Name:" + fname;
    console.log('fname');

    document.getElementById('lname').innerHTML = "Last Name:" + lname;
    console.log('lname');

    document.getElementById('email').innerHTML = "Email:" + email;
    console.log('email');
    
    // project1 grade
    
  
    document.getElementById('p1Num').innerHTML =  p1Num;
    console.log('p1Num');

    if (p1Num>95) {
        document.getElementById('p1Grade')
      .innerHTML =  "A";
      } else if (p1Num>85) {
           document.getElementById('p1Grade')
      .innerHTML =  "B";		
      } else if(p1Num>75){
          document.getElementById('p1Grade')
          .innerHTML =  "C";	

      } else if(p1Num>65){
          document.getElementById('p1Grade')
          .innerHTML =  "D";		
      }else{
          document.getElementById('p1Grade')
      .innerHTML =  "F";
      }

    document.getElementById('q1Num').innerHTML =  q1Num;
    console.log('q1Num');
    
    if (q1Num>95) {
        document.getElementById('q1Grade')
      .innerHTML =  "A";
      } else if (q1Num>85) {
           document.getElementById('q1Grade')
      .innerHTML =  "B";		
      } else if(q1Num>75){
          document.getElementById('q1Grade')
          .innerHTML =  "C";	

      } else if(q1Num>65){
          document.getElementById('q1Grade')
          .innerHTML =  "D";		
      }else{
          document.getElementById('q1Grade')
      .innerHTML =  "F";
      }

    document.getElementById('p2Num').innerHTML =  p2Num;
    console.log('p2Num');
    
    if (p2Num>95) {
        document.getElementById('p2Grade')
      .innerHTML =  "A";
      } else if (p2Num>85) {
           document.getElementById('p2Grade')
      .innerHTML =  "B";		
      } else if(p2Num>75){
          document.getElementById('p2Grade')
          .innerHTML =  "C";	

      } else if(p2Num>65){
          document.getElementById('p2Grade')
          .innerHTML =  "D";		
      }else{
          document.getElementById('p2Grade')
      .innerHTML =  "F";
      }

    document.getElementById('q2Num').innerHTML =  q1Num;
    console.log('q2Num');
    
    if (q2Num>95) {
        document.getElementById('q2Grade')
      .innerHTML =  "A";
      } else if (q2Num>85) {
           document.getElementById('q2Grade')
      .innerHTML =  "B";		
      } else if(q2Num>75){
          document.getElementById('q2Grade')
          .innerHTML =  "C";	

      } else if(q2Num>65){
          document.getElementById('q2Grade')
          .innerHTML =  "D";		
      }else{
          document.getElementById('q2Grade')
      .innerHTML =  "F";
      }

    document.getElementById('p3Num').innerHTML =  p3Num;
    console.log('p3Num');

    if (p3Num>95) {
        document.getElementById('p3Grade')
      .innerHTML =  "A";
      } else if (p3Num>85) {
           document.getElementById('p3Grade')
      .innerHTML =  "B";		
      } else if(p3Num>75){
          document.getElementById('p3Grade')
          .innerHTML =  "C";	

      } else if(p3Num>65){
          document.getElementById('p3Grade')
          .innerHTML =  "D";		
      }else{
          document.getElementById('p3Grade')
      .innerHTML =  "F";
      }

    document.getElementById('q3Num').innerHTML =  p1Num;
    console.log('q3Num');
    
    if (q3Num>95) {
        document.getElementById('q3Grade')
      .innerHTML =  "A";
      } else if (q3Num>85) {
           document.getElementById('q3Grade')
      .innerHTML =  "B";		
      } else if(q3Num>75){
          document.getElementById('q3Grade')
          .innerHTML =  "C";	

      } else if(q3Num>65){
          document.getElementById('q3Grade')
          .innerHTML =  "D";		
      }else{
          document.getElementById('q3Grade')
      .innerHTML =  "F";
      }
}


