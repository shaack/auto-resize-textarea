# auto-resize-textarea

Auto resizes the height of any `<textarea>` to match the text input.

- No dependencies
- Works also with Bootstrap

## References

- [Demo page](https://shaack.com/projekte/auto-resize-textarea/)
- [GitHub repository](https://github.com/shaack/auto-resize-textarea)
- [npm package](https://www.npmjs.com/package/@shaack/auto-resize-textarea)

## Usage

```html
<textarea class="auto-resize"></textarea>

<script src="src/auto-resize-textarea.js"></script>
<script>
    autoResizeTextarea(document.querySelectorAll("textarea.auto-resize"), {maxHeight: 320})
</script>
```

## Installation

```bash
npm -i @shaack/auto-resize-textarea
```
