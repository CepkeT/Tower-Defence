import {Component, Input, ElementRef, ViewChild } from '@angular/core';
@Component({
    selector: 'app-hp-bar',
    templateUrl: './hp-bar.component.html',
    styleUrls: ['./hp-bar.component.css']
})
export class HpBarComponent{
    @ViewChild('HPBar') _hpBar!: ElementRef;
    @Input() _currentHp: number = 0;

    getHpPercentage(): number {
        return (this._currentHp / 100) * 100;
    }
}
