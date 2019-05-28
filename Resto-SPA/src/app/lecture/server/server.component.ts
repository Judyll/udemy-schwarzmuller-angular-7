import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  allowNewServer = false;
  serverName = '';
  showNotification = false;
  servers = [];
  serverStatuses = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    if (this.serverName.trim().length <= 0) {
      this.showNotification = false;
    } else {
      this.showNotification = true;
      this.servers.push(this.serverName);
      this.serverStatuses.push(Math.random() > 0.5 ?
      'online' : 'offline');
    }
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

    if (this.serverName.trim().length <= 0) {
      this.showNotification = false;
    }
  }
}
