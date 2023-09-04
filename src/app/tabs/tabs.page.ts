import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class TabsPage implements OnInit {

  selectedTab: any;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
    const tabButton = document.querySelector(`ion-tab-button[tab="${this.selectedTab}"]`);
    const fadeInAnimation = this.createFadeInAnimation(tabButton as HTMLElement);
    fadeInAnimation.keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 1, transform: 'scale(1)' }
    ]);
    fadeInAnimation.play();
  }

  private createFadeInAnimation(baseEl: HTMLElement) {
    return this.animationCtrl.create()
      .addElement(baseEl)
      .duration(300)
      .easing('ease-in-out');
      // .fromTo('opacity', '0', '1');
  }

}
