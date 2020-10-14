import { Component } from '@angular/core';

import { Employee } from './modelo/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Formularios';

  employeeArray: Employee[] = [
    {id: 1, name: "Lupis", country: "México"},
    {id: 2, name: "Ary", country: "Venezuela"},
    {id: 3, name: "Becca", country: "Inglaterra"}
  ];

  selectedEmployee: Employee = new Employee();

  addOrEdit(){
    if(this.selectedEmployee.id === 0){ // if id es igual a 0, then vamos a guardar algo
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }



    this.selectedEmployee = new Employee(); // Para que se limpie el formulario
  }

  // method para editar employee
  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }

  // event delete
  eliminar(){
    if(confirm('Are you sure yo want to delete it?')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee); // filter recorremos el Array
      this.selectedEmployee = new Employee();
    }
  }
}
