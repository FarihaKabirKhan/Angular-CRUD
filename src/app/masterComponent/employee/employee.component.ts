import { CommonModule } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule,FormsModule],
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
startName:string="kari";
MyFatherName=signal("Ahmed");

constructor(){

}
showAlert(message:string){
  alert(message)

}
changeCourse(){
  this.employName='Khan'
  this.MyFatherName.set("Chaiton")
}

//Structure Directive
isDivVisible:boolean=true;
isDiv2Visible:boolean=true;


ShowDiv1(){
this.isDivVisible=true;
}
HideDiv1(){
  this.isDivVisible=false;
  }

  Toggle(){
    this.isDiv2Visible=!this.isDiv2Visible;
    // if(this.isDiv2Visible=true){
      // this.isDiv2Visible=false;

    // }else{
      // this.isDiv2Visible=true;
    // }
  }

  num1:string='';
  num2:string='';
  isActive:boolean=false;
  SelectedState:string='';


  //ngFor

  cityArray:string[]=['Dhaka','Mym','Shy','Chitta']
}


