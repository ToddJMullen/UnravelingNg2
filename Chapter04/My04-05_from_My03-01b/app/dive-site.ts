export class DiveSite {
    id: number;
    name: string;
	maxDepth: number;

    static FavoriteSites: DiveSite[] = [
        { id: 1, name: 'Shaab El Erg', maxDepth: 123},
        { id: 2, name: 'Abu Gotta Ramada', maxDepth: 452},
        { id: 3, name: 'El Arouk', maxDepth: 34},
        { id: 4, name: 'Small Giftun', maxDepth: 87}
    ];
}
