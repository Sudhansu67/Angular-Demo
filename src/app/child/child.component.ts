import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public name:string = 'Sudhansu (Silu)';
  public imageSrc:string = 'http://lorempixel.com/400/200/';
  

  constructor() { }

  ngOnInit() {}

}
