import { Component } from '@angular/core';

@Component({
  selector: 'app-basiscs-page',
  templateUrl: './basiscs-page.component.html',
})
export class BasiscsPageComponent {

  public nameLower: string = 'Jesús'
  public nameUpper: string = 'JESUS'
  public fullName: string = 'JeSÚs lÁzaRO'
  public customDate: Date = new Date();

}
