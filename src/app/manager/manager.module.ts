import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';
import { AllTasksComponent } from './tasks-list/tasks-list.component';

@NgModule({
    declarations: [ManagerComponent, AllTasksComponent],
    imports: [
        CommonModule,
        ManagerRoutingModule,
        FormsModule,
        SharedModule,
        MatTabsModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
})
export class ManagerModule {}
