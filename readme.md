# Notes

## cancelAnimationFrame
- seems optional, answer:
> To sum up, you SHOULD use cancelAnimationFrame to prevent side effects from a function auto-scheduled with requestAnimationFrame, and you CAN optionally use it to (micro-)optimize by avoiding its execution even if it has no side effects.
> *https://stackoverflow.com/questions/27108333/why-would-i-ever-need-to-cancelanimationframe*