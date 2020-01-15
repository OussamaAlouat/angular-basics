import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  public allowNewServer: boolean;
  public serverCreationStatus: string;
  constructor() {
    this.allowNewServer = true;
    this.serverCreationStatus = 'No server was created!';
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }
}
