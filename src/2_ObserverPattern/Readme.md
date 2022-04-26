# Observer Pattern
The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically. 

We are using the observer pattern to notify the weather parameter changes to the displays that have subscribed

## Learnings from this chapter:

* Strive for loosely coupled designs between objects that interact

###Notes
- The Observer Pattern defines a one-to-many relationship between objects.
- Subjects update Observers using a common interface.
- Observers of any concrete type can participate in the pattern as long as they implement the Observer interface.
- Observers are loosely coupled in that the Subject knows nothing about them, other than that they implement the Observer interface.
- You can push or pull data from the Subject when using the pattern (pull is considered more “correct”).
- The Observer Pattern is related to the Publish/Subscribe Pattern, which is for more complex situations with multiple Subjects and/or multiple message types
- Publishers + Subscribers = Observer Pattern

### code details
- Subject.ts -> interface for Subjects
- WeatherData.ts -> Subject
- Observer.ts ->interface for observers
- display directory-> interface for display and its implementations

### How to run
- npm install
- npm start
