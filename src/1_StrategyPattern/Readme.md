#Strategy Pattern
The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it. 

We’re using the Strategy Pattern to implement the various behaviors of our ducks. This tells you the duck behavior has been encapsulated into its own set of classes that can be easily expanded and changed, even at runtime if needed.


##Learnings from this chapter:
###OO Principles:
* Identify the aspects of your application that vary and separate them from what stays the same
* Program to an interface, not an implementation
* Favor composition over inheritance

###Notes
* Be careful while using inheritance. Might endup adding unintended behaviours in child class & would need be vigilant always. Add implementions in parent to only methods whose logic is most likely to be common in all child classes.
* For behaviours which will be different in each child class, use abstract method 
* For behaviours which are common in few childs, use interface and composition for code reusability and freedom to choose behaviour at runtime dynamically
* Creating systems using composition gives you a lot more flexibility. Not only does it let you encapsulate a family of algorithms into their own set of classes, but it also lets you change behavior at runtime

###code details
* Duck.ts -> Parent class, having implementation for common behaviours, abstract methods for uncommon behaviours, compositions that can choose behaviour at runtime
* fly directory-> interface for Fly behaviour and its implementations
* quack directory-> interface for Quack behaviour and its implementations

###How to run
* npm install
* npm start

