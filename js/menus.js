      function toggleCommandsList(icon) {
        var commandsList = icon.nextElementSibling;
        commandsList.style.display = commandsList.style.display === 'block' ? 'none' : 'block';
      }

      function toggleDurationList(icon) {
        var durationList = icon.nextElementSibling;
        durationList.style.display = durationList.style.display === 'block' ? 'none' : 'block';
      }

      function showOfferNotification() {
        alert('¡Solo por tiempo limitado a: $$!');
      }