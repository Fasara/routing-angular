import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
   }

  ngOnInit(): void {
  }

}
