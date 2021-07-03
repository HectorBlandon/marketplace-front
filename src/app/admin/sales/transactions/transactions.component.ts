import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  public transactions = [
    { orderId: '2121', transactionId: '78245214510', date: 'Marzo 29, 2018', paymentMethod: 'Tarjeta credito', status: 'En Proceso', amount: '$140.000,00' },
    { orderId: '7255', transactionId: '58272854525', date: 'Enero 7, 2018', paymentMethod: 'Paypal', status: 'Pediente', amount: '$855.000,00' },
    { orderId: '4122', transactionId: '48266987452', date: 'Diciembre 24, 2017', paymentMethod: 'Paypal', status: 'Entregado', amount: '$420.000,00' },
    { orderId: '4534', transactionId: '43567578223', date: 'Marzo 29, 2018', paymentMethod: 'Tarjeta credito', status: 'En Proceso', amount: '$140.000,00' },
    { orderId: '6512', transactionId: '54129964355', date: 'October 7, 2018', paymentMethod: 'Paypal', status: 'Pediente', amount: '$952.000,00' },
    { orderId: '2345', transactionId: '75208924544', date: 'Diciembre 24, 2017', paymentMethod: 'Tarjeta credito', status: 'Entregado', amount: '$45.000,00' },
    { orderId: '1255', transactionId: '72113456734', date: 'October 2, 2019', paymentMethod: 'Tarjeta credito', status: 'Entregado', amount: '$140.000,00' },
    { orderId: '8854', transactionId: '96455673452', date: 'Enero 7, 2018', paymentMethod: 'Paypal', status: 'Pediente', amount: '$225.000,00' },
    { orderId: '9712', transactionId: '85643112647', date: 'Diciembre 24, 2017', paymentMethod: 'Tarjeta credito', status: 'Entregado', amount: '$540.000,00' },
    { orderId: '7342', transactionId: '95534768943', date: 'Marzo 29, 2018', paymentMethod: 'Tarjeta credito', status: 'Pediente', amount: '$140.000,00' },
    { orderId: '5414', transactionId: '34861354666', date: 'October 7, 2018', paymentMethod: 'Paypal', status: 'Pediente', amount: '$475.000,00' },
    { orderId: '8906', transactionId: '23756748667', date: 'Noviembre 2, 2017', paymentMethod: 'Paypal', status: 'Entregado', amount: '$420.000,00' }
  ]
  public page: any;
  public count = 6;
  constructor() { }

  ngOnInit(): void {
  }

  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

}
