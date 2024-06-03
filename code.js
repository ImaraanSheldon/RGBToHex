// RGB to heidecimal
function RGB2Hex(r, g, b){
    return '#' + ((1<< 24) + (r<<16) + (g<<8) + b).toString(16).slice(1).toUpperCase();
  }
  console.log(RGB2Hex(255, 57, 0));