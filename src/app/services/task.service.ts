import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { TaskModel } from '../models/task.model';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    constructor(private readonly http: HttpClient) {}
    private baseUrl = 'https://redis-task-manager-server.onrender.com/tasks/';

    public tasks$ = new BehaviorSubject<TaskModel[]>([]);
    public updateFlag$ = new BehaviorSubject<any>(false);

    loadTasks(username: string) {
        return this.http.get(this.baseUrl + username);
    }

    saveTasks(username: string, body: string) {
        return this.http.post(this.baseUrl + username, body);
    }
}
