module.exports = function check(str, bracketsConfig) {

  if(typeof str !== 'string'){
    return false;
  }

  // your solution
  let stack = [],
      open = [],
      close = [],
      chars = str.split(''),
      openIndex,
      closeIndex;

  for(let i = 0; i < bracketsConfig.length; i++){
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < chars.length; i++) {
    openIndex = open.indexOf(chars[i]);

    if (openIndex !== -1 && close.indexOf(chars[i]) === -1){
      // Нашли индекс открывающей скобки. Помещаем ее в стек
      stack.push(openIndex);
      continue;

    }
    if (openIndex !== -1 && close.indexOf(chars[i]) !== -1 && stack.indexOf(openIndex) === -1){
      // Нашли индекс универсальной скобки, но этой скобки еще нет в стеке. Помещаем ее в стек
      stack.push(openIndex);
      continue;

    }

    closeIndex = close.indexOf(chars[i]);
    if (closeIndex !== -1) {
      // Нашли закрывающую скобку. Проверяем ее соответствие открывающей
      openIndex = stack.pop();
      if (closeIndex !== openIndex) {
        return false;
      }
    }
  }

  // Проверяем дисбаланс открытых/закрытых скобок.
  if (stack.length !== 0) {
    return false;
  }

  return true;


}
