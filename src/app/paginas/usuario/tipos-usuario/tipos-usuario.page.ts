import { Component, OnInit, ViewRef } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { AlertController } from '@ionic/angular';
import { IonRouterOutlet, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tipos-usuario',
  templateUrl: './tipos-usuario.page.html',
  styleUrls: ['./tipos-usuario.page.scss'],
})
export class TiposUsuarioPage implements OnInit {
  t: any;
  id: number;
 
  constructor(private usuariosService: UsuariosService, public alertController: AlertController, public routerOutlet: IonRouterOutlet,
    private actionSheetCtrl: ActionSheetController) { }
  ngOnInit() {
    this.types();
  }

  register_types(type: any) {
    this.usuariosService.register_types(type.value).subscribe({
      next: (s) => {
        this.types()
        debugger
      }, error: (e) => {
        debugger
      }
    })
  }

  types() {
    this.usuariosService.types().subscribe({
      next: (s) => {
        this.t = s
      }, error: (error) => {
      }
    })
  }



  async presentAlertPrompt(id, t) {

    const alert = await this.alertController.create({

      cssClass: 'my-custom-class',
      header: '::Tipo Usuario',
      inputs: [
        {

          name: 'name1',
          type: 'text',
          placeholder: '',
          value: this.t[id] = t
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            

          }
        }
      ]
    });

    await alert.present();
  }
  async eliminar(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Estás seguro de que quieres eliminar el tipo: ?',
      message: 'Message <strong></strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            console.log(this.usuariosService.userdelete(id).subscribe({
              next: (s) => {
                this.types()
                debugger
              }, error: (e) => {
                debugger
              }
            }));

          }
        }
      ]
    });

    alert.present();

  }

}



