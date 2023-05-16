# Make It Real - NAME OF THE PROJECT

This is a solution to the _______ project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Create a new rweb app with sepsarted backend and frontend
- create a new vite app
- upload and creat the gihub repo
- install the packages (Make it, Express and morgan)
- create the comonents struture
- creat the fuctions and the components
- create an account in neltfy
- upload the app to the github repo
- link the app in the github repo and the neltfy account
- create a new deployment



### Screenshot

![]()

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.


## My process

### Built with
- React Vite
- Express
- Make It resl Library

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
 <div className='ProductContainer'>
        <ProductList
          ProductList={Products}
          onSelectedProduct={handleSelect}
          onDeleteProduct={deleteProduct}
        />
```
```css
  .update__button {
  border: 1px solid rgb(20, 111, 231);
  color:rgb(20, 111, 231);
  margin-top: 15px;
  margin-left: 70px;
  font-weight: bold;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
```
```js
 const [Products, setProducts] = useState();
  const [selectedProduct, setSelectedProduct] = useState({});

  const [isEditing, setIsEditing] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts([...Products, newProduct]);
  };

```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.