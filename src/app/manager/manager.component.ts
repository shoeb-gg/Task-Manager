import { Component } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent {
  public tabSelection: number = 0;

  setSelectedTab(flag: boolean): void {
    if (flag) {
      this.tabSelection++;
    }
  }

  setTabIndex(index: any) {
    this.tabSelection = index.index;
  }
}
