import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Point } from 'src/AngularClasses/point';


@Component({
    selector: 'app-enemy-test',
    templateUrl: './app-enemy-test.component.html',
    styleUrls: ['./app-enemy-test.component.css']
})
export class AppEnemyTestComponent implements AfterViewInit {
    top: number = 0;
    left: number = 0;
    speed: number = 1;
   /* towerPosition: Point = new Point();
    enemyPosition: Point = new Point();*/
    rotation: number = 0;
    rotationStyle: string = '';

    @ViewChild('EnemyImg') enemyImg!: ElementRef;

    ngAfterViewInit() {
        const enemyElement = this.enemyImg.nativeElement;

        if (enemyElement) {
            const enemyRect = enemyElement.getBoundingClientRect();
            this.top = Math.random() * (window.innerHeight - enemyRect.height);
            this.left = Math.random() * (window.innerWidth - enemyRect.width);
        }

        //this.moveEnemy();

    }

   /* moveEnemy() {
        const towerElement = document.getElementById('tower');
        const enemyElement = this.enemyImg.nativeElement;

        if (towerElement && enemyElement) {
            const towerRect = towerElement.getBoundingClientRect();
            const enemyRect = enemyElement.getBoundingClientRect();

            this.towerPosition.X = towerRect.left + towerRect.width / 2;
            this.towerPosition.Y = towerRect.top + towerRect.height / 2;

            this.enemyPosition.X = enemyRect.left + enemyRect.width / 2;
            this.enemyPosition.Y = enemyRect.top + enemyRect.height / 2;

            const dx = this.towerPosition.X - this.enemyPosition.X;
            const dy = this.towerPosition.Y - this.enemyPosition.Y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const distanceThreshold = 10;

            if (distance <= distanceThreshold) {
                return;
            }

            const vx = (dx / distance) * this.speed;
            const vy = (dy / distance) * this.speed;

            this.left += vx;
            this.top += vy;

            const enemyWidth = enemyRect.width;
            const enemyHeight = enemyRect.height;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            if (this.left < 0) {
                this.left = 0;
            } else if (this.left + enemyWidth > windowWidth) {
                this.left = windowWidth - enemyWidth;
            }

            if (this.top < 0) {
                this.top = 0;
            } else if (this.top + enemyHeight > windowHeight) {
                this.top = windowHeight - enemyHeight;
            }

            this.rotation = Math.atan2(dy, dx) * (180 / Math.PI);
            this.rotationStyle = `rotate(${this.rotation}deg)`;

            enemyElement.style.transform = this.rotationStyle;

            requestAnimationFrame(() => {
                this.moveEnemy();
            });
        }
    }*/
}
