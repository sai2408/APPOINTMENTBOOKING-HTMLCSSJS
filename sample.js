let bookedSlots = [3, 5]; // Slots already booked

    function bookSlot(slot) {
      if (bookedSlots.includes(slot)) {
        document.getElementById('message').innerHTML = "Slot already booked. Please try again.";
      } else {
        document.getElementById('slot' + slot).classList.add('booked');
        bookedSlots.push(slot);
        document.getElementById('message').innerHTML = "Slot booked successfully!";
      }
    }