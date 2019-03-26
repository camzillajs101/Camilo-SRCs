function listProps(obj){
  for (let proName in obj){
    console.log(proName);
  };
};
function capitalize(word){
  return word.substring(0,1).toUpperCase() + word.substring(1,word.length);
};
function title(word){
  if (typeof word === "string"){
    let ary = word.split(" ");
    for (i in ary){
      ary[i] = ary[i].substring(0,1).toUpperCase() + ary[i].substring(1,ary[i].length);
    };
    return ary.join(" ");
  } else {
    throw new TypeError("Input should be of type String");
  }
};
function contains(phrase,keyword){ // does this exist already? who knows? probably...but it was fun anyway :/
  if (typeof phrase === "string" && typeof keyword === "string"){
    let ary = phrase.split(keyword);
    if (ary.length > 1){
      return true;
    } else {
      return false;
    };
  } else {
    throw new TypeError("Inputs should be of type String");
  };
};
function translateBaseToDecimal(input,beginBase){
  let inp = JSON.stringify(input);
  if (typeof input === "number" && typeof beginBase === "number"){
    let num = 0;
    for (let i = inp.length; i > 0; i--){
      num += parseInt(inp.substring(i-1,i)) * Math.pow(beginBase,i-1);
    };
    return num;
  } else {
    throw new TypeError("Inputs should be of type Number");
  };
};
let math = {
  part: function(whole,percent){
    return whole * percent;
  },
  whole: function(part,percent){
    return part / percent;
  },
  percent: function(part,whole){
    return part / whole;
  },
  GCF: function(a,b){
    let found = false;
    let number = 0;
    let ary = this.factor(a);
    let arr = this.factor(b);
    for (let i = 0; i < ary.length; i++){
      for (let j = 0; j < arr.length; j++){
        if (ary[i] === arr[j]){
          found = true;
          number = arr[j];
        };
      };
    };
    return number;
  },
  LCM: function(a,b){
    let ar = [];
    let br = [];
    let found = false;
    let number = null;
    function pushNewNumbers(){
      ar.push(a * (ar.length + 1));
      br.push(b * (br.length + 1));
    };
    function iterate(){
      pushNewNumbers();
      for (let i = 0; i < ar.length; i++){
        for (let j = 0; j < br.length; j++){
          if (ar[i] === br[j]){
            found = true;
            number = ar[i];
          };
        };
      };
      if (found === false){
        iterate();
      };
    };
    iterate();
    return number;
  },
  isPrime: function(a){
    for (var i = 2; i < value; i++){
      if (value % i === 0){
        return false;
      };
    };
    return value > 1;
  },
  divBy: function(a,b){
    if (a % b !== 0){
      return true;
    } else {
      return false;
    };
  },
  factor: function(a){
    let ary = [];
    for (i = 1; i <= a; i++) {
      if (a % i == 0) {
        ary.push(i);
      };
    };
    return ary;
  },
  orderLtoG: function(ary){ // I don't even know how I came up with this, it doesn't make any sense
    ary.sort(function(a,b){ return a-b });
    return ary;
  },
  orderGtoL: function(ary){
    ary.sort(function(a,b){ return b-a });
  },
  mean: function(ary){
    let total = 0;
    for (let i = 0; i < ary.length; i++){
      total += ary[i];
    };
    return total / ary.length;
  },
  median: function(ary){
    let nAry = this.orderLtoG(ary);
    if (this.divBy.one(nAry.length / 2) === false){
      return nAry[(nAry.length - 1) / 2];
    } else {
      return this.mean([nAry[nAry.length / 2,(nAry.length / 2) - 1]]);
    };
  },
  mode: function(ary){
    let difference = [];
    for (let i = 0; i < ary.length; i++){

    }
  },
  range: function(ary){
    let сука = this.OrderLtoG(ary);
    return сука[сука.length] - сука[0];
  },
  area: {
    circle: function(r){
      return Math.PI * r * r;
    },
    rectangle: function(w,h){
      return w * h;
    },
    square: function(w){
      return w * w;
    },
    triangle: function(b,h){
      return (b * h) / 2;
    },
    trapezoid: function(h,a,b){
      return (h * (a + b)) / 2;
    }
  },
  volume: {
    sphere: function(r){
      return (4 / 3) * Math.PI * Math.pow(r,3);
    },
    rectPrism: function(l,w,h){
      return l * w * h;
    },
    cube: function(l){
      return Math.pow(l,3);
    },
    triPrism: function(l,w,h){
      return (l * w * h) / 2;
    },
    cylinder: function(r,h){
      return Math.PI * Math.pow(r,2) * h;
    },
    rectPyramid: function(b,h){
      return (b * h) / 3;
    }
  },
  perimeter: {
    square: function(l){
      return l * 4;
    },
    rectangle: function(l,w){
      return (l * 2) + (w * 2);
    },
    circle: function(r){
      return 2 * Math.PI * r;
    }
  },
  findAngle: {
    withOH: function(opposite,hypotenuse){

    },
    withAH: function(adjacent,hypotenuse){

    },
    withOA: function(opposite,adjacent){

    }
  },
  findSideLengths: {
    adjacent: function(theta,opposite){
      return Math.sin(theta) * opposite;
    },
    opposite: function(theta,){

    },
    hypotenuse: function(theta,opposite){
      return Math.sin(theta) * opposite;
    }
  }
};
function testArray(array,input){
  let found = false
  for (index in array){
    if (index === input){
      found = true;
    };
  };
  if (found){
    return true
  } else {
    return false;
  };
};
function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)){
    x = x.replace(pattern, "$1,$2");
  }
  return x;
}
