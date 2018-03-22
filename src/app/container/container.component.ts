import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.css']
})

export class ContainerComponent {
    company: String = 'Janeto';
    now: Date = new Date(Date.now());
    imgUrl: String = 'assets/logo-white.png';
    textValue: String = 'Janeto';
    files: any[] = [{
        name: 'Angular',
        modified: new Date(Date.now()),
        members: ['Kian', 'Hue'],
        type: 'folder'
    }, {
        name: 'Janeto Intro',
        modified: new Date(Date.now()),
        members: ['Kha', 'Linh'],
        type: 'folder'
    }, {
        name: 'Nodejs',
        modified: new Date(Date.now()),
        members: ['Khanh', 'Huy'],
        type: 'docx'
    }];
    folder: String = 'Home';
    constructor() { }

    changeImage() {
        this.imgUrl = this.imgUrl === 'assets/logo-janeto.png'
            ? 'assets/logo-white.png' : 'assets/logo-janeto.png';
    }

    changeText(value) {
        console.log(value);
    }

    check() {
        console.log(this.company);
    }

    changeFolder(name) {
        this.folder = name;
    }
}
