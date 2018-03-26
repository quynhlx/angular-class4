import { IFile } from './../interfaces/IFile';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class FileService {
    private _files: BehaviorSubject<IFile[]> = new BehaviorSubject([]);

    constructor() {
        this._files.next(this.getFiles());
    }

    get files() {
        return this._files.asObservable();
    }
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
        return this.getFiles().filter(f =>
            f.name
                .toLowerCase()
                .includes(
                keyword.toLowerCase()
                )
        );
    }

    addFolder(folder: IFile) {
        this._files.getValue().push(folder);
        const newFiles = this._files.getValue();
        this._files.next(newFiles);
    }
}
