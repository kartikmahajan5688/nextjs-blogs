---
title: Virtual DOM in React
excerpt: Virtual DOM is a fundamental React concept which helps React to improve the re-rendering performance whenever the DOM is updated. In this article, we will cover what the virtual DOM is, exploring its benefits using a practical example. Let’s get started!
image: virtual-dom-thumb.png
isFeatured: true
date: "2024-04-27"
---

## What is the DOM?

Before starting with virtual DOM, let’s refresh our knowledge about what DOM is.

DOM stands for Document Object Model. It is a programming interface that allows us to create, change or remove elements from the document.

When a user requests a webpage, the browser receives an HTML document for that page and it then constructs a tree like structure from the HTML to show the page. This tree-like structure is DOM where every node represents an HTML element.

## Disadvantages of DOM:

Every time the DOM gets updated, the updated element and its children have to be rendered again to update the UI of page.

Let’s take a simple example,

document.getElementById('some-id').innerValue = 'updated value';
When the above code is executed, the DOM undergoes the following steps:

1. The browser locates the HTML element with the specified id.
2. It removes any child elements from that particular element.
3. The element is updated with the ‘updated value’.
4. The CSS for both parent and child elements is recalculated.
5. The layout is updated.
6. Finally, the DOM is painted on the screen.

Recalculating the CSS and updating the layout involves complex algorithms and affects the performance. So react uses the Virtual DOM.

How is the virtual DOM different from real DOM?
As the name suggests, the virtual DOM is a lightweight replica of the actualht DOM. The virtual DOM can be saved in the browser memory and doesn’t change what is on the user screen. It provides a mechanism that allows the actual DOM to compute the minimal DOM operations while re-rendering the UI.

There are two phases in the React DOM strategy, rendering and reconciliation.

When an HTML element is updated, the virtual DOM is updated. Then React compares the virtual DOM with the snapshot of the virtual DOM taken just before the update, determines what element was changed and then updates only that element in the actual DOM. This is how the re-rendering is optimised.

Let’s consider the following HTML code and assume that the page gets re-rendered after certain interval of time.

```js
<div>
  <h3> Current Time </h3>
  <span> Time: {new Date().toLocaleString()} </span>
</div>
```

![Create routes via your file + folder structure](virtual-dom-thumb2.png)

React’s render() function creates the tree like structure. The initial render is seen on the left-hand side of the above image. When the state is updated, render() provides the new tree on right with updated time. Then it uses the diffing algorithm to determine the difference between both the trees. This process is called Reconciliation.

After the reconciliation process, React uses a renderer library which takes this information and renders the new DOM ensuring that only updated nodes are modified in the actual DOM.

Updates to the real DOM are sent in batches instead of updating it after every single change which leads to increased performance.

React also provides a set of life cycle methods that allow developers to control the reconciliation process, such as shouldComponentUpdate and forceUpdate, which can be used to optimise the performance of components.

## Diffing Algorithm

The diffing algorithm checks nodes in two virtual DOM trees by starting from the root node and recursively going through each node.

If a node in the old virtual DOM tree matches a node in the new virtual DOM tree in type and props, it is considered unchanged, and its children are checked next.

If a node in the new virtual DOM tree differs from the corresponding node in the old virtual DOM tree, it is considered changed, and the relevant part of the real DOM is updated.

React has a method to speed up the comparison process by using keys on elements. By assigning a key to an element, React can match elements in the old and new virtual DOM trees using the key, instead of comparing the entire tree. This helps React quickly identify which elements have been modified and which have not, leading to quicker and more effective updates.

## Conclusion

In conclusion, the Virtual DOM is one of the important concepts in React which boosts its speed and efficiency. It allows efficient updates in the UI improving the overall performance of React.
