import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class WalletPage implements OnInit {

  transactions: any[] = [];

  constructor() { }

  ngOnInit() {
    this.transactions = [
      { id: 1, amount: 500.00, amount_added: true, date: '05/01/23', purpose: 'JOKAR PASS' },
      { id: 2, amount: 320.50, amount_added: false, date: '04/01/23', purpose: 'ORDER #12340' },
      { id: 3, amount: 300.00, amount_added: true, date: '04/01/23', purpose: 'TOPUP', transaction_id: '128573333' },
      { id: 4, amount: 320.50, amount_added: false, date: '02/01/23', purpose: 'ORDER #12335' },
      { id: 5, amount: 320.50, amount_added: false, date: '02/01/23', purpose: 'ORDER #12330' },
      { id: 6, amount: 500.00, amount_added: true, date: '01/01/23', purpose: 'JOKAR PASS' },
    ];
  }

}
