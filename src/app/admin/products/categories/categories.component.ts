import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/app.models';

import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { AppSettings, Settings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] = [];
  public categorias;
  public page: any;
  public count = 6;
  public settings: Settings;
  constructor(public appService: AppService, public dialog: MatDialog, public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.ListarCategorias();
  }


  /**
   *  Metodo encargado de recibir la respuesta del servicio que obtiene las lista de las categorias
   */
  public ListarCategorias(): any{
    this.appService.getCategorias().subscribe((data: any) => {
      this.categorias = data;
      console.log('Categorias API', data);
    }, (error) => {
      console.log('ERROR:', error);
    });
  }

  /**
   * 
   * @param event Metodo encargado del paginador
   */
  public onPageChanged(event): any{
    this.page = event;
    window.scrollTo(0, 0);
  }

  /**
   *  Metodo encargado de mostrar el modal para crear una categoria o editarla
   * @param data
   */
  public openCategoryDialog(type: any, category: any): any{
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      data: {
        option: type,
        category,
        categories: this.categorias
      },
      panelClass: ['theme-dialog'],
      autoFocus: false,
      direction: (this.settings.rtl) ? 'rtl' : 'ltr'
    });
    dialogRef.afterClosed().subscribe(res => {

      if (res === true) {
        this.ListarCategorias();
      }
    });
  }


  /**
   * Metodo encargado de mostrar el modal que permite eliminar una categoria
   * @param category objeto categoria
   */
  public remove(category: any): any{
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        category,
        title: 'Confirmar acción',
        message: `¿Estás seguro de que quieres eliminar la categoría ${category.nombre_categoria}? `
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult){
        const index: number = this.categories.indexOf(category);
        if (index !== -1) {
          this.categories.splice(index, 1);
        }
      }
    });
  }

}
