import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Category } from 'src/app/app.models';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ProductService } from 'src/app/services/product/product.service';
import { CurrentPipe } from '../../../theme/pipes/current.pipe';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  // Formulario
  public form: FormGroup;

  // Variables
  public isActive = 'N';
  public selectedColors: string;
  public categories: Category[];
  private sub: any;
  public id: any;

  constructor(
    public appService: AppService, public productService: ProductService,
    public formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    public micurrencypipe: CurrentPipe,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      brand: [null, Validators.required],
      images: [null],
      newPrice: [null, Validators.required],
      description: [null, Validators.required],
      availibilityCount: [null, Validators.required],
      categoryId: [null, Validators.required],
      reference: [null],
      active: [null]
    });
    this.getCategories();
    this.sub = this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.getProductById();
      }
    });
  }

  public getCategories(): any {
    this.appService.getCategorias().subscribe(data => {
      console.log('Categorias select', data);
      this.categories = data.filter(
        CateActiva => {
          return CateActiva.activo === 'Y';
        });
    });
  }



  public getProductById() {
    this.appService.getProductById(this.id).subscribe((data: any) => {
      this.form.patchValue(data);
      this.selectedColors = data.color;
      const images: any[] = [];
      data.images.forEach(item => {
        let image = {
          link: item.medium,
          preview: item.medium
        };
        images.push(image);
      });
      this.form.controls.images.setValue(images);
    });
  }

  public onSubmit(): any {
    console.log(this.form.value);

    if (this.form.value.active === true) {
      this.isActive = 'Y';
    }

    const cantidadProducto = this.micurrencypipe.parse(this.form.value.availibilityCount);
    const precioProducto = this.micurrencypipe.parse(this.form.value.newPrice);

    const data = {
      nombre_producto: this.form.value.name,
      cantidad: Number(cantidadProducto),
      descripcion: this.form.value.description,
      activo: this.isActive,
      marca: this.form.value.brand,
      precio: Number(precioProducto),
      sku: 'ewsdc7we7ed76edw',
      categoriaEntity: this.form.value.categoryId.id_categoria,
    };
    console.log('Data a enviar', data);

    this.productService.crearProducto(data).subscribe((datos): any => {
      console.log('respuesta  servicio producto', datos);
    });

  }

  public onColorSelectionChange(event: any) {
    if (event.value) {
      this.selectedColors = event.value.join();
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
