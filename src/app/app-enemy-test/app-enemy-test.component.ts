import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-enemy-test',
  templateUrl: './app-enemy-test.component.html',
  styleUrls: ['./app-enemy-test.component.css']
})
export class AppEnemyTestComponent implements AfterViewInit {
  top: number = 0; // Переменная для хранения вертикальной позиции врага
  left: number = 0; // Переменная для хранения горизонтальной позиции врага
  speed: number = 1; // Скорость движения врага

  towerPosition: { x: number, y: number } = { x: 0, y: 0 }; // Позиция башни
  enemyPosition: { x: number, y: number } = { x: 0, y: 0 }; // Позиция врага

  @ViewChild('EnemyImg') enemyImg!: ElementRef;

  ngAfterViewInit() {
    const enemyElement = this.enemyImg.nativeElement;

    if (enemyElement) {
      const enemyRect = enemyElement.getBoundingClientRect(); // Получение размеров врага
      this.top = Math.random() * (window.innerHeight - enemyRect.height); // Установка случайной вертикальной позиции врага
      this.left = Math.random() * (window.innerWidth - enemyRect.width); // Установка случайной горизонтальной позиции врага
    }

    this.moveEnemy(); // Запуск метода для движения врага
  }

  moveEnemy() {
    const towerElement = document.getElementById('tower');
    const enemyElement = this.enemyImg.nativeElement;

    if (towerElement && enemyElement) {
      const towerRect = towerElement.getBoundingClientRect();
      const enemyRect = enemyElement.getBoundingClientRect();

      this.towerPosition.x = towerRect.left + towerRect.width / 2; // центр позиции башни по горизонтали
      this.towerPosition.y = towerRect.top + towerRect.height / 2; // центр позиции башни по вертикали

      this.enemyPosition.x = enemyRect.left + enemyRect.width / 2; // центр позиции врага по горизонтали
      this.enemyPosition.y = enemyRect.top + enemyRect.height / 2; // центр позиции врага по вертикали

      const dx = this.towerPosition.x - this.enemyPosition.x; // расстояние по горизонтали между башней и врагом
      const dy = this.towerPosition.y - this.enemyPosition.y; // расстояние по вертикали между башней и врагом
      const distance = Math.sqrt(dx * dx + dy * dy); // расстояния между башней и врагом

      const distanceThreshold = 10; // расстояние до башни, при котором враг останавливается

      if (distance <= distanceThreshold) {
        return; // Враг достиг башни, остановить движение
      }

      const vx = (dx / distance) * this.speed; //   скорости движения врага по горизонтали
      const vy = (dy / distance) * this.speed; // скорости движения врага по вертикали

      this.left += vx; // Обновление позиции врага по горизонтали
      this.top += vy; // Обновление позиции врага по вертикали

      const enemyWidth = enemyRect.width; // Ширина врага
      const enemyHeight = enemyRect.height; // Высота врага
      const windowWidth = window.innerWidth; // Ширина окна браузера
      const windowHeight = window.innerHeight; // Высота окна браузера

      if (this.left < 0) {
        this.left = 0; // Проверка, чтобы враг не выходил за левую границу окна
      } else if (this.left + enemyWidth > windowWidth) {
        this.left = windowWidth - enemyWidth; // Проверка, чтобы враг не выходил за правую границу окна
      }

      if (this.top < 0) {
        this.top = 0; // Проверка, чтобы враг не выходил за верхнюю границу окна
      } else if (this.top + enemyHeight > windowHeight) {
        this.top = windowHeight - enemyHeight; // Проверка, чтобы враг не выходил за нижнюю границу окна
      }

      enemyElement.style.left = this.left + 'px'; // Обновление горизонтальной позиции врага на странице
      enemyElement.style.top = this.top + 'px'; // Обновление вертикальной позиции врага на странице

      requestAnimationFrame(() => {
        this.moveEnemy(); // Запрос следующего кадра анимации для продолжения движения врага
      });
    }
  }
}
