// JS can only do one task at a time. But it can delegate tasks to other processes: this concurrency
// model is called EventLoop

// JS has a call stack, where it puts function calls according to the execution order of our program
// When JS finishes executing a function, it removes it from the call stack

// Callback > function that executes after a task finishes (example: when the server responds)
// When a task finishes (for example an API request), it leaves the function callback to be executed in the EventLoop
// EventLoop (cola de tareas) [FIFO]. Which tasks end up here? Server requests, visual interactions, client side
// navigation, events that are executed every certain time
// Only when the program doesn't have more functions in the call stack, it will take functions from the EventLoop

// Program asks bitcoin price to the browser and asks to execute a callback once the response is received
// When the browser gets the response, the callback function to be executed is put in the EventLoop (bitcoin_price=xxx + callback)