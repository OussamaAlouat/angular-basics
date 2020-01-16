import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  public allowNewServer: boolean;
  public serverCreationStatus: string;
  public serverName:string;
  public serverCreated: boolean;

  constructor() {
    this.allowNewServer = true;
    this.serverCreationStatus = 'No server was created!';
    this.serverName = '';
    this.serverCreated = false;
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName ;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
