import {GatewayInterface, GatewayOptionsInterface, PaymentDetailsInterface} from "../../settle/lib";

export class SettlePayzoneGateway implements GatewayInterface {
    protected readonly options: GatewayOptionsInterface = {
        addressRequired: true,
    };

    public constructor(options?: GatewayOptionsInterface) {
        this.options = {...this.options, ...options};
    }

    public transact(value: number, from: PaymentDetailsInterface): boolean {
        return true;
    }

    public getOption(name: string): any {
        return this.options[name];
    }
}
