import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { error } from 'jquery';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{
  
  @ViewChild('content')  popupview !: ElementRef;
productData:any;
dtoptions: DataTables.Settings = {};
dtTrigger:Subject<any>=new Subject<any>();
updateId:number =0;
nameSave:String ="";
descriptionSave:string = "";
priceSave:string = "";
productFormGroup:any
  constructor(private serviceProduct:ProductService){

  }
  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching:true,
      paging:false,
    lengthChange:false,
    language:{
      searchPlaceholder:'Text Customer'
    }

    };
  this.handleListProduct();
  }

  public handleListProduct(){
    this.serviceProduct.getProducts().subscribe((response)=>{
    this.productData = response.data;
    this.dtTrigger.next(null);   
         
    },
    
    (error)=>{
      console.log("error"+"  "+error.status);
    })
  }



  onEditPrduct(id:number){
    for(let product of this.productData){
      if(product.id ==id){
        this.updateId = id;
        this.nameSave = product.name;
        this.descriptionSave = product.description;
        this.priceSave = product.price;
        console.log("this is update id"+"  "+this.updateId+"  "+this.nameSave+"  "+this.descriptionSave+"  ",this.priceSave);

      }

    }
  }
  
  
  onUpdate(){

  }
  
  public deletePrduct(id:number){
    if(confirm('Do you want to remove this Invoice :' + id)){
      this.serviceProduct.deleteProduct(id).subscribe(()=>{
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: "success",
          timerProgressBar:true,
          timer: 5000,
          title: 'Delete Product Successfully'
        });
        this.handleListProduct();
      },
      (error)=>{
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: "error",
          timerProgressBar:true,
          timer: 5000,
          title: 'Error Delete '
        });
        this.handleListProduct();
      }
      )
    }
  }
}
