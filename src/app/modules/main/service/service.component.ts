import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  image
  ServiceList: any[]
  ngOnInit(): void {
    this.getServiceList()
  }
  selectedService: any = {}; // Variable to store the selected service to be updated

  // Function to open the update modal and set the selectedService data
  constructor(private sharedService: SharedService,private router: Router) { }

  getServiceList() {
    this.sharedService.getService().subscribe((res) => {
      this.ServiceList = res;
      this.ServiceList.forEach(ServiceList => {
        this.image = ServiceList.image
      console.log(ServiceList.image);
    });
      console.log(this.ServiceList)
    },
      (error) => {
        console.log(error)
      })
  }
  deleteServiceList(id){
    this.sharedService.deleteService(id).subscribe((res)=>{
        console.log("Deleted Successfully",res)
    })
  }

  }
