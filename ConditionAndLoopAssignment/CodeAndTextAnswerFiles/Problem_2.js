/* Question:
Write a program that grades students based on their marks.
 If greater than 90 then A Grade
 If between 70 and 90 then a B grade
 If between 50 and 70 then a C grade
 Below 50 then F grade
*/

let marks = 70;

if(marks>90){
    console.log("A grade");
} else if(marks<=90 && marks>=70){
    console.log("B grade");
} else if(marks<=70 && marks>=50){
    console.log("C grade");
} else if(marks<50){
    console.log("F grade");
}