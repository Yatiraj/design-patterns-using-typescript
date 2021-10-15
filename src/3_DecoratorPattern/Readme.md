# Decorator Pattern
The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

In our example we are using Decorator pattern for StarBucks order system, to order beverage and add condiments dynamically.

## Learnings from this chapter:
### OO Principles:
- Classes should be open for extension, but closed for modification

### Notes

- While it may seem like a contradiction, there are techniques for allowing code to be extended without direct modification. Be careful when choosing the areas of code that need to be extended; applying the Open-Closed Principle EVERYWHERE is wasteful and unnecessary, and can lead to complex, hard-to-understand code.

- Inheritance is one form of extension, but not necessarily the best way to achieve flexibility in our designs.
- In our designs we should allow behavior to be extended without the need to modify existing code.
- Composition and delegation can often be used to add new behaviors at runtime.
- The Decorator Pattern provides an alternative to subclassing for extending behavior.
- The Decorator Pattern involves a set of decorator classes that are used to wrap concrete components.
- Decorator classes mirror the type of the components they decorate. (In fact, they are the same type as the components they decorate, either through inheritance or interface implementation.)
- Decorators change the behavior of their components by adding new functionality before and/or after (or even in place of) method calls to the component.
- You can wrap a component with any number of decorators.
- Decorators are typically transparent to the client of the component—that is, unless the client is relying on the component’s concrete type.
- Decorators can result in many small objects in our design, and overuse can be complex.

### code details
- beverage directory-> Has beverage abstract class and its subclasses for different beverages
- condimentDecorator directory-> Has condimentDecorator abstract class, which uses decorator pattern to add behaviours to beverages dynamically. This directory has subclasses for condimentDecorator

### How to run
* npm install
* npm start