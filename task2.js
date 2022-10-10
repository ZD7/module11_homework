function isSimple(num) {
    if (num <= 1 || num > 1000) return 'ответ неверный';
    if (num == 2) return 'число простое';
    if (num == 3) return 'число простое';

    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        return 'ответ неверный';
      } else {
        return 'число простое';
      }
    }
}