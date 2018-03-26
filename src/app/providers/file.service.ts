import { IFile } from './../interfaces/IFile';
import { Injectable } from '@angular/core';
@Injectable()
export class FileService {
    constructor() {
        this.files = this.getFiles();
    }
    public files: IFile[] = [];
    getFiles(): IFile[] {
        return [{
            name: 'Angular',
            modified: new Date(Date.now()),
            members: ['Kian', 'Hue'],
            type: 'folder'
        }, {
            name: 'Janeto Intro',
            modified: new Date(Date.now()),
            members: ['Kha', 'Linh', 'Dai', 'Huy'],
            type: 'folder'
        }, {
            name: 'Nodejs',
            modified: new Date(Date.now()),
            members: ['Khanh', 'Huy'],
            type: 'docx'
        }];
    }

    search(keyword: String) {
        return this.files.filter(f =>
            f.name
                .toLowerCase()
                .includes(
                keyword.toLowerCase()
                )
        );
    }
}
