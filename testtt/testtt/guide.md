# Rain Dream Portfolio 🌧️

A beautiful, animated personal portfolio website with a calming rain theme and glassmorphism design.

![Rain Theme](https://img.shields.io/badge/Theme-Rain-4a9fd8)
![Language](https://img.shields.io/badge/Language-Vietnamese-blue)

## ✨ Features

- **Animated Rain Effect** - Realistic falling raindrops using CSS animations
- **Glassmorphism Design** - Modern frosted glass effect with backdrop blur
- **Theme Toggle** - Switch between two blue rain color schemes
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Fade-in effects and hover interactions
- **Vietnamese Language** - Built for Vietnamese users

## 📁 File Structure
```
rain-dream-portfolio/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Rain animation and theme toggle
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Direct Use
1. Download all files (`index.html`, `style.css`, `script.js`)
2. Put them in the same folder
3. Double-click `index.html` to open in your browser
4. That's it! No server needed.

### Option 2: Using Live Server (Recommended for development)
1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"
4. Your site will open with auto-refresh on save

## 🎨 Customization Guide

### Change Your Personal Information

Open `index.html` and modify these sections:
```html
<!-- Change your name -->
<strong>Nguyễn asdasd</strong>  <!-- Replace with your name -->

<!-- Change your location -->
<mark>Adsasd, Tân Biên</mark>  <!-- Replace with your city -->

<!-- Change your bio -->
<p class="lead">
    Tôi thích chơi game, học lập trình...  <!-- Write your story -->
</p>

<!-- Change your zodiac sign -->
<div class="pill">Cung: Nhân Mã</div>  <!-- Your zodiac -->
```

### Change Your Avatar Image

Replace the image URL in `index.html`:
```html
<img src="https://images.unsplash.com/photo-1520975912628-0a4b5d9121a4..." 
     alt="Avatar">
```

**Options:**
- Use a direct image URL (from Unsplash, Imgur, etc.)
- Use a local file: `<img src="avatar.jpg" alt="Avatar">`
- Keep aspect ratio 1:1 (square) for best results

### Change Colors

Edit `style.css` at the top (`:root` section):
```css
:root {
    --bg-1: #e8f4f8;        /* Light background */
    --bg-2: #d4e8f0;        /* Darker background */
    --accent: #4a9fd8;      /* Main blue color */
    --accent-2: #7cb9e8;    /* Secondary blue */
    --accent-light: #b8ddf0; /* Light blue for pills */
}
```

**Popular Color Schemes:**

**Purple Rain:**
```css
--accent: #9b59b6;
--accent-2: #bb8fce;
--accent-light: #d7bde2;
```

**Green Nature:**
```css
--accent: #27ae60;
--accent-2: #52be80;
--accent-light: #a9dfbf;
```

**Orange Sunset:**
```css
--accent: #e67e22;
--accent-2: #f39c12;
--accent-light: #f8c471;
```

### Adjust Rain Intensity

Edit `script.js` line 3:
```javascript
const count = Math.min(Math.floor(window.innerWidth / 30), 40);
//                                                  ↑       ↑
//                                          Change these numbers
```

- **First number (30)**: Lower = more rain, Higher = less rain
- **Second number (40)**: Maximum number of raindrops

Examples:
- Light rain: `/50, 20`
- Normal rain: `/30, 40` (default)
- Heavy rain: `/20, 60`

### Change Rain Speed

Edit `script.js` line 30:
```javascript
duration: (2 + Math.random() * 3) * 1000,
//         ↑                    ↑
//    Base speed          Speed variation
```

- Lower numbers = faster rain
- Higher numbers = slower rain
- `(1 + Math.random() * 2) * 1000` = fast rain
- `(3 + Math.random() * 4) * 1000` = slow rain

### Make Card Bigger/Smaller

Edit `style.css` line 38:
```css
.card {
    max-width: 900px;  /* Change this number */
}
```

- `700px` = Small card
- `900px` = Medium card (default)
- `1200px` = Large card

## 🔗 Add Social Links

Replace the `#` with your actual links in `index.html`:
```html
<!-- Main buttons -->
<a class="btn secondary" href="#">Facebook</a>
<!-- Change to: -->
<a class="btn secondary" href="https://facebook.com/yourprofile">Facebook</a>

<!-- Side buttons -->
<a class="btn" href="#contact">Nhắn tin</a>
<!-- Change to: -->
<a class="btn" href="https://m.me/yourprofile">Nhắn tin</a>

<a class="btn secondary" href="#">Portfolio</a>
<!-- Change to: -->
<a class="btn secondary" href="https://yourportfolio.com">Portfolio</a>
```

## 🌐 Publishing Your Site

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named `username.github.io`
3. Upload your files
4. Visit `https://username.github.io`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Get instant URL like `yoursite.netlify.app`

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

### Option 4: Traditional Hosting
Upload files via FTP to any web hosting service that supports static sites.

## 🛠️ Troubleshooting

### Rain animation not working
- Check that `script.js` is in the same folder as `index.html`
- Open browser console (F12) and check for errors
- Make sure JavaScript is enabled in your browser

### Fonts not loading
- Check your internet connection (fonts load from Google Fonts)
- If offline, download fonts and use local files

### Theme toggle not working
- Verify `script.js` is loaded properly
- Check browser console for JavaScript errors
- Make sure the button has `id="themeBtn"`

### Card looks wrong on mobile
- Clear browser cache
- Check that `style.css` is loading correctly
- Try in a different browser

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips & Best Practices

1. **Image Optimization**: Compress your avatar image before uploading (use TinyPNG or similar)
2. **Performance**: If rain lags, reduce raindrop count
3. **Accessibility**: Always include `alt` text for images
4. **SEO**: Update the `<title>` tag with your name
5. **Testing**: Test on multiple devices and browsers

## 📝 Common Modifications

### Remove the "About" section
Delete this from `index.html`:
```html
<section id="more" class="more">
    <h2>Về tôi</h2>
    <p>...</p>
</section>
```

### Add more info pills
Add after existing pills in `index.html`:
```html
<div class="pill">Your text here</div>
```

### Change animation speed
In `style.css`, find `@keyframes fadeIn` and adjust the duration in `.card` animation.

## 🎓 Learning Resources

Want to learn more? Check out:
- [HTML Basics](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Web.dev](https://web.dev/learn/)

## 🤝 Support

If you need help:
1. Check the troubleshooting section above
2. Review your code for typos
3. Test in a different browser
4. Ask alterGolden

## 🌟 Credits

- Design inspiration: Modern glassmorphism UI trends
- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: Unicode emoji

---

**Made with ❤️ and lots of ☕**

*Happy coding!* 🚀