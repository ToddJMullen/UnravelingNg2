export class DiveEntry{
    site:string;
    location:string;
    depth:number;
    time:number;

    static stockDivesAry:DiveEntry[] = [
        {
            site: 'Abu Gotta Ramada',
            location: 'Hurghada, Egypt',
            depth: 72,
            time: 54
        },
        {
            site: 'Ponte Mahoon',
            location: 'Maehbourg, Mauritius',
            depth: 54,
            time: 38
        },
        {
            site: 'Molnar Cave',
            location: 'Budapest, Hungary',
            depth: 98,
            time: 62
        },
        {
          site: 'Moodives',
          location: 'Japam, Montaca',
          depth: 254,
          time: 81
        }
    ];
    
}//DiveEntry