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

## Project2 Solution 
``` html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BMI Calculator</title>
    <style>
      nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-bottom: solid 1px #aaa;
  background-color: #eee;
}

nav a {
  display: inline-block;
  min-width: 9rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: solid 1px #aaa;
  text-align: center;
  text-decoration: none;
  color: #555;
}

nav a[aria-current='page'] {
  color: #000;
  background-color: #d4d4d4;
}

body {
  background-color: rgb(122, 115, 115);
}
button {
  background-color: #fff6f6;
  padding: 5px 40px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin: 10px 0px 0px 70px;
}

.container {
  display: flex;
  justify-content: center;
}

input[type='text'] {
  margin-left: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

#weight-guid {
  margin-top: 40px;
}

#results {
  font-size: 22px;
  color: white;
  padding-top: 10px;
}

    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>

    <div class="container">
      <form>
        <h1>BMI Calculator</h1>
        <p>
          <label for="height">
            <strong>Height in CM</strong>
            <input id="height" type="text" />
          </label>
        </p>

        <p>
          <label for="weight">
            <strong>Weight in KG</strong>
            <input id="weight" type="text" />
          </label>
        </p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guid">
          <h3>BMI Weight Guide</h3>
          <strong>
            <p>Under Weight = Less Than 18.6</p>
            <p>Normal Range = 18.6 and 24.9</p>
            <p>overweight = Greater than 24.9</p>
          </strong>
        </div>
      </form>
    </div>

    <script src="external.js"></script>
  </body>
</html>


```

``` javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter Valid Height : ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter Valid weight : ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}<span>`;
  }
});

```

## Project3 Solutions 
