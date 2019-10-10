import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';
import { PolicyService } from '../policy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policies: Policy[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( (policyData) => {
      this.policies = policyData.productsData;
    })
  }

}
