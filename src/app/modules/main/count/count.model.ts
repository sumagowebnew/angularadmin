export class PortDet{
    SrNo:number=0;
    StatusAction:Boolean=false;
    Client:number=0;
    Projects:number=0;
    CupOfCoffee:number=0;
    awardsWin:number=0;
    Date:string='';
}export class Count {
    id: number;
    clients: number;
    projects: number;
    cupOfCoffee: number;
    awardsWin: number;
    date: Date;
  
    constructor(
      id: number,
      clients: number,
      projects: number,
      cupOfCoffee: number,
      awardsWin: number,
      date: Date
    ) {
      this.id = id;
      this.clients = clients;
      this.projects = projects;
      this.cupOfCoffee = cupOfCoffee;
      this.awardsWin = awardsWin;
      this.date = date;
    }
  }
  