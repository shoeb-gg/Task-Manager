import { Component } from '@angular/core';

import { TaskModel } from 'src/app/models/task.model';

@Component({
    selector: 'app-all-tasks',
    templateUrl: './all-tasks.component.html',
    styleUrls: ['./all-tasks.component.scss'],
})
export class AllTasksComponent {
    public task: TaskModel = {
        id: 0,
        name: 'A Sample Task Name',
        priority: 'High',
        complete: true,
    };
}
