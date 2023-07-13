import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskComponent } from './task/task.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [TaskComponent],
    imports: [CommonModule, MatCheckboxModule, MatIconModule],
    exports: [TaskComponent],
})
export class SharedModule {}
