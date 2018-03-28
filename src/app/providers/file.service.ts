import { IFile } from './../interfaces/IFile';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class FileService {
    private _files: BehaviorSubject<IFile[]> = new BehaviorSubject([]);

    constructor(private http: HttpClient) {
    }

    get files() {
        return this._files.asObservable();
    }
    getFiles(query?) {
        const body = query ? query : {
            search: '',
            parentId: 'root'
        };
        this.http.post('http://fisa.lexuanquynh.com/api/file/find', body)
        .subscribe((files: any[]) => {
            files.map(f => {
                f.type = f.isFile ? 'file' : 'folder';
                return f;
            });
            this._files.next(files);
        });
    }

    search(keyword: String) {
        // return this.getFiles().filter(f =>
        //     f.name
        //         .toLowerCase()
        //         .includes(
        //         keyword.toLowerCase()
        //         )
        // );
    }

    addFolder(folder: IFile) {
        this._files.getValue().push(folder);
        const newFiles = this._files.getValue();
        this._files.next(newFiles);
    }
}
