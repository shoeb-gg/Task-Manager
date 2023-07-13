import { Component, Input } from '@angular/core';

import { TaskModel } from 'src/app/models/task.model';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
    @Input() task: TaskModel;
}
