import { Random } from "random";

export class DevicesArriving {

    rnd: string;
    timeBetweenArrivings: string;
    rndGenerator: Random | undefined;
    nextArriving: number | undefined;

    constructor(rndGenerator: Random | undefined) {
        this.rndGenerator = rndGenerator;
        this.rnd = this.rndGenerator?.float(0, 0.99).toFixed(2) || '';
        this.timeBetweenArrivings = this.getTimeBetweenArrivings(this.rnd);
    }

    getTimeBetweenArrivings(rnd: string): string {
        // uniform distribution between 30 and 90, 4 decimal places
        const timeBetweenArrivings = (30 + (90 - 30) * Number(+rnd)).toFixed(2);
        return timeBetweenArrivings;
    }

}
