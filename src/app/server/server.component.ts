import {Component} from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
    `
  ]
})

export class ServerComponent {
  public serverId: Number;
  public serverStatus:string;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverId = Math.floor(Math.random() * 100);
  }

  getColor() {
    return this.serverStatus === 'online'? 'green' : 'red';
  }
}
