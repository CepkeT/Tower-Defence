import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hp-bar',
    templateUrl: './hp-bar.component.html',
    styleUrls: ['./hp-bar.component.css']
})
export class HpBarComponent {
    @Input() currentHp: number = 0;


    constructor() {}

    getHpPercentage(): number {
        return (this.currentHp / 100) * 100;
    }
}
