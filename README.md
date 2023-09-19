# React Composition Patterns

Example code of three composition patterns for React components: Higher Order Components (HOCs), Render Props and Custom Hooks.

## Summary

All three versions essentially perform the same task, which is abstracting the logic for fetching and filtering data away from the table's UI.

From this simple example, and everything I studied before this, I'm under the impression that, in most cases, hooks provide the most elegant solution.

That said, I can think of situations where the other two might prove useful:

### HOCs

For when some logic or presentation needs to be shared exactly the same between multiple components.

As an example, a withDataFetching HOC could handle the conditional rendering of loading and error messages on components that fetch data, as long as every component shares the same UI for these states.

If there's a need to implement custom UI or logic for these states, hooks would be easier to write, and more importantly, easier to read and mantain. It can be done with HOCs, but it gets much more complex.

### Render Props

One particularly useful concept is the notion of slots, combined with the render props pattern.

Take a news article component, for example. Say that on one page, only the main article should be displayed. On a different page, however, maybe you want to show related articles, or maybe some ads based on the article's topic. Maybe both, or something else.

The main component could have slots, that render optional render props, passed to it whenever appropriate.

Of course, this could easily be done with just regular props and conditional rendering, but this pattern seems very suitable for this use case.
