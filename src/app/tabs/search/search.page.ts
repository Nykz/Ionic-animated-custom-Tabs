import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EmptyScreenComponent } from 'src/app/components/empty-screen/empty-screen.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, EmptyScreenComponent]
})
export class SearchPage implements OnInit {

  query!: string;
  shops: any[] = [];
  allShops: any[] = [];

  constructor() { }

  ngOnInit() {
    this.allShops = [
      { id: 1, name: 'Crimson Valley', categories: ['Indian', 'Chinese'], location: 'Vasantkunj, Delhi', delivery_time: 30, img: 'shop2.jpg' },
      { id: 2, name: 'Monsoon Meals', categories: ['North Indian', 'Chinese', 'South Indian'], location: 'Karol Bagh, Delhi', delivery_time: 20, img: 'shop2.jpg' },
      { id: 3, name: 'Life Pharmacy', location: 'Vasantkunj, Delhi', delivery_time: 10, img: 'med2.jpg' },
    ];
  }

  async onSearchChange(event: any) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch() {
    this.shops = [];
    if(this.query.length > 0) {
      this.shops = this.allShops.filter((d) => {
        return d.name.toLowerCase().indexOf(this.query) !== -1 || !this.query;
      });
    }
  }

  getCategories(array: any) {
    return array.join(', ');
  } 

}