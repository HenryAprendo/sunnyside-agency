import { Component } from '@angular/core';
import { Clients, clientsList } from './../../utils/clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  clients: Clients[] = clientsList.slice();

}
