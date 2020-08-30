import { ToastController } from '@ionic/angular';

export class Notification {
  private toastController: ToastController;
  constructor() {
    this.toastController = new ToastController();
  }
  async message(msg: string, color: string): Promise<any> {
    const toast = await this.toastController.create({
      position: 'top',
      message: msg,
      duration: 2000,
      color
    });
    toast.present();
  }
}
