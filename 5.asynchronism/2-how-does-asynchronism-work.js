// JS can only do one task at a time. But it can delegate tasks to other processes: this concurrency
// model is called EventLoop

// JS has a call stack(LIFO), where it puts function calls according to the execution order of our program
// When JS finishes executing a function, it removes it from the call stack

// Callback > function that executes after a task finishes (example: when the server responds)
// When a task finishes (for example an API request), it leaves the function callback to be executed in the message queue
// Message queue (cola de tareas) [FIFO]. Which tasks end up here? Server requests, visual interactions, client side
// navigation, events that are executed every certain time
// The job of the Event loop is to look into the call stack and determine if the call stack is empty or not. 
// If the call stack is empty, it looks into the message queue to see if there’s any pending call back waiting to be executed.
// Only when the program doesn't have more functions in the call stack, the EventLoop pushes the callback to the top of the stack.

// The event loop, the web APIs and the message queue are not part of the JavaScript engine, it’s a part of browser’s JavaScript
// runtime environment

// Program asks bitcoin price to the browser and asks to execute a callback once the response is received
// When the browser gets the response, the callback function to be executed is put in the EventLoop (bitcoin_price=xxx + callback)

//https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff
