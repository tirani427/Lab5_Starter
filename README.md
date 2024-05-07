# Lab 5 - Starter

Name: Tia Irani

Partner: N/A

Expose Website URL: [Expose](https://tirani427.github.io/Lab5_Starter/expose.html)

Explore Website URL: [Explore](https://tirani427.github.io/Lab5_Starter/explore.html)

### Lab Questions:
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    You could use a unit test to test the "message" feature of a messaging application if you don't want anything to be sent when there's nothing present in the textbox. For example, Apple doesn't allow a message to be sent if there aren't any characters present in the textbox. A similar application can be made for the messaging application being implemented here.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    You would use a unit test to test the "max message length" feature of a messaging application because the test wouldn't require referencing any relationship between other elements of the app. Since the test would rely solely on the input in the textbox, you would have a unit test with a greater amount than the maximum and then see if that input would be "accepted" or if something like an error message would pop up.
