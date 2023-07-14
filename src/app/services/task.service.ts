import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { TaskModel } from '../models/task.model';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    public tasks: TaskModel[] = [
        {
            id: 0,
            name: 'A Sample Task Name',
            priority: 'High',
            complete: true,
        },
        {
            id: 1,
            name: 'Second Task',
            priority: 'Medium',
            complete: false,
        },
        {
            id: 2,
            name: 'Create Login UI',
            priority: 'Low',
            complete: true,
        },
    ];

    public tasks$ = new BehaviorSubject<TaskModel[]>(this.tasks);
}
