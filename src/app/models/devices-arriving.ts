import { Random } from "random";

export class DevicesArriving {

    rnd: string;
    arrivingTime: string;
    rndGenerator: Random | undefined;

    constructor(rndGenerator: Random | undefined) {
        this.rndGenerator = rndGenerator;
        this.rnd = this.rndGenerator?.float(0, 0.99).toFixed(2) || '';
        this.arrivingTime = this.getarrivingTime(this.rnd);
    }

    getarrivingTime(rnd: string): string {
        // uniform distribution between 30 and 90, 4 decimal places
        const arrivingTime = (30 + (90 - 30) * Number(+rnd)).toFixed(2);
        return arrivingTime;
    }

}
