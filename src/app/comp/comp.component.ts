import { Component, Input } from '@angular/core';
import { driver } from '../../driver';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp',
  imports: [CommonModule],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  @Input()
  vozac:driver | undefined;
  
  @Input()
  indks:Number | undefined;

  
  onDrvView() {
    //console.log("u clicked me")

    let link: string | undefined; //or var link=''; javascript notacija
    if(this.vozac?.iconUrl){
      link=this.vozac?.iconUrl;
    }else{
      link="https://www.google.com"
    }

    window.open(link, "_blank")

  }

  klasi() {
    return {
      'begin': true,
      'adv': this.vozac?.category === "EXPERT",
      //'undr': true
      'undr': this.vozac?.category == "EXPERT"
    }
  }

  stilovi() {
    return { 'undr': this.vozac?.category == "EXPERT" }
  }

}
