export class DiveLogEntry{

  site: string;
  location: string;
  depth: number;
  time: number;

//this *was* copy/pasted because typing this stuff isn't learning either! =b
  static StockDives: DiveLogEntry[] = [
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
  }];

}//DiveLogEntry
