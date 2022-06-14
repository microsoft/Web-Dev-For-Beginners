# What is web storage ?

With web storage, web applications can store data locally within the user's browser.

Large amounts of data can be stored locally without affecting website performance, and web storage is more secure. Web storage is based on the origin (per domain and protocol). All pages from a single source can store and access the same information.

## Web Storage Objects

There are two types of web storage which are as follow:

- window.localStorage
- window.sessionStorage

**window.localStorage** - stores data with no expiration date.

**window.sessionStorage** - stores data for one session (data is lost when the browser tab is closed).

Before using web storage, check browser support for localStorage and sessionStorage:

```
    if (typeof(Storage) !== "undefined") {
          // Code for localStorage/sessionStorage.
           }
            else {
         // Sorry! No Web Storage support.
           }
```

### The localStorage Object:

The data is stored in the localStorage object with no expiration date. When the browser is closed, the data is not deleted, and it will be available the next day, week, or year.

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="output"></div>

    <script>
      // Check browser support
      if (typeof Storage !== "undefined") {
        // Store
        localStorage.setItem("firstname", "Maria");
        // Retrieve
        document.getElementById("output").innerHTML =
          localStorage.getItem("firstname");
      } else {
        document.getElementById("output").innerHTML =
          "Sorry, your browser does not support Web Storage...";
      }
    </script>
  </body>
</html>
```
    <!--output-->
    Maria


Example explained:
- Create a localStorage name/value pair with name="firstname" and value="Maria"
- Now go to the application tab in any browser's devtools, where you'll find a local storage with the key and value columns, and you'll see "firstname" in the key column and "Maria" in the value column.
- Fetch the value of "firstname" and insert it into the element with id="output"
- Now this will print "Maria"

### The sessionStorage Object:

The sessionStorage object is similar to the localStorage object, with the exception that it only stores data for one session. When the user closes the specific browser tab, the data is deleted.

The following example counts the number of times a user has clicked a button, in the current session:

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      function clickCounter() {
        if (typeof Storage !== "undefined") {
          if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
          } else {
            sessionStorage.clickcount = 1;
          }
          document.getElementById("output").innerHTML =
            "You have clicked the button " +
            sessionStorage.clickcount +
            " time(s) in this session.";
        } else {
          document.getElementById("output").innerHTML =
            "Sorry, your browser does not support web storage...";
        }
      }
    </script>
  </head>
  <body>
    <p><button onclick="clickCounter()" type="button">Click me!</button></p>
    <div id="output"></div>
    <p>Click the button to see the counter increase.</p>
    <p>
      Close the browser tab (or window), and try again, and the counter is
      reset.
    </p>
  </body>
</html>
```

 Output:

 ![output](https://user-images.githubusercontent.com/55904928/137079262-7fa2b512-1873-4075-88eb-7c7c5bf12d13.jpeg)
 
 Example Explained:

 - It will first check whether the clickcount key is present or not in the session storage, and if it is not, it will create the key "clickcount" with a value of 1.
 - Now if you click on the "click me" button then the value of clickcount is get incremented by 1.
 - You can check session storage in devtools, and the value of clickcount in the value column will show the number of times you clicked.
 - If you close the browser tab, the counter will be reset to zero, and the value of clickcount will be 0.  
 