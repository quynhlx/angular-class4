import { Component } from '@angular/core';
import { IFile } from '../../interfaces/IFile';

@Component({
    selector: 'app-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss']
})

export class ContainerComponent {
    company: String = 'Janeto';
    now: Date = new Date(Date.now());
    folder: String = 'Home';
    constructor() {
    }

    changeFolder(name: string) {
        this.folder = name;
    }
}


