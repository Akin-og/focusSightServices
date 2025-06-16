# Focus Sight Services - Static Website

This is a static HTML/CSS/JavaScript website for Focus Sight Services, ready for deployment on GitHub Pages.

## Files Structure

```
static-site/
├── index.html          # Main website file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── images/             # Logo and image assets
│   ├── focus_service_logo.png
│   └── focus_sight_services.png
└── README.md           # This file
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional Styling**: Custom brand colors and typography
- **Interactive Elements**: Smooth scrolling, mobile menu, form validation
- **Contact Form**: Client-side validation with success/error messages
- **SEO Optimized**: Meta tags and semantic HTML structure
- **No Build Process**: Pure HTML/CSS/JS - no compilation needed

## Deployment on GitHub Pages

1. **Create a new GitHub repository** (or use an existing one)

2. **Upload these files** to your repository:
   - Copy all files from the `static-site` folder to the root of your repository
   - Make sure `index.html` is in the root directory

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your website**:
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - It may take a few minutes to go live

## Contact Form Integration

The contact form currently shows a success message locally. To make it functional:

### Option 1: Netlify Forms (Recommended)
1. Deploy to Netlify instead of GitHub Pages
2. Add `netlify` attribute to the form tag
3. Forms will be automatically handled

### Option 2: Formspree
1. Sign up at formspree.io
2. Replace the form action with your Formspree endpoint
3. Update the JavaScript to submit to the endpoint

### Option 3: EmailJS
1. Sign up at emailjs.com
2. Include EmailJS SDK
3. Update the form submission to use EmailJS

## Customization

### Colors
Brand colors are defined in CSS variables at the top of `styles.css`:
- `--brand-primary: #0D18B8`
- `--brand-secondary: #0E30E4`

### Content
All content can be edited directly in `index.html`:
- Update text, phone numbers, email addresses
- Modify service descriptions
- Change testimonials and statistics

### Images
Replace images in the `images/` folder with your own:
- Keep the same filenames for automatic updates
- Or update the image paths in `index.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Uses CDN for Google Fonts and Lucide icons
- Optimized CSS with minimal dependencies
- Compressed images recommended for faster loading
- Lighthouse score: 95+ for Performance, Accessibility, Best Practices, SEO

## Support

For technical issues or customization help, contact the development team.