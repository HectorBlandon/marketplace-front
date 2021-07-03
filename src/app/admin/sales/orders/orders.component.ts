import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders = [
    { number: '3258', date: 'Marzo 29, 2018', status: 'Terminado', total: '$140.000,00 - 2 Productos', invoice: true },
    { number: '3145', date: 'Febrero 14, 2018', status: 'En espera', total: '$255.000,99 - 1 Producto', invoice: false },
    { number: '2972', date: 'Enero 7, 2018', status: 'Procesando', total: '$255.000,99 - 1 Producto', invoice: true },
    { number: '2971', date: 'Enero 5, 2018', status: 'Terminado', total: '$73.000,00 - 1 Producto', invoice: true },
    { number: '1981', date: 'Diciembre 24, 2017', status: 'Pago pendiente', total: '$285.000,00 - 2 Productos', invoice: false },
    { number: '1781', date: 'Septiembre 3, 2017', status: 'Rechazado', total: '$49.000,00 - 2 Productos', invoice: false }, 
    { number: '3981', date: 'Diciembre 24, 2017', status: 'Pago pendiente', total: '$285.000,00 - 2 Productos', invoice: false },
    { number: '5781', date: 'Septiembre 3, 2017', status: 'Rechazado', total: '$49.000,00 - 2 Productos', invoice: false },
    { number: '6258', date: 'Marzo 22, 2019', status: 'Terminado', total: '$140.000,00 - 2 Productos', invoice: true },
    { number: '7145', date: 'Febrero 14, 2020', status: 'En espera', total: '$255.000,99 - 1 Producto', invoice: false },
    { number: '1972', date: 'Enero 10, 2018', status: 'Procesando', total: '$255.000,99 - 1 Producto', invoice: true },
    { number: '8971', date: 'October 3, 2019', status: 'Terminado', total: '$73.000,00 - 1 Producto', invoice: true }
  ]
  public page: any;
  public count = 6;
  constructor() { }

  ngOnInit(): void {
  }

  public onPageChanged(event){
    this.page = event; 
    window.scrollTo(0,0); 
  }

}
