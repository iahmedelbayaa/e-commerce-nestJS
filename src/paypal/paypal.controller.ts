import { Controller, Post, Body, Param, Get, UseGuards } from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('paypal')
@UseGuards(AuthGuard())
export class PaypalController {
    constructor(private readonly PaypalService: PaypalService) { }

    //request to create payment token
    @Post('/createPayment')
    async paypalPayment(@Body() obj: Object) {
        try {
            const result: any = await this.PaypalService.createPayment(obj);
            if (result) {

                for (let i = 0; i < result.links.length; i++) {
                    if (result.links[i].rel === 'approval_url') {
                        return { responseCode: 200, result: result.links[i].href }
                    }
                }
            }


        }
        catch (error) {
            return error
        }
    }

    //request to execute payment
    @Post('/success')
    async paypalPaymentSuccess(@Body() obj: Object) {
        try {
            const res = await this.PaypalService.executePayment(obj)
            return res

        }
        catch (error) {
            console.log("error in payment", error.message)
            return error
        }
    }

    //cancel paypal request
    @Get('/cancel')
    async cancelPayment() {
        return { responseCode: 200 }
    }

    //get paypal suppoted currencies
    @Get('/getCurrencies')
    async getCurrency() {
        console.log("firsssssst")
        //   console.log(producTitle,productDescription,productPrice,"Firsttt")
        try {
            const res = await this.PaypalService.getListOfCurrencies();
            return { responseCode: res[0], result: res[1] }

        }
        catch (error) {
            return error
        }
    }


}