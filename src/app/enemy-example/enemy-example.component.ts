import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { EnemyMovement } from 'src/AngularClasses/enemy-movenment';
import { Point } from 'src/AngularClasses/point';
import { TowerExampleComponent } from '../tower-example/tower-example.component';
import { HpBarComponent } from '../hp-bar/hp-bar.component';

@Component({
    selector: 'app-enemy-example',
    templateUrl: './enemy-example.component.html',
    styleUrls: ['./enemy-example.component.css']
})
export class EnemyExampleComponent implements AfterViewInit {
    @ViewChild('EnemyImg', { static: true }) _enemyImg!: ElementRef<HTMLImageElement>
    @ViewChild(HpBarComponent) hpBarComponent!: HpBarComponent;
    _movement: EnemyMovement;
    _towerComponent!: TowerExampleComponent;
    _currentHp: number = 100;

    public constructor(private towerComponent: TowerExampleComponent) {
        this._movement = new EnemyMovement(
            2,
            new Point(window.innerWidth / 2, window.innerHeight / 2),
            new Point(50, 50)
        );
    }

    ngAfterViewInit(): void {
        let pageWidth: number = window.innerWidth;
        let pageHeight: number = window.innerHeight;

        setInterval(() => {
            this._movement.Move();
            if (this._movement.IsEnimyOutOfScreen()) {
                this._movement.RestartMovement();
            }
            this._movement.ApplyPosition(this._enemyImg?.nativeElement.style);
            this.hpBarComponent.currentHp = this._currentHp;
        }, 40, this, pageWidth, pageHeight);
    }
}
