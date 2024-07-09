import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

//string,boolean,number,date

employName:string="Fariha";
inputType="checkbox";
enpId:number=123;
isBangladeshi:boolean=true;
currentDate:Date=new Date();
myClass:string="bg-primary";


constructor(){

}
showAlert(message:string){
  alert(message)

}
changeCourse(){
  this.employName='Khan'
}
}


