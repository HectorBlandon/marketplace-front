import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {

  // Formulario
  public form: FormGroup;

  // Listas
  public ListCategorias;

  // Banderas
  public existe = false;
  public isActive = 'N';

  // Variables
  public categoria;
  public opcion;
  public idCategoria;

  constructor(public appService: AppService, public dialogRef: MatDialogRef<CategoryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      active: false,
    });

    if (this.data) {

      this.ListCategorias = this.data.categories;
      this.opcion = this.data.option;

      if (this.data.category) {
        this.categoria = this.data.category.nombre_categoria;
        this.idCategoria = this.data.category.id_categoria;
      }

      console.log(this.ListCategorias);
      if (this.opcion === 'edit') {
        this.form.controls.name.setValue(this.categoria);
        console.log(this.form.value.name);
      }
    }
  }

  /**
   * Metodo en cargado de validar si existe una categoria atraves del nombre ingresado
   * @returns true, false
   */
  public compareCategorie(): any {

    return new Promise((resolve: any, reject: any) => {

      for (let index = 0; index < this.ListCategorias.length; index++) {
        if (this.form.value.name.toUpperCase() === this.ListCategorias[index].nombre_categoria.toUpperCase()) {

          console.log('categoria', this.form.value.name);
          reject(false);

        }
      }
      resolve(true);
    });
  }

  /**
   * Metodo encargado de crear una categoria y realizar las validaciones correspondientes para
   * la creacion de una categoria
   */
  public onSubmit(): any {
    console.log(this.form.value);
    if (this.form.valid) {

      /**
       * Respuesta de la promesa del metodo compareCategorie
       * si la respuesta es true puede consumir el servicio
       * para la creacion de una categoria
       */
      this.compareCategorie().then((result: any) => {

        console.log('respuesta promise', result);

        if (result === true) {
          this.existe = false;
          if (this.form.value.active === true) {
            this.isActive = 'Y';
          }

          if (this.opcion === 'create') {

            const dataCategorie = {
              nombre_categoria: this.form.value.name,
              activo: this.isActive
            };
            console.log('dataCategorie', dataCategorie);
            this.appService.crearCategoria(dataCategorie).subscribe((data): any => {

              if (data !== undefined || data !== null) {
                this.dialogRef.close(true);
                console.log('Categorias Crear API', data);
              }

            }, (error) => {
              console.log('ERROR:', error);
            });

          } else if (this.opcion === 'edit') {
            const data = {
              dataCategorie: {
                nombre_categoria: this.form.value.name,
                activo: this.isActive
              },
              idCategoria: this.idCategoria
            };
            console.log('dataCategorie', data);
            this.appService.updateCategoria(data).subscribe((response): any => {
              console.log(response);
            });
          }

        }

      }).catch((err) => {
        /**
         * Si la respuesta de la promesa es false se muestra un mensaje
         * indicando que ya existe una categoria con el nombre ingresa
         * en el campo del formulario
         */
        console.log('respuesta error', err);
        this.existe = true;

      });

    }
  }

}
