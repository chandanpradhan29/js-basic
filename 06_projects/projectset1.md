# project related to DOM

## Project Links 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project Solution

## Project 1 : Color Changer box

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Changer</title>

    <style>
      .button {
        border: 2px solid #212121;
        padding: 50px;
        margin: 3px;
      }
      .allbtn {
        margin-top: 100px;
      }
      #grey {
        background-color: #9b9898;
      }
      #blue {
        background-color: blue;
      }
      #yellow {
        background-color: yellow;
      }

      #purple {
        background-color: purple;
      }

      p {
        /* color: green; */
        font-weight: 600;
        margin-top: 100px;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <h1>Color Box switchers</h1>
    <div class="allbtn">
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="purple"></span>
    </div>

    <p>
      Try clicking on one of the colors above to change the background color of
      this page
    </p>

    <script src="external.js"></script>
  </body>
</html>

```

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == 'purple') {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```