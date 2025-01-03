# Comprehensive Guide to CSS

## Table of Contents
1. Introduction to CSS
2. CSS Syntax
3. Selectors
4. Box Model
5. Positioning
6. Flexbox
7. Grid Layout
8. Media Queries
9. CSS Variables
10. Animations

---

## 1. Introduction to CSS
Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS defines how elements should be displayed on screen, paper, or in other media.

**Advantages of CSS:**
- Separation of content and presentation.
- Reusability of styles.
- Improved page loading speed.
- Greater control over layout and design.

---

## 2. CSS Syntax

CSS is made up of rulesets consisting of selectors and declarations:

```css
selector {
  property: value;
}
```

Example:
```css
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
```

---

## 3. Selectors
Selectors define which HTML elements a CSS rule applies to. Here are some common selectors:

### Basic Selectors
- **Type Selector:** Targets all elements of a specific type.
  ```css
  p {
    color: blue;
  }
  ```

- **Class Selector:** Targets elements with a specific class.
  ```css
  .highlight {
    background-color: yellow;
  }
  ```

- **ID Selector:** Targets an element with a specific ID.
  ```css
  #header {
    font-size: 24px;
  }
  ```

### Combinators
- **Descendant Selector:**
  ```css
  div p {
    margin: 0;
  }
  ```
- **Child Selector:**
  ```css
  div > p {
    padding: 10px;
  }
  ```

### Pseudo-Classes
- **Hover:**
  ```css
  a:hover {
    color: red;
  }
  ```

### Attribute Selectors
- **Exact Match:**
  ```css
  input[type="text"] {
    border: 1px solid black;
  }
  ```

---

## 4. Box Model
The CSS box model defines how elements are structured:

1. **Content** - The inner content.
2. **Padding** - Space between content and border.
3. **Border** - Surrounds the padding.
4. **Margin** - Space outside the border.

Example:
```css
div {
  width: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```

---

## 5. Positioning
Positioning determines how an element is placed in a document.

### Types of Positioning
1. **Static (default):**
  ```css
  div {
    position: static;
  }
  ```

2. **Relative:**
  ```css
  div {
    position: relative;
    top: 10px;
    left: 20px;
  }
  ```

3. **Absolute:**
  ```css
  div {
    position: absolute;
    top: 50px;
    left: 100px;
  }
  ```

4. **Fixed:**
  ```css
  div {
    position: fixed;
    bottom: 0;
    right: 0;
  }
  ```

5. **Sticky:**
  ```css
  div {
    position: sticky;
    top: 0;
  }
  ```

---

## 6. Flexbox
Flexbox is a layout model that arranges items in a single direction (row or column).

### Example:
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### Properties:
- `flex-direction`: row | column | row-reverse | column-reverse.
- `justify-content`: flex-start | flex-end | center | space-between | space-around.
- `align-items`: flex-start | flex-end | center | stretch.

---

## 7. Grid Layout
CSS Grid Layout is a powerful tool for creating two-dimensional layouts.

### Example:
```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.grid-item {
  background: lightblue;
  padding: 20px;
  text-align: center;
}
```

---

## 8. Media Queries
Media queries enable responsive design by applying styles based on screen size.

### Example:
```css
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

---

## 9. CSS Variables
CSS Variables (custom properties) store reusable values.

### Example:
```css
:root {
  --main-color: #3498db;
}

button {
  background-color: var(--main-color);
  color: white;
}
```

---

## 10. Animations
CSS animations enable transitions between styles.

### Example:
```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.box {
  animation: slideIn 2s ease-in-out;
}
```

---

## Practical Example
Here's a complete example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Example</title>
  <style>
    :root {
      --primary-color: #4CAF50;
      --secondary-color: #ffffff;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .header {
      background-color: var(--primary-color);
      color: var(--secondary-color);
      padding: 20px;
      text-align: center;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 15px;
      padding: 20px;
    }

    .box {
      background-color: var(--primary-color);
      color: var(--secondary-color);
      padding: 20px;
      text-align: center;
      border-radius: 8px;
      transition: transform 0.3s;
    }

    .box:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Welcome to CSS</h1>
  </div>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</body>
</html>
