import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer from 'nodemailer';
import { MailDto } from './mail.interface';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

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

    async sendResetPasswordEmail(email: string, resetCode: CreateUserDto) {
        const html = `
            <h1>Reset Password</h1>
            <p>Click <a href="${this.configService.get('APP_URL')}/reset-password?email=${email}&resetCode=${resetCode}">here</a> to reset your password</p>
        `;
        const mailDto : MailDto = {
            from: {
                name: this.configService.get('APP_NAME'),
                address: this.configService.get('MAIL_FROM')
            },
            recipients: [{name: 'User', address: email}],
            subject: 'Reset Password',
            html
        }
        return this.sendMail(mailDto);
    }

    
}
