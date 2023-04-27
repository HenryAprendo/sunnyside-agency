import { Component, Input } from '@angular/core';
import { Clients} from './../../utils/clients';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent {

  @Input() client:Clients = {
    id: 0,
    name: '',
    description: '',
    image: '',
    work: ''
  }

}
