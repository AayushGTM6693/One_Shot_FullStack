HTML forms are used to collect user input. The form element is a container for different types of input elements such as text fields, checkboxes, radio buttons, submit buttons, etc.

Here are some key concepts about HTML forms:

1. **Form Element**: The `<form>` element is used to create an HTML form for user input.
    ```html
    <form action="/submit-form" method="post">
         <!-- form elements go here -->
    </form>
    ```

2. **Action Attribute**: The `action` attribute defines the URL where the form data will be sent when the form is submitted.

3. **Method Attribute**: The `method` attribute specifies the HTTP method to be used when sending form data. Common methods are `GET` and `POST`.

4. **Input Elements**: Various input elements can be used to collect different types of data.
    - Text Input: `<input type="text" name="username">`
    - Password Input: `<input type="password" name="password">`
    - Radio Button: `<input type="radio" name="gender" value="male"> Male`
    - Checkbox: `<input type="checkbox" name="subscribe" value="newsletter"> Subscribe`
    - Submit Button: `<input type="submit" value="Submit">`

5. **Label Element**: The `<label>` element is used to define labels for input elements.
    ```html
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    ```

6. **Textarea Element**: The `<textarea>` element is used for multi-line text input.
    ```html
    <textarea name="message" rows="4" cols="50"></textarea>
    ```

7. **Select Element**: The `<select>` element is used to create a drop-down list.
    ```html
    <select name="cars">
         <option value="volvo">Volvo</option>
         <option value="saab">Saab</option>
         <option value="mercedes">Mercedes</option>
         <option value="audi">Audi</option>
    </select>
    ```

8. **Form Validation**: HTML5 introduced new form validation features.
    - Required Attribute: `<input type="text" name="username" required>`
    - Pattern Attribute: `<input type="text" name="phone" pattern="[0-9]{10}">`

9. **Form Attributes**: Additional attributes for the `<form>` element.
    - `autocomplete`: Specifies whether the form should have autocomplete on or off.
    - `novalidate`: When present, it specifies that the form should not be validated when submitted.

10. **Form Submission**: When a form is submitted, the name/value pairs of the form elements are sent to the server.
     ```html
     <form action="/submit-form" method="post">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          <input type="submit" value="Submit">
     </form>
     ```

These are the basic concepts of HTML forms. Forms are a crucial part of web development as they allow for user interaction and data collection.