import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class EmptyScreenComponent implements OnInit {

  @Input() title!: string;
  @Input() image: any;

  constructor() { }

  ngOnInit() {}

}
