export interface IFile {
    _id?: string;
    name: string;
    modified: Date;
    members: string[];
    type: string;
}
