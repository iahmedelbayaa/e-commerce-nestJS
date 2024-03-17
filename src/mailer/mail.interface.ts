import { Address } from "nodemailer/lib/mailer";

export interface MailDto {
    from?: Address;
    recipients: Address[];
    subject: string;
    text?: string;
    html: string;
    placeholderReplacements?: Record<string, string>;
}