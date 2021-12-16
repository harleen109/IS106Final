import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders: Array<any> = [];
  name: string;
  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {

  }

  async ngOnInit() {
    this.loadDefaultOrders();
  }
  submit() {
    const commaIndex = this.name.indexOf(', ');
    let error = false;
    console.log('this.name', this.name, 'commaIndex', comma.Index, 'firstName', firstName), 'lastName', lastName;

    if (commaIndex === -1) {
      console.log('Name not containing a “, ”')
      error=true;
    }
    if(this.name ===''){
      console.log('Name input field not specified')
      error = true;
    }

    if(!error) {
      const firstName = this.name.slice(commaIndex +1, this.name.length);
      const lastName = this.name.slice(0, commaIndex);
      const fullName = firstName + '' + lastName;
    }
  }

  loadDefaultOrders() {
    this.orders = [{
      'pid': '1',
      'image': 'assets/sm_hotdog.jpeg',
      'description': 'Hot Dog',
      'price': 5.00,
      'quantity': 2
    }, {
      'pid': '2',
      'image': 'assets/sm_hamberger.jpeg',
      'description': 'Hamberger',
      'price': 6.00,
      'quantity': 1
    }, {
      'pid': '3',
      'image': 'assets/sm_pizza.jpeg',
      'description': 'Large Pizza',
      'price': 12.00,
      'quantity': 2
    }]

  }

  delete(index: number) {
    this.orders.splice(index, 1);
  }

  addItem(item: string) {
    switch (item) {
      case 'hot dog':
        this.orders.unshift({
          'pid': '1',
          'image': 'assets/sm_hotdog.jpeg',
          'description': 'Hot Dog',
          'price': 5.00,
          'quantity': 2
        })
        break;
        case 'hamberger':
          this.orders.unshift({
            'pid': '2',
            'image': 'assets/sm_hamberger.jpeg',
            'description': 'Hot Dog',
            'price': 6.00,
            'quantity': 1
          })
          break;
        case 'pizza':
          this.orders.unshift({
            'pid': '1',
            'image': 'assets/sm_pizza.jpeg',
            'description': 'Hot Dog',
            'price': 12.00,
            'quantity': 2
            })
    }
  }


  // prepare result, splice last name, first name

  // Calculate total and perform input validation

  // display the order form with orders from orders.json

  // Clear the orders form

  // Add items 'Hot Dog', 'Hamberger' and 'Pizza' to list when corresponding button is clicked

  // delete line item (order) when delete button is click

  // read in the orders.json file and populate the list table with the initial orders (3)

}
