import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
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
}


