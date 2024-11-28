<?php
// Здесь вы можете подключить базу данных и извлечь новые элементы
$items = [
  '<div class="portfolio-item"><img src="img/project3.jpg" alt="Project 3"></div>',
  '<div class="portfolio-item"><img src="img/project4.jpg" alt="Project 4"></div>'
];

// Возвращаем HTML-код
echo implode('', $items);
?>
