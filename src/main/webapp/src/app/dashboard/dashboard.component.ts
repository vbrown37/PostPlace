import {Component, OnInit} from '@angular/core';
import {
  faCartShopping,
  faChartSimple, faDoorOpen, faGear,
  faReceipt,
  faShoppingBag,
  faUser, IconDefinition
} from "@fortawesome/free-solid-svg-icons";

interface ILink {
  label: string;
  icon?: IconDefinition;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectionList: ILink[] = [
    {
      label: 'Overview',
      icon: faChartSimple
    },
    {
      label: 'Product',
      icon: faShoppingBag
    },
    {
      label: 'Customers',
      icon: faUser
    },
    {
      label: 'Orders',
      icon: faReceipt
    },
    {
      label: 'Checkout',
      icon: faCartShopping
    },
    {
      label: 'Settings',
      icon: faGear
    }
  ]

  moreSelectionList: ILink[] = [
    {
      label: "Help"
    },
    {
      label: "Contact us"
    },
    {
      label: "Log out",
      icon: faDoorOpen
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
