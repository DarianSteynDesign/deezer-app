export default class TopArtistModel {
    public id!: number;
    public link!: string;
    public name!: string;
    public picture!: string;
    public picture_big!: string;
    public picture_medium!: string;
    public picture_small!: string;
    public picture_xl!: string;
    public position!: number;
    public radio!: boolean;
    public tracklist!: string;
    public type!: string;
}

export class ResponseModel {
    public data!: Array<any>;
    public total!: number;
}