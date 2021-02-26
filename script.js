   // ## Array Cardio Day 2
   const log = console.log;
   const randomPeople = [
     { name: 'Clever', year: 1992 },
     { name: 'Edem', year: 1991 },
     { name: 'Dave', year: 1989 },
     { name: 'Matze', year: 1979 },
     { name: 'Mimi', year: 2015 }
   ];

   const comments = [
     { text: 'Love this!', id: 523423 },
     { text: 'Super cool', id: 823423 },
     { text: 'You are the best', id: 2039842 },
     { text: 'Jollof is my fav food ever', id: 123523 },
     { text: 'Nice Nice Nice!', id: 542328 }
   ];

   // Some and Every Checks
   // Array.prototype.some() // is at least one person 19 or older?
   const adult = randomPeople.some(person=> {
    const currentYear = (new Date()).getFullYear(); // 2021
    return currentYear - person.year >= 19 ?1: -1;
  })
    log(adult);

  // more concise
   /*const adult = randomPeople.some(person=> 
  (new Date()).getFullYear() - person.year>= 19)
  log(adult); // returns true
  */

   // Array.prototype.every() // is everyone 19 or older?
   const allAdult = randomPeople.every(person=> 
    (new Date()).getFullYear() - person.year >= 19)
    log(allAdult); 
   // Array.prototype.find()
   // Find is like filter, but instead returns just the one you are looking for
   // find the comment with the ID of 823423
   const comment = comments.find(comment=> comment.id === 823423);
   log(comment); 

   // Array.prototype.findIndex()
   // Find the comment with this ID
   const findI = comments.findIndex(comment=> comment.id===823423)
   log(findI);
   
   // delete the comment with the ID of 823423
  // delete comments[1]; this works but
  const newComments = [
      comments.slice(0, findI),
      comments.slice(findI + 1),
  ];
   console.table(comments);
   console.table(newComments);