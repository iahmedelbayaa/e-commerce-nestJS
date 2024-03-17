import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer from 'nodemailer';
import { MailDto } from './mail.interface';

@Injectable()
export class MailerService {
    constructor(
        private readonly configService: ConfigService
    ){}
    mailTransporter() {
        const transporter = nodemailer.createTransport({
            host: this.configService.get('MAIL_HOST'),
            port: this.configService.get('MAIL_PORT'),
            secure: false,
            auth: {
                user: this.configService.get('MAIL_USER'),
                pass: this.configService.get('MAIL_PASS')
            }
        } );
        return transporter; 
    }

    async sendMail(dto : MailDto) {
        const {from , recipients , subject , html , placeholderReplacements} = dto;
        const transporter = this.mailTransporter();

        const mailOptions = {
            from: from ?? {
                name: this.configService.get('APP_NAME'),
                address: this.configService.get('MAIL_FROM')
            },
            to: recipients,
            subject: subject,
            html: html
        };
        
        try {
            await transporter.sendMail(mailOptions);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }

    }

    
}
