class VigenereCipheringMachine {
    constructor(dir) {
        this.dir = dir == false ? 'reverse' : 'direct';
      }

    encrypt(input, key) {
        if (!input || !key) {
            throw new Error();
        }
        let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let res = [],
            j = 0;
    
        input = input.toUpperCase();
        key = key.repeat(Math.ceil(input.match(/[a-z]/gi).length / key.length)).toUpperCase();
    
        for (let i =0; i < input.length; i++) {
            if (input[i].match(/[a-z]/gi)) {
                if (alphabet.indexOf(input[i]) + alphabet.indexOf(key[j]) > 25) {
                    res.push(alphabet[alphabet.indexOf(input[i]) + alphabet.indexOf(key[j]) - 26]);
                } else {
                    res.push(alphabet[alphabet.indexOf(input[i]) + alphabet.indexOf(key[j])]);
                }
                j++;
            } else {
                res.push(input[i]);
            }
        }
        return this.dir == 'direct' ? res.join('') : res.reverse().join('');
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error();
        }
        let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let res = [],
            j = 0;
    
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.repeat(Math.ceil(encryptedMessage.match(/[a-z]/gi).length / key.length)).toUpperCase();
    
        for (let i =0; i < encryptedMessage.length; i++) {
            if (encryptedMessage[i].match(/[a-z]/gi)) {
                if (alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(key[j]) < 0) {
                    res.push(alphabet[alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(key[j]) + 26]);
                } else {
                    res.push(alphabet[alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(key[j])]);
                }
                j++;
            } else {
                res.push(encryptedMessage[i]);
            }
        }
        return this.dir == 'direct' ? res.join('') : res.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
