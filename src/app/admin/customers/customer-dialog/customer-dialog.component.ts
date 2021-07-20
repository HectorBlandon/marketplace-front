import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonsService } from '../../../services/common/commons.service';
import { emailValidator, matchingPasswords } from '../../../../app/theme/utils/app-validators';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {

  // Formulario
  public form: FormGroup;

  // listas
  public ciudadesList;

  public passwordHide:boolean = true;
  public confirmPasswordHide:boolean = true;

  constructor(public dialogRef: MatDialogRef<CustomerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public formB: FormBuilder,
              public commonsService: CommonsService,
              public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.form = this.formB.group({
      firstName: ['', Validators.required],
      secondName: [null, ],
      lastName: ['', Validators.required],
      surName: [null, ],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],

      billing: this.formB.group({
        email: ['', Validators.required],
        phone: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        confirmPassword: ['',  Validators.compose([Validators.required, Validators.minLength(6)])],
      }),
    });
    /* console.log(this.data.customer);
    if (this.data.customer) {
      this.form.patchValue(this.data.customer);
    } */
    this.getciudades();
  }

  public getciudades(): any {

    this.commonsService.getCiudades().subscribe( (resultList: any) => {

      console.log(resultList);
      if (resultList){
        this.ciudadesList = resultList;
      }

    }, (error) => {
      console.log('ERROR:', error);
    });

  }

  public onSubmit(form): any {
    console.log(form.value);
    if (this.form.valid) {
      const dataUsuario = {
        primer_nombre: this.form.value.firstName,
        segundo_nombre: this.form.value.secondName,
        primer_apellido: this.form.value.lastName,
        segundo_apellido: this.form.value.surName,
        username: this.form.value.billing.username,
        fecha_nacimiento: this.form.value.birthday,
        genero: this.form.value.gender,
        email: this.form.value.billing.email,
        mobile: this.form.value.billing.phone,
        clave: this.form.value.billing.password,
        rol: 'Empleado'
      };
      this.usuarioService.crearUsuario(dataUsuario).subscribe( (resultList: any) => {

        console.log(resultList);
        if (resultList){
          this.dialogRef.close();
        }
      }, (error) => {
        console.log('ERROR:', error);
      });
    }
  }

  public compareFunction(o1: any, o2: any) {
    return (o1.name === o2.name && o1.code === o2.code);
  }

}
