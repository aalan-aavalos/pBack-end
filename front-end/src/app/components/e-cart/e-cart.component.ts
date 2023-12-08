import { Component } from '@angular/core';

//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICreateOrderRequest, IPayPalConfig, ITransactionItem } from 'ngx-paypal';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/services/message.service';
import { StorageService } from 'src/app/services/storage.service';
//import { ModalComponent } from '../modal/modal.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-e-cart',
  templateUrl: './e-cart.component.html',
  styleUrls: ['./e-cart.component.css']
})
export class ECartComponent {

  cartItems: CartItem[] = [];
  total = 0;

  //PaypPal
  public payPalConfig?: IPayPalConfig;

  constructor(
    private messageService: MessageService,
    private storageService: StorageService,
    //private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    //PayPal
    this.initConfig();

    if (this.storageService.existsCart()) {
      this.cartItems = this.storageService.getCart();
    }
    this.getItem();
    this.total = this.getTotal();
  }

  //PayPal
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'MXN',
      clientId: 'AchXFs8rgMtv8ABZBUQuiw0C4RbumtJoD1Ng-BRHk7QqMUjX73PuRslbGIz7J0DzGX1IfLa6YnQyvlrI',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'MXN',
            value: this.getTotal().toString(),
            breakdown: {
              item_total: {
                currency_code: 'MXN',
                value: this.getTotal().toString()
              }
            }
          },
          items: this.getItemList()
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        this.spinner.show();
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => { //(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        //this.showSuccess = true;
        this.openModal(data.purchase_units[0].items, data.purchase_units[0].amount.value);
        this.emptyCart();
        this.spinner.hide();
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        //this.showCancel = true;
      },
      onError: err => {
        console.log('OnError', err);
        //this.showError = true;
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
        //this.resetStatus();
      }
    };
  }

  getItem(): void {
    this.messageService.getMessage().subscribe((product: Product) => {
      let exists = false;
      this.cartItems.forEach(item => {
        if (item.productId === product.id) {
          exists = true;
          item.qty++;
        }
      });
      if (!exists) {
        const cartIteem = new CartItem(product);
        this.cartItems.push(cartIteem);
      }
      this.total = this.getTotal();
      this.storageService.setCart(this.cartItems);
    });
  }

  getItemList(): any[] {
    const items: any = [];
    let item = {};

    this.cartItems.forEach((it: CartItem) => {
      item = {
        name: it.productName,
        quantity: it.qty,
        unit_amount: {
          value: it.productPrice,
          currency_code: 'MXN'
        }
      };
      items.push(item);
    });
    return items;
  }

  getTotal(): number {
    let total = 0;

    this.cartItems.forEach(item => {
      total += item.qty * item.productPrice;
    });
    return +total.toFixed(2);
  }

  emptyCart(): void {
    this.cartItems = [];
    this.total = 0;
    this.storageService.clear();
  }

  deleteItem(i: number): void {
    if (this.cartItems[i].qty > 1) {
      this.cartItems[i].qty--;
    }
    else {
      this.cartItems.splice(i, 1);
    }
    this.total = this.getTotal();
    this.storageService.setCart(this.cartItems);
  }

  //PayPal
  openModal(items: ITransactionItem[], amount: string): void {
    //const modalRef = this.modalService.open(ModalComponent);
    //modalRef.componentInstance.items = items;
    //modalRef.componentInstance.amount = amount;
  }
}
