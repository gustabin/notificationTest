## User Guide

To use this application, follow the steps below:

1. **Prerequisites**
   - Make sure you have Node.js installed on your machine.
   - Clone or download the application repository.

2. **Setup**
   - Open a terminal and navigate to the root directory of the application.
   - Run the following command to install the dependencies:

     ```bash
     npm install
     ```

3. **User Configuration**
   - Open the `src/users.js` file in a text editor.
   - Add at least 3 users with different configurations using the following structure:

     ```javascript
     const users = [
       {
         id: 1,
         name: 'User Name',
         email: 'email@example.com',
         phoneNumber: '1234567890',
         subscribed: ['Sports', 'Movies'],
         channels: ['SMS', 'E-Mail', 'Push Notification']
       },
       // Add more users here...
     ];

     export default users;
     ```

4. **Execution**
   - In the terminal, navigate to the root directory of the application.
   - Run the following command to start the application:

     ```bash
     npm start
     ```

5. **Usage**
   - A user interface will open in your browser.
   - In the submission form, select a message category and enter the message.
   - Click the "Send" button to send the message and generate a simulated notification.
   - In the log history, you can view all notification records, sorted from newest to oldest.

6. **Unit Testing**
   - In the terminal, navigate to the root directory of the application.
   - Run the following command to execute the unit tests:

     ```bash
     npm test
     ```

You're all set! Now you can use the notification application and explore its features.
