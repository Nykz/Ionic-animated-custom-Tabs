import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuPage implements OnInit {

  options: any[] = [];

  constructor() { }

  ngOnInit() {
    this.options = [
      { id: 1, name: 'Saved Addresses', img: 'address.png' },
      { id: 2, name: 'Jokar Pass', img: 'pass.png' },
      { id: 3, name: 'Refer a friend', icon: 'share-social', color: 'primary' },
      { id: 4, name: 'Support', img: 'life-guard.png' },
      { id: 5, name: 'About', icon: 'information' },
      { id: 6, name: 'Logout', icon: 'power', color: 'danger' },
    ];
  }

}
