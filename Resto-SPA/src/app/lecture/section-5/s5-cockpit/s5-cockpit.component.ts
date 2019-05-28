import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-s5-cockpit',
  templateUrl: './s5-cockpit.component.html',
  styleUrls: ['./s5-cockpit.component.css']
})
export class S5CockpitComponent implements OnInit {
  // We are specifying the 'serverCreated' property as an event
  // by using the new EventEmitter class and specifying its
  // type as serverName and serverContent. This is the type
  // of the object that will be passed in the $event when the
  // serverCreated event is called.  Ex. s5-app.component.html
  // We are adding the @Output directive because we are passing
  // something outside the component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
