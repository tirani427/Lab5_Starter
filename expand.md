## Lab 5 - Expand Portion Answers

1. Why is it important to put thought into your IDs and Classes when it comes to technology intersections?

    It's important to put thought into the IDs and Classes because the different programs have different ways to access those elements then. For example, in Javascript you can create a variable which equals another variable in HTML by using the class name or the ID given to that variable. But if the ID isn't specific enough (i.e. "selector" instead of "voice-selector") or (i.e. "picture" instead of "\[enter specification for said picture]-picture") then the Javascript might accidentally access a variable that it didn't mean to. So in order to make sure that implementation across those intersections is consistent, then the IDs and classes should be as specific as possible (within reason, of course).

2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?

    Data attributes are specific values which are attached to data types within HTML. They are normally either directly coded into the HTML line, or they can be accessed with Javascript by using dot notation or bracket notation. The implications of using Data attributes are that the variables are able to have data stored "private" to themselves. So in a sense that microdata is with regards to the variables themselves instead of the program as a whole.  
   For example, in HTML the code would be:  
   ``` HTML
   <select id="example-selector-lab5">  
       <option id="select" disabled selected>Select Something From The List</option>
       <option id="first-option"> Music</option>
       <option id="second-option">Television</option>
       <option id="third-choice">Movies</option>
   </select>
   ```
   and in Javascript, the code to access the same variables is:

   ```Javascript
   const selector_variable = document.getElementByID("example-selector-lab5");

   const option1 = document.getElementByID("first-option");
   option1.disabled = false;

   const selectedOption = selector_variable.selectedOptions[0];
   selectedOption.id = "final-select";
   ```


3. What is a DOM fragment? Why are they powerful?

    A DOM fragment is a DOM Node object which is technically never part of the main DOM tree. They're usually used to create document fragments, append certain elements to that document fragment, and then append that entire document fragment to the entire DOM tree. This makes them powerful because it can result in better overall performance since it doesn't require manipulation of the entire DOM. Since everything is localized to the specific portion which needs to be changed, the operations being performed on the fragment run faster as well.

4. What is the point of a "Virtual DOM"? What do you gain? What do you lose?

    The point of a "Virtual DOM" is to make processing speed remain fast after changing elements to a webpage. By using a Virtual DOM, you end up being able to dissect the changed information into small bits that process quicker than if you had to reload the entire page. Since it minimizes the interactions with the actual DOM, it increases performance speed. So, what's gained by using Virtual DOMs is increased performance speed and thus also efficiency. What's lost is the independence from frameworks, since Virtual DOMs run primarily from the Javascript framework. And since there is limited interaction with the actual DOM, the changed aspects are processed on memory instead - which means that you also end up having an increase in memory usage.  

5.  In Javascript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?

    You have to use `className` in order to access the class attribute of a variable because Javascript already uses the name `class` in order define another class within its own program. So even though the class is defined with `class` in HTML, because of the coinciding ability of that variable to create classes in Javascript, there needs to be another way to access that attribute without triggering the functionality attached to that word within Javascript. So, that's why they'd use `className` instead of `class.`

7. What is the difference between using addEventListener() and something like onClick()? What are the advantages / disadvantages of both?

   The Javascript command `addEventListener()` is used for any defined event that occurs on the webpage, whereas `onClick()` is specifically a function for when a part of the webpage is clicked on. So, where `addEventListener()` can be applicable and used for any event, `onClick()`'s useage is limited to the specific click action. Some advantages would be that `addEventListener()` provides a universal function to check certain happenings of the webpage, and `onClick()` provides an immediate function for when something is clicked on. A disadvantage would be that `onClick()` can only be applicable in certain scenarios and `addEventListener()` has a greater potential for memory leaks if not implemented properly.
