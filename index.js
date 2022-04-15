// Homework 1
// Roman Kulyk

const reverseString1 = (text) => {
  return text.split("").reverse().join("");
};

const reverseString2 = (text) => {
  let result = "";
  for (let i of text) {
    result = i + result;
  }
  return result;
};

const reverseString3 = (text) => {
  let result = "";
  for (let i = text.length; i >= 0; --i) {
    result += text.charAt(i);
  }
  return result;
};

const reverseString4 = (text) => {
  let result = "";
  for (let i = 0; i < text.length; ++i) {
    result = text[i] + result;
  }
  return result;
};

const reverseString5 = (text) => {
  let result = "";
  text.split("").forEach((element) => {
    result = element + result;
  });
  return result;
};

const reverseString6 = (text) => {
  return text.split("").reduce((result, letter) => letter + result);
};

const reverseString7 = (text) => {
  return text ? reverseString7(text.substr(1)) + text.charAt(0) : text;
};

const reverseString8 = (text) => {
  return Array.from(text).reduce((result, letter) => letter + result);
};

const reverseString9 = (text) => {
  let result = "";
  let length = text.length;

  while (length >= 0) {
    result += text.charAt(length);
    length -= 1;
  }
  return result;
};

const reverseString10 = (text) => {
  return text
    .split("")
    .sort(() => -1)
    .join("");
};

const reverseString11 = (text) => {
  return [...text].reverse().join("");
};

console.log(reverseString1("abc"));
console.log(reverseString2("abc"));
console.log(reverseString3("abc"));
console.log(reverseString4("abc"));
console.log(reverseString5("abc"));
console.log(reverseString6("abc"));
console.log(reverseString7("abc"));
console.log(reverseString8("abc"));
console.log(reverseString9("abc"));
console.log(reverseString10("abc"));
console.log(reverseString11("abc"));
