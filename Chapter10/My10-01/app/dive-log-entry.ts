export class DiveLogEntry {
  site: string;
  location: string;
  depth: number;
  time: number;
  divedOn: Date;
  paid: number;

  static StockDives: DiveLogEntry[] = [
    {
      site: 'Abu Gotta Ramada',
      location: 'Hurghada, Egypt',
      depth: 72,
      time: 54,
      divedOn: new Date("9/27/2012 11:25"),
      paid: 23.321
    },
    {
      site: 'Ponte Mahoon',
      location: 'Maehbourg, Mauritius',
      depth: 54,
      time: 38,
      divedOn: new Date("01/18/2009")
      ,paid:345.567
    },
    {
      site: 'Ponte Mahoon2',
      location: 'Maehbourg, Mauritius',
      depth: 54,
      time: 38,
      divedOn: new Date("01/18/3409")
      ,paid:5.567
    },
    {
      site: 'Molnar Cave',
      location: 'Budapest, Hungary',
      depth: 98,
      time: 62,
      divedOn: new Date("12/7/2008 00:00")
      ,paid: 189847.6787
    }];


}//DiveLogEntry
