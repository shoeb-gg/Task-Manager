import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task/task.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { NewTaskComponent } from './dialog/new-task/new-task.component';

@NgModule({
    declarations: [TaskComponent, NewTaskComponent],
    imports: [CommonModule, MatCheckboxModule, MatIconModule, FormsModule],
    exports: [TaskComponent],
})
export class SharedModule {}
