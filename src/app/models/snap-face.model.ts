export class SnapFace {
    constructor(
        public titre:string,
        public description: string,
        public imageUrl: string,
        public date: Date,
        public like: number
    ) {}
    
}

/* Méthode classique
export class SnapFace {
    titre: string;
    description: string;
    date: Date;
    like: number;
    imageUrl: string;

    constructor(titre: string, description: string, date: Date, like: number, imageUrl: string) {
        this.titre = titre;
        this.description = description;
        this.date = date;
        this.like = like;
        this.imageUrl = imageUrl;
    }
}
*/
