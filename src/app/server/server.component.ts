import {Component} from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  public serverId: Number;
  public serverStatus:string;

  constructor() {
    this.serverStatus = 'offline';
    this.serverId = 10;
  }
}
