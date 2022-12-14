# JS Masonry

Create masonry layouts based on your CSS grid values 🎉

![JS Masonry](https://user-images.githubusercontent.com/50486078/196979467-7dde0de1-4d4d-46af-88b0-3978e0dd6af4.jpg)

**Using Alpine JS?** -
[Use Alpine JS Masonry](https://github.com/markmead/alpinejs-masonry)

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/data-masonry@latest/dist/masonry.min.js"
></script>
```

### With a Package Manager

```shell
yarn add -D data-masonry

npm install -D data-masonry
```

```js
import masonry from 'data-masonry'

document.addEventListener('DOMContentLoaded', masonry())
```

## Example

```html
<ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-masonry>
  <li class="bg-slate-800 text-white p-4 rounded h-64">Item 1</li>
  <li class="bg-slate-800 text-white p-4 rounded h-32">Item 2</li>
  <li class="bg-slate-800 text-white p-4 rounded h-16">Item 3</li>
  <li class="bg-slate-800 text-white p-4 rounded h-72">Item 4</li>
  <li class="bg-slate-800 text-white p-4 rounded h-48">Item 5</li>
  <li class="bg-slate-800 text-white p-4 rounded h-32">Item 6</li>
</ul>
```

And that's it.

_Fixed heights and Tailwind CSS are not necessary 🙅‍♀️_

Under the hood `data-masonry` will do all the work for you and will even handle
when the user resizes the window.

### Options

#### Delay Building Masonry Grid

If needed, you can pass the `waitDuration` option with a duration in
milliseconds like this.

```html
<ul
  class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
  data-masonry="{ waitDuration: 2500 }"
>
  ...
</ul>
```

This will trigger the masonry grid to build after 2500ms, this is helpful when
you have slow content that takes a while to load. However, I'd recommend using
the `pollDuration` option.

#### Rebuilding Masonry Grid Automatically

If needed, you can pass the `pollDuration` option with a duration in
milliseconds like this.

```html
<ul
  class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
  data-masonry="{ pollDuration: 2500 }"
>
  ...
</ul>
```

This will trigger the masonry grid to reload every 2500ms, this is helpful when
content is being added dynamically.

#### Rebuilding Masonry Grid with an Event

You can also trigger the `reload:masonry` on the window to trigger the masonry
grid to reload.

```js
const reloadMasonry = new Event('reload:masonry', {
  bubbles: true,
})

dispatchEvent(reloadMasonry)
```

## Issues

### Grid Items Stretching

This can be fixed by adding `align-items: flex-start` to the element with
`display: grid`.

## Stats

![](https://img.shields.io/bundlephobia/min/data-masonry)
![](https://img.shields.io/npm/v/data-masonry)
![](https://img.shields.io/npm/dt/data-masonry)
![](https://img.shields.io/github/license/markmead/js-masonry)
