import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    console.log("404 : %s",router.url)
  }

  ngOnInit() {
  }

}
