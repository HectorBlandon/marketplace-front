import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders = [
    { number: '3258', date: 'Marzo 29, 2018', status: 'Completada', total: '$140.000,00 - 2 productos', invoice: true },
    { number: '3145', date: 'Febrero 14, 2018', status: 'En espera', total: '$255.000,99 - 1 producto', invoice: false },
    { number: '2972', date: 'Enero 7, 2018', status: 'En proceso', total: '$255.000,99 - 1 producto', invoice: true },
    { number: '2971', date: 'Enero 5, 2018', status: 'Completada', total: '$73.000,00 - 1 producto', invoice: true },
    { number: '1981', date: 'Diciembre 24, 2017', status: 'Pago pendientet', total: '$285.000,00 - 2 productos', invoice: false },
    { number: '1781', date: 'Septiembre 3, 2017', status: 'Cancelada', total: '$49.000,00 - 2 productos', invoice: false }
  ]
  constructor() { }

  ngOnInit() {
  }

}
