import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-s5-server',
  templateUrl: './s5-server.component.html',
  styleUrls: ['./s5-server.component.css']
})
export class S5ServerComponent implements OnInit {
  // This is another way of defining a type for an object
  // to make sure this object will only have this type.
  // This is a type-script syntax
  // We are using the @Input directive since we are
  // passing something to the component
  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
