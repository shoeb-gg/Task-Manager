import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../shared/shared.module';
import { AllTasksComponent } from './all-tasks/all-tasks.component';

@NgModule({
  declarations: [ManagerComponent, AllTasksComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
  ],
})
export class ManagerModule {}
