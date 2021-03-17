export interface Bullet {
    bulletText: string;
    checked: boolean;
    bulletID: number;
    _id?: string;
}

export interface Note {
    owner: string;
    title: string;
    content: string;
    bullets: Bullet[];
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
