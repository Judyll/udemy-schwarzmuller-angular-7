import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s5-app',
  templateUrl: './s5-app.component.html',
  styleUrls: ['./s5-app.component.css']
})
export class S5AppComponent implements OnInit {
  // We are not defining an object type here.  We are just
  // assigning new key/value pair to our serverElements object
  // since we are on the right side of the euqal sign
  serverElements = [
    {type: 'server', name: 'Testserver', content: 'Just a test!'},
    {type: 'blueprint', name: 'TestBlueprint', content: 'Just a test!'}
  ];

  constructor() { }

  ngOnInit() {
  }

  // We are adding the parameter 'serverData' and specifying
  // its type with properties serverName and serverContent
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // We are adding the parameter 'blueprintData' and specifying
  // its type with properties serverName and serverContent
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
