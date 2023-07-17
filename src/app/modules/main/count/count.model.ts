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
    cup_of_coffee: number;
    awards: number;
    updated_at: Date;
    editMode: boolean;
    constructor(
      id: number,
      clients: number,
      projects: number,
      cup_of_coffee: number,
      awardsWin: number,
      updated_at: Date,
      editMode: boolean
    ) {
      this.id = id;
      this.clients = clients;
      this.projects = projects;
      this.cup_of_coffee = cup_of_coffee;
      this.awards = awardsWin;
      this.updated_at = updated_at;
      this.editMode = editMode
    }
  }
  