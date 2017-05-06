function listProps(obj){
  for (let proName in obj){
    console.log(proName);
  };
};
function capitalize(word){
  return word.substring(0,1).toUpperCase() + word.substring(1,word.length);
};
