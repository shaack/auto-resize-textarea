# auto-resize-textarea

Auto resizes the height of any &lt;textarea&gt; to match the text input.

- No dependencies
- Works with Bootstrap 

## Try it

[Demo page](https://shaack.com/projekte/auto-resize-textarea/)

# Repository 

[GitHub](https://github.com/shaack/auto-resize-textarea)

## Usage

```html
<textarea class="auto-resize"></textarea>

<script src="src/auto-resize-textarea.js"></script>
<script>
    autoResizeTextarea(document.querySelectorAll("textarea.auto-resize"), {maxHeight: 320})
</script>
```

## Installation

npm -i @shaack/auto-resize-textarea