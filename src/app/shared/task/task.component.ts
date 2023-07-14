import { Component, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

import { TaskModel } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnDestroy {
    @Input() task: TaskModel;
    private _unsubscribeAll: Subject<void> = new Subject<void>();

    public tasksList: TaskModel[];

    constructor(public taskService: TaskService) {}

    checkboxListener(event: any) {
        const sub = this.taskService.tasks$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((t) => {
                this.tasksList = t;

                this.tasksList.forEach((val) => {
                    if (val.id === this.task.id) {
                        val.complete = event.checked;
                    }
                });
            });

        this.taskService.tasks$.next(this.tasksList);
        sub.unsubscribe();
    }

    deleteTask(id: number) {
        console.log(id);
        const sub = this.taskService.tasks$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((t) => {
                this.tasksList = t;

                this.tasksList = this.tasksList.filter((val) => val.id !== id);
            });

        this.taskService.tasks$.next(this.tasksList);
        sub.unsubscribe();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
