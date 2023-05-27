import { student } from "src/student";

export class studentservice{
   public getstudentsData(){
    let students:student[];
    students=[
        new student(1,'sneha','cse',89),
        new student(2,'keerthi','eee',85),
        new student(3,'deepthi','ece',90),
        new student(4,'nidhi','mech',95),
        new student(5,'kohil','civil',75)
    ]
    return students;
   }
   public getAdmin(){
    return{username:'admin@angular',password:'12345'}
   }
   public getstudent(){
    return {username:'student@angular',password:'12345'}
   }
}