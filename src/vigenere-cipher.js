class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    let lettersArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    if (!message || !key) throw new Error();
    message = message.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let result = [];

    message = message.map(letter => {
      return lettersArr.indexOf(letter) == -1
        ? letter
        : lettersArr.indexOf(letter);
    });
    key = key.map(letter => lettersArr.indexOf(letter));
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (typeof message[i] != "number") {
        result.push(message[i]);
        continue;
      } else if (key[j] === undefined) {
        j = 0;
      }

      result.push(lettersArr[(message[i] + key[j]) % 26]);
      j++;
    }
    if (this.reverse == false) {
      return result.reverse().join("");
    } else {
      return result.join("");
    }
  }

  decrypt(encryptedMessage, key) {
    let lettersArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    if (!encryptedMessage || !key) throw new Error();

    let messageArr = encryptedMessage.toUpperCase().split("");
    let keyArr = key.toUpperCase().split("");
    let result = [];
    messageArr = messageArr.map(letter => {
      return lettersArr.indexOf(letter) == -1
        ? letter
        : lettersArr.indexOf(letter);
    });
    keyArr = keyArr.map(letter => lettersArr.indexOf(letter));
    let j = 0;
    for (let i = 0; i < messageArr.length; i++) {
      if (typeof messageArr[i] != "number") {
        result.push(messageArr[i]);
        continue;
      } else if (keyArr[j] === undefined) {
        j = 0;
      }

      result.push(lettersArr[(messageArr[i] + 26 - keyArr[j]) % 26]);
      j++;
    }
    if (this.reverse == false) {
      return result.reverse().join("");
    } else {
      return result.join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
