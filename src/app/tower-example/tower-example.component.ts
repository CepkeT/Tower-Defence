import { Component } from '@angular/core';
import { Point } from 'src/AngularClasses/point';

@Component({
  selector: 'app-tower-example',
  templateUrl: './tower-example.component.html',
  styleUrls: ['./tower-example.component.css']
})
export class TowerExampleComponent {

  private position!: Point;
  private hp!: number;
  private enemyX!: number;
  private enemyY!: number;

  public setPositionAndHP(position: Point, hp: number): void {
    this.position = position;
    this.hp = hp;
    this.enemyX = position.X;
    this.enemyY = position.Y;
  }

  fireballVisible = false;
  fireballX = 0;
  fireballY = 0;
  _movement: any;

  launchFireball() {
    this.fireballVisible = true;
    this.fireballX = 0; // начальная позиция по горизонтали
    this.fireballY = 0; // начальная позиция по вертикали

    const interval = setInterval(() => {
      // двигаем fireball в сторону врага
      this.fireballX += 1; // пример сдвига по горизонтали
      this.fireballY += 1; // пример сдвига по вертикали

      // fireball достиг врага
      if (this.fireballX >= this.enemyX && this.fireballY >= this.enemyY) {
        clearInterval(interval); // останавливаем интервал движения fireball
        this.fireballVisible = false; // скрываем fireball

        // Проверяем, попал ли fireball во врага
        if (this.isFireballHitEnemy()) {
          this.subtractHP(1); // отнимаем 1 HP у врага
        }
      }
    }, 10); // интервал движения fireball (в миллисекундах)
  }

  subtractHP(amount: number) {
    // реализуйте здесь логику отнимания HP у врага
    this.hp -= amount;
  }

  isFireballHitEnemy(): boolean {return true}
}

// реализуйте здесь логику проверки попадания fireball во врага
// возвращайте true, если fireball попал во врага, и false
