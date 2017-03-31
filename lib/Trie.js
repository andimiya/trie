  // ADD
  // Check if the first letter of the new word, matches the first letter in the Trie
    // if NO,
      //create a New Child of the node containing the first letter of the new word
    // if YES, while loop...
      // Check if the next letter of the new word match the next letters in the Trie
        // if NO,
          //create a New Child of the node
        // if YES,
          // Check if the next letter matches


class Trie {
  constructor(leaf, children) {
    this.leaf = true;
    this.children = {};
  }

  add(word) {
  // loop through the length of the newArray

  let newArray = word.split('');
  console.log(newArray, 'newArray');
    for (x = 0; x < newArray.length; x++) {
      // let newChild = new Trie(true, {});
      // console.log(newChild, 'newChild');
      console.log('test');
    }
  // console.log(newArray, 'newArray');
  }
}

let newChild = new Trie(true, {key: 'child'});

// console.log(Trie.add('cat'));
// console.log(newChild.add('cat'));



// console.log(newChild.add);
// add('cat');
      // create a new node for 1 letter

      // write a function to create a node
        // always return a new object leaf and children

      // add a key named after the current letter
        //to my parent's children
        // value of this key is the new node


//
// const trie = new Trie();
// console.log(trie.add('cat'));
// console.log(add('cat'));



/**
 * Create a Class Trie
 * that can work with a trie data structure
 * Instance Methods
 *
 * add( word )
 * @param word  string
 * @returns void
 *
 * exists( word )
 * @param word  string
 * @returns boolean
 *          true if the word exists in the trie, else false
 */
