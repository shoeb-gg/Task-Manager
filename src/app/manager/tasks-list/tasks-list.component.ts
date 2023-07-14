import { Component, Input } from '@angular/core';

import { TaskModel } from 'src/app/models/task.model';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.scss'],
})
export class AllTasksComponent {
    @Input() tasks: TaskModel[] | null;
}
