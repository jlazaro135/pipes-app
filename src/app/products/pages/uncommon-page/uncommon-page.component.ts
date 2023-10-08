import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect

  public name : string = "Jesús";
  public gender : 'male' | 'female' | 'other ' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    this.name = 'Silvia',
    this.gender = 'female'
  }

  //i18nPlurarl
  public clients: string[] = ['Silvia', 'Jesús', 'Roberto', 'Chico', 'Peque', 'Burgo', 'Filipo'];
  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    'other': 'Tenemos # clientes esperando.'
  }

  deleteLast(){
    this.clients.shift();
  }

  //keyValue Pipe

  public person = {
    name: 'Jesús',
    age: 30,
    address: 'Granada'
  }

  //AsyncPipe Pipe

  public myObservableTimer = interval(1000)
  .pipe(
    tap(i => console.log(i))
  );

}
