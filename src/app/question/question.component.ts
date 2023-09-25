import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  constructor(private fb: FormBuilder) {
    this.getForm();
    // console.log(this.mainForm?.value.checks);
  }
 
  value: any;
  showArea = false;
  showCheck = false;
  showData = true;
  form: any;
  mainForm: any;
  data!: any;
  data1: any = [];
  newArray: any = [];
  mainData: any = [];
  noOfOptions: any = [];
  options: any = [];
 
  ngOnInit(): void {
    this.form = this.fb.group({
      id: [],
      dropdown: [""],
      qarea: [""],
      qcheck:[],
      options: []
    })

    this.mainForm = this.fb.group({
        qarea:[""],
        qcheck:[""],
        answer: [""],
        checkAnswers  :this.fb.array([])
    })
  }

  onChangeCheckbox(event: any) {
    console.log(event.target.checked)
   
    if (event.target.checked == true) {
      this.newArray.push(event.target.name);
    }
    else{
      this.newArray.pop();
    }
    // console.log(this.newArray);
  }

  change() {
    if (this.form.value.dropdown === "checkbox") {
      this.showArea = false;
      this.showCheck = true;
    } else {
      this.showCheck = false;
      this.showArea = true;
    }
  }


  incOptions() {
    this.options.push(this.value);
    this.value = null;
    // console.log(this.options, this.value)
  }

  addForm() {
    if (this.value) {
      this.options.push(this.value);
      this.form.value.options = this.options;
    }
    this.data1.push(this.form.value);
    console.log(this.data1)
    localStorage.setItem("data", JSON.stringify(this.data1));
    this.getForm();
    this.options = [];
    this.value = null;
    this.form.reset();
  }

  getForm() {
    this.data = JSON.parse(localStorage.getItem("data")!);
  }

  saveData() {
    var qarea= this.data.map( (a:any) => a.qarea);
    this.mainForm.value.qarea = qarea;
    var qcheck= this.data.map( (a:any) => a.qcheck);
    this.mainForm.value.qcheck = qcheck;
    this.mainForm.value.checkAnswers = this.newArray;
    this.mainData.push(this.mainForm.value);
    // console.log(this.mainForm.value)
    localStorage.setItem("mainData", JSON.stringify(this.mainData));
  }

  isCheckbox() {
    return this.form.value.dropdown === "checkbox"
  }

}






