// data/dictionary.js
const questions= {
     1: {
          Question: 'Which part of the Java memory model is responsible for storing static variables and method metadata? ',
          Options: {
               1:"Stack",
               2:"Heap",
               3:"Native Method Stack",
               4:"Method Area",
          },
          answer:"Method Area"
     },
     2: {
          Question: 'Which feature introduced in Java 8 allows methods to be written as expressions?',
          Options: {
               1:"Generics",
               2:"Annotations",
               3:"Enhanced for loop",
               4:"Lambda Expressions",
          },
          answer:"Lambda Expressions"
     },
     3: {
          Question: 'Which of the following statements about Java Classloaders is true?',
          Options: {
               1:"The bootstrap classloader loads classes from the classpath.",
               2:"The system classloader is the parent of the extension classloader.",
               3:"The extension classloader loads classes from the Java extension directories.",
               4:"Custom classloaders cannot be created in Java.",
          },
          answer:"The extension classloader loads classes from the Java extension directories."
     },
     4: {
          Question: 'Which of the following statements is true about HashSet in Java?',
          Options: {
               1:"HashSet maintains the order of elements.",
               2:"HashSet allows duplicate elements.",
               3:"HashSet is backed by a hash table.",
               4:"HashSet implements the List interface.",
          },
          answer:"HashSet is backed by a hash table."
     },
     5: {
          Question: 'Which interface does TreeSet implement in Java?',
          Options: {
               1:"List",
               2:"Set",
               3:"Queue",
               4:"Map",
          },
          answer:"Set"
     },
     6: {
          Question: 'Which of the following classes is synchronized in Java?',
          Options: {
               1:"ArrayList",
               2:"LinkedList",
               3:"Vector",
               4:"HashSet",
          },
          answer:"Vector"
     },
     7: {
          Question: "What is the main difference between Comparator and Comparable in Java?",
          Options: {
               1:"Comparable is used to define natural ordering of objects, while Comparator is used for custom ordering.",
               2:"Comparator can only compare strings, while Comparable can compare any type of object.",
               3:"Comparator is a class, while Comparable is an interface.",
               4:"Comparable is used for sorting collections, while Comparator is used for searching collections.",
          },
          answer:"Comparable is used to define natural ordering of objects, while Comparator is used for custom ordering."
     },
     8: {
          Question: 'What is the time complexity of the add() operation in a HashSet in the worst-case scenario when there are many hash collisions?',
          Options: {
               1:"O(1)",
               2:"O(log n)",
               3:"O(n)",
               4:"O(n^2)",
          },
          answer:"O(n)"
     }
};

export default questions;
