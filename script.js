// Simple interactive voting like old Reddit
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.arrow.up').forEach(function(arrow) {
    arrow.addEventListener('click', function(e) {
      e.preventDefault();
      var midcol = this.parentElement;
      var scoreEl = midcol.querySelector('.score');
      var score = parseInt(scoreEl.textContent, 10) || 0;
      var down = midcol.querySelector('.arrow.down');

      if (this.classList.contains('upmod')) {
        this.classList.remove('upmod');
        scoreEl.classList.remove('likes');
        scoreEl.textContent = score - 1;
      } else {
        if (down.classList.contains('downmod')) {
          down.classList.remove('downmod');
          scoreEl.classList.remove('dislikes');
          score += 1;
        }
        this.classList.add('upmod');
        scoreEl.classList.add('likes');
        scoreEl.classList.remove('dislikes');
        scoreEl.textContent = score + 1;
      }
    });
  });

  document.querySelectorAll('.arrow.down').forEach(function(arrow) {
    arrow.addEventListener('click', function(e) {
      e.preventDefault();
      var midcol = this.parentElement;
      var scoreEl = midcol.querySelector('.score');
      var score = parseInt(scoreEl.textContent, 10) || 0;
      var up = midcol.querySelector('.arrow.up');

      if (this.classList.contains('downmod')) {
        this.classList.remove('downmod');
        scoreEl.classList.remove('dislikes');
        scoreEl.textContent = score + 1;
      } else {
        if (up.classList.contains('upmod')) {
          up.classList.remove('upmod');
          scoreEl.classList.remove('likes');
          score -= 1;
        }
        this.classList.add('downmod');
        scoreEl.classList.add('dislikes');
        scoreEl.classList.remove('likes');
        scoreEl.textContent = score - 1;
      }
    });
  });

  // Tab switching visual
  document.querySelectorAll('.tabmenu a').forEach(function(tab) {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.tabmenu li').forEach(function(li) {
        li.classList.remove('selected');
      });
      this.parentElement.classList.add('selected');
    });
  });
});
