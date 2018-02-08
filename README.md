# BEM Naming Convention
BEM is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks. It stands for ***Block***, ***Element***, ***Modifier***. 

BEN is one of the most popular namiming convention methodologies used today.

Why is it so popular?

It can significantly increase development speed, debugging, and the implementation of new features in legacy code. The BEM approach ensures that everyone who participates in the development of a website works with a single codebase and speaks the same language. Using proper naming will prepare you for the changes in design of the website.

***Note:** Instead of element, we will call it:* ***part***

.{block}_{part}--{modifier}

Here are some examples:

```html
<div class="person person--female">
  <div class="person_arm">
    <!-- more content -->
  </div>
</di>

<div class="person person--male">
  <div class="person_arm">
    <!-- more content -->
  </div>
</di>
```
```css
.person { 
    color: blue; /* This would be the block level, as the component we are creating */
}

.person_arm { 
    position: relative; /* These are the parts that compose our block (person) */
}

.person--female { 
    color: yellow; /* These would be modifiers about our person */
}

.person--male {
    color: black; 
}
```

For more info see:

https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849
