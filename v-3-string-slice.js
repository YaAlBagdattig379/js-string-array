//  example:: 1.  'split' types of two.
// const anthem = 'amr sonar bangla ami tomai valobasi';
// // const words = anthem.split(' ');
//   const withouta = anthem.split('a');
// console.log(withouta);





//  example:: 2.  'slice' 
// const anthem2 = 'amr sonar bangla ami tomai valobasi';
// const words = anthem2.slice(4, 13);
// console.log(words);



//  example:: 3.  'substr' 
// const anthem3 = 'amr sonali bangla ami tomai valobasi';
// const words = anthem3.substr(4, 5);
// console.log(words);


//  example:: 4.  'substring' 
// const anthem4 = 'amr sonar bangla ami tomai valobasi';
// const words = anthem4.substring(4, 8);
// console.log(words);


//  example:: 5.  'concat()' 
// const propose = 'ami';
// const propose2 = 'Tomai';
// const propose3 = 'Valobasi';
// const propose4 = 'Na';
// const totalWords = propose.concat(propose2).concat(propose3).concat(propose4);
// console.log(totalWords);


//  example:: 6-a.  'join()' 
// const propose = ['ami','tomai','valo','basi','na'];

// const totalWords = propose.join('');
// console.log(totalWords);


//  example:: 6-b.  'join()' 
// const propose2 = ['ami','tomai','valo','basi','na'];

// const totalWords = propose2.join(' , ');
// console.log(totalWords);


//  example:: 6-c.  'join()' 
const propose3 = ['ami','tomai','valo','basi','na'];

const totalWords = propose3.join(' hello ');
console.log(totalWords);