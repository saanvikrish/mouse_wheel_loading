# Mouse Wheel Loading Animation

A compact desktop-style loading screen with a dark blueprint grid, a white mouse running in a wheel, and a custom animated progress bar.

## Preview

Open `index.html` in a browser, or serve the folder locally:

```sh
python3 -m http.server 4289
```

Then visit:

```text
http://127.0.0.1:4289/index.html
```

## How It Works

- The mouse/wheel animation uses a CSS sprite built from the provided PNG frames.
- The sprite is stabilized so the wheel stays visually anchored between frames.
- The loading percentage and bottom bar are updated with `requestAnimationFrame`.
- The page is static-host friendly and works on GitHub Pages.

## Files

- `index.html` - page structure
- `styles.css` - layout, background, sprite animation, loading bar styles
- `script.js` - progress percentage/bar loop
- `assets/frames/` - source frames and generated sprite sheets
