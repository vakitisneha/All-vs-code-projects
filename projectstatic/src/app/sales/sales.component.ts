import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  idModule:any
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
     this.idModule=this.route.snapshot.params["id"];
  }
}
