import { Component } from '@angular/core';
import { Color, Hero } from '../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: 'rojo'
    },
    {
      name: 'Batman',
      canFly: false,
      color: 'rojo'
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: 'azul'
    },
    {
      name: 'Hércules',
      canFly: true,
      color: 'negro'
    },
    {
      name: 'Robbin',
      canFly: false,
      color: 'verde'
    },
  ]

  toggleUpperCase(){

    this.isUpperCase = !this.isUpperCase

  }


  changeOrder(value: keyof Hero) {

    this.orderBy = value;

  }

}
