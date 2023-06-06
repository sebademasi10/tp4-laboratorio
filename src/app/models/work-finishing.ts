import { Random } from "random";


export class WorkFinishing {

    rndWork: number;
    work: string;
    rndFinishing: number;
    finishing: number;
    finishingTime: number;
    rndGenerator: Random;

    workIntervals = [
        { from: 0, to: 0.2999999999999, work: 'A' },
        { from: 0.3, to: 0.5499999999999, work: 'B' },
        { from: 0.55, to: 0.6999999999999, work: 'C' },
        { from: 0.7, to: 0.7999999999999, work: 'D' },
        { from: 0.8, to: 0.9999999999999, work: 'E' },
    ];

    constructor(rndGenerator: Random) {
        this.rndGenerator = rndGenerator;
        this.rndWork = this.rndGenerator?.float(0, 0.99);
        this.work = this.getWork(this.rndWork);
        this.rndFinishing = this.rndGenerator?.float(0, 0.99);
        this.finishing = this.getFinishing(this.rndFinishing, this.work);
        this.finishingTime = 0;
    }

    getFinishing(rndFinishing: number | undefined, work: string): number {
        // work A uses uniform distribution between 115 and 125, 4 decimal places
        // work B uses uniform distribution between 55 and 65, 4 decimal places
        // work C uses uniform distribution between 175 and 185, 4 decimal places
        // work D uses uniform distribution between 55 and 65, 4 decimal places
        // work E uses uniform distribution between 85 and 95, 4 decimal places

        let finishing = 0;
        if (rndFinishing && work) {
            switch (work) {
                case 'A':
                    finishing = +(115 + (125 - 115) * Number(+rndFinishing)).toFixed(4);
                    break;
                case 'B':
                    finishing = +(55 + (65 - 55) * Number(+rndFinishing)).toFixed(4);
                    break;
                case 'C':
                    finishing = +(175 + (185 - 175) * Number(+rndFinishing)).toFixed(4);
                    break;
                case 'D':
                    finishing = +(55 + (65 - 55) * Number(+rndFinishing)).toFixed(4);
                    break;
                case 'E':
                    finishing = +(85 + (95 - 85) * Number(+rndFinishing)).toFixed(4);
                    break;
                default:
                    break;
            }
        }
        return finishing;
    }
    getWork(rndWork: number): string {
        let work = '';
        this.workIntervals.forEach((interval) => {
            if (interval.from < rndWork && rndWork <= interval.to) {
                work = interval.work;
            }
        });
        return work
    }

}
