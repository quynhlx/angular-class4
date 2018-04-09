import { IFile } from './../interfaces/IFile';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class FileService {
    private _files: BehaviorSubject<IFile[]> = new BehaviorSubject([]);
    constructor(private http: HttpClient, private toastr: ToastrService) {
      console.log('create file service');
    }

    get files() {
        return this._files.asObservable();
    }
    getFiles(query?): any {
        const body = query ? query : {
            search: '',
            parentId: 'root'
        };
        this.http.post('http://fisa.lexuanquynh.com/api/file/find', body)
            .map((files: any[]) => {
                return files.map(f => {
                    f.type = f.isFile ? 'file' : 'folder';
                    return f;
                });
            }).do((files: IFile[]) => {
                this._files.next(files);
            }).subscribe(() => {
                this.toastr.success('Successfuly', '');
            }, (error) => {
                this.toastr.error('Error', 'Something wrong');
            });
    }
    handleError(error: Response) {

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
