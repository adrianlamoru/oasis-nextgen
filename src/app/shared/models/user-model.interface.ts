export interface IChangeUserModel {
    currentUsername: string;
    newUsername: string;
}

export class EmptyChangeUserModel implements IChangeUserModel {
    currentUsername: string;
    newUsername: string;

    constructor() {
        this.currentUsername= '';
        this.newUsername = '';
    }
}
