import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

import { TaskModel } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnDestroy {
    private _unsubscribeAll: Subject<void> = new Subject<void>();

    constructor(
        public taskService: TaskService,
        public dialogRef: MatDialogRef<NewTaskComponent>
    ) {
        this.taskService.tasks$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((t) => {
                this.prevTasks = t;
            });
    }

    public prevTasks: TaskModel[];
    public priority = 'Low';
    public taskName = '';

    createTask() {
        this.prevTasks.push({
            id: this.prevTasks.length,
            name: this.taskName,
            priority: this.priority,
            complete: false,
        });
        this.taskService.tasks$.next(this.prevTasks);
        this.dialogRef.close(null);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
