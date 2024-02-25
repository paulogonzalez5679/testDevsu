import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesBPService } from '../../services/services-bp.service';

@Component({
  standalone: true,
  imports: [CommonModule,],
  providers: [
    ServicesBPService,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public  productService= inject (ServicesBPService);
  arrayUser:any=[]

  ngOnInit() {
    this.obtenerProductos()
  }


  obtenerProductos() {
    this.productService.getProduct().subscribe({
      next: data =>{
        this.arrayUser=data

        data.forEach((item: { description: string; }) => {
          if (item.description.length > 5) {
              item.description = item.description.substring(0, 15) + '...';
          }
      });
        console.log(data);
      },
      error(err) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      },
      complete() {

      },

    })

  }

}
