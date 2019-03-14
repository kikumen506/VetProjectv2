import { Component, OnInit } from '@angular/core';
import { LogVetService } from 'src/app/services/logvet/log-vet.service';
import { VetsService } from 'src/app/services/vets/vets.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public logvetservice: LogVetService, public regVetService: VetsService) { }

  ngOnInit() {
  }

}
