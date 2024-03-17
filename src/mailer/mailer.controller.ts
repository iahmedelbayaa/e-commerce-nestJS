import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailDto } from './mail.interface';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}


  // Send an email
  @Post('send')
  async sendEmail() {
    const dto: MailDto = {
      from: { name: 'Be3o', address: 'Be3o@example.com'},
      recipients: [{name: 'ali' , address: 'ali@example.com'}],
      subject: 'Ali Winner',
      html: '<h1>Ali is the winner</h1>',
    };
    return this.mailerService.sendMail(dto);
  }
}
