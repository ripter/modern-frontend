# Modern Frontend

## What **is** the Frontend?
* [HTML](https://html.spec.whatwg.org/)
* [CSS](https://www.w3.org/Style/CSS/specs.en.html)
* [JavaScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

I encourage you to check out the specifications on each part but don't worry if it feels overwhelming, because it is. Everything there is to know about each part is described in those specifications, but not in a very entertaining manner. It takes years to read and understand everything in those specifications. It's a good goal, but not required to get started.

To get started, we need a file for each of these parts. When we combine them, we get the full Frontend.

## Basic Structure
* `public/index.html`
* `public/css/styles.css`
* `public/js/main.js`

We place these files inside the `public/` folder because we need a server to serve them. Browsers follow a struct policy called [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) to keep web browsing safe. Because of this, you will quickly run into [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issues.

Thankfully, starting a static server is quite easy these days. You have a lot of choices depending on your system and favorite language. If you write a lot of JavaScript, you'll end up using Node.js.

```sh
$ npx http-server
```

http-server looks for a `public/` directory by default, so it doesn't need any configuration. Once it starts, you should get a message that your page is being served at http://127.0.0.1:8080
