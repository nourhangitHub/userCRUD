import { Component, OnInit } from '@angular/core';
import { Home} from '../module/home.module';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { SharedserviceService} from '../services/sharedservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataServie:SharedserviceService;

 home = new Home();
 homeArray =[];
 title = "Submit";
 activeIndex = -1;
 myForm = new FormGroup({
  fristName : new FormControl('',[Validators.required]),
  lastName  : new FormControl('',[Validators.required]),
  email     : new FormControl('',[Validators.required ,Validators.email])
 })

  constructor( private SharedserviceService:SharedserviceService) { }

  ngOnInit() {
     this.dataServie = this.SharedserviceService;
     console.log(this.dataServie);
  }
  
  onsubmit(){
  if(this.activeIndex==-1){
    if(this.myForm.valid){
     event.preventDefault();
      this.homeArray.push(this.home);
      console.log("form submitting",this.myForm.value);
      this.home = new Home();
    }
    // this.myForm.reset();
    // //alert(JSON.stringify(this.homeArray));
  }
  else{
    event.preventDefault();
   this.homeArray.splice(this.activeIndex,1,this.home);
  }
  this.home = new Home(); 
  this.title="Sumit";
  this.activeIndex=-1;
  event.preventDefault();

  }

  delete(i){
    event.preventDefault();
    this.homeArray.splice(i);
   // console.log(i);
  }

  edit(user,i){
    this.title = "Update"
    this.activeIndex = i;
    this.home = user;
    event.preventDefault();
    console.log(user)
  }

}
