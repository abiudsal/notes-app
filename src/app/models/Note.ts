export class Note{
    constructor(
        public id: number,
        public title: string,
        public body: string,
        public color: number,
        public pinned: boolean = false,
        public fav: boolean = false,
        public deleted: boolean = false,
    ){}
}