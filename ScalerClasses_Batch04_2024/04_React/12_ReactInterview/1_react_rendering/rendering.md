## Howe react renders works

## JSX -> JS(Tranpilation)
* Babel -> JSX -> JS
* React: done the coversion of your UI into JSON object -> VDOM


Searlize version of my react program is JSON object and there must be a desrialize algorithm to convert into HTML/CSS.

1. Intial Render:
* **VDOM**: Virtaul DOM: It is a memory representation of orginal DOM of the broswer.


2. Update few changes: update the state
* React Will create another VDOM and then it will compare with the previous virtual DOM.
* This process of comparing our previous/old VDOM with the current/new virtaul DOM is known as `Reconcilation`.
* React use an algorithm known as `Diffing Algorithm` to compare your previous/old VDOM with the current/new VDM.
* Time complexity of our `Diffing Algorithm` -> O(N), Where N is the number of nodes affected in our current DOM.


3. Upadte the real DOM.
* It will be using those minimum set of chnages and with those changes it is going to update real DOM.


link: https://docs.google.com/document/d/1h1RvWNmus25zzmthot13RHBK0BNGtxBlVff3mMQhD0c/edit?tab=t.0