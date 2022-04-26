# State Pattern
A Compound Pattern combines two or more patterns into a solution that solves a recurring or general problem

### Notes
CodeEg:  Here Duck simulator is implemented using patterns like Adapter, Decorator, AbstractFactory etc.
Book has example of using composite & Observer pattern upon these.
Book also has example of MVC pattern.

Patterns are often used together and combined within the same design solution.

A compound pattern combines two or more patterns into a solution that solves a recurring or general problem.


### **BULLET POINTS from book**

- The Model View Controller (MVC) Pattern is a compound pattern consisting of the Observer, Strategy, and Composite Patterns.

- The model makes use of the Observer Pattern so that it can keep observers updated yet stay decoupled from them.

- The controller is the Strategy for the view. The view can use different implementations of the controller to get different behavior.

- The view uses the Composite Pattern to implement the user interface, which usually consists of nested components like panels, frames, and buttons.

- These patterns work together to decouple the three players in the MVC model, which keeps designs clear and flexible.

- The Adapter Pattern can be used to adapt a new model to an existing view and controller.

- MVC has been adapted to the web.

- There are many web MVC frameworks with various adaptations of the MVC pattern to fit the client/server application structure.