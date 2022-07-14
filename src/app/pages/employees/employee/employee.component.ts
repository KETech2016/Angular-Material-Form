import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
  }

  departments = [
    {id:1, value: "department 1"},
    {id:2, value: "department 2"},
    {id:3, value: "department 3"}];

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
