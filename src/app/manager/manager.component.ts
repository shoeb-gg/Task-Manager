import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { TaskService } from '../services/task.service';
import { TaskModel } from '../models/task.model';
import { NewTaskComponent } from '../shared/dialog/new-task/new-task.component';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent {
    public tabSelection: number = 0;

    public username: string;

    public allTasks: TaskModel[];
    public completed: TaskModel[];
    public incomplete: TaskModel[];

    constructor(public taskService: TaskService, private dialog: MatDialog) {
        this.taskService.tasks$.subscribe((t) => {
            this.allTasks = t;
            this.completed = t.filter((val) => val.complete);
            this.incomplete = t.filter((val) => !val.complete);
        });

        this.taskService.updateFlag$.subscribe((v) => {
            this.saveTasks();
        });
    }

    openNewTaskDialog() {
        const dialog = this.dialog.open(NewTaskComponent, {
            data: 'HI',
            width: '80vw',
            maxWidth: '100vw',
            height: '52vh',
            autoFocus: false,
            disableClose: false,
            hasBackdrop: true,
            backdropClass: 'backdropBackground',
            panelClass: 'cust-dialog',
        });

        dialog.afterClosed().subscribe((r) => {
            if (r) {
                this.saveTasks();
            }
        });
    }

    loadTasks() {
        console.log(this.username);
        this.taskService.loadTasks(this.username).subscribe((r: any) => {
            if (r) {
                this.taskService.tasks$.next(r);
            }
        });
    }

    saveTasks() {
        const body = JSON.stringify(this.allTasks);
        console.log(body);

        this.taskService.saveTasks(this.username, body).subscribe((r) => {
            if (r) {
                this.loadTasks();
            }
        });
    }
}
