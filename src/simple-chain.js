const chainMaker = {
  link: [],
  getLength() {
      return this.link.length;
  },
  addLink(value) {
      this.link.push(value);
      return this;
  },
  removeLink(position) {
      if (typeof position != 'number' || position - 1 > this.getLength() - 1 || position - 1 < 0) {
          this.link = [];
          throw new Error();
      }
     this.link.splice(position - 1,1);
     return this;
  },
  reverseChain() {
      this.link.reverse();
      return this;
      
  },
  finishChain() {
      let str = '';
      for(let i = 0; i < this.getLength(); i++) {
          str += `( ${this.link[i]} )`;
          
          if(i < this.getLength() - 1) {
            str += '~~';
          }
        }

        this.link = [];

        return str;
  }
};

module.exports = chainMaker;
