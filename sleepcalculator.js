function getSleepHours(day) {
    if (day === 'Monday') {
      return 8;
    }
    
    else if (day === 'Tuesday') {
      return 8;
    }
    
    else if (day == 'Wednesday') {
      return 8;
    }
    
      else if (day == 'Thursday') {
      return 8;
    }
    
      else if (day == 'Friday') {
      return 8;
    }
    
      else if (day == 'Saturday') {
      return 8;
    }
    
      else if (day == 'Sunday') {
      return 8;
    }
  }
  
  const getActualSleepHours = () =>
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  
  function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    
    if (actualSleepHours == idealSleepHours) {
      return 'You got the perfect amount of sleep!';
    }
    
    else if (actualSleepHours > idealSleepHours) {
      return 'You got more sleep than needed!';
      console.log('You slept ' + actualSleepHours - idealSleepHours + ' hours more than you should have to!');
    }
    
    else if (actualSleepHours < idealSleepHours) {
      return 'You got less sleep than needed. You should rest!';
      console.log('You slept ' + idealSleepHours - actualSleepHours + ' hours less than you should have to, you need rest!');
    }
  }
  
  calculateSleepDebt();
  
  
  