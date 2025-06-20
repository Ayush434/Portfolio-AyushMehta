# Ayush Mehta - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Software Engineer.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Projects**: Click on project cards to view detailed information
- **Smooth Navigation**: Smooth scrolling and mobile-friendly navigation
- **Performance Optimized**: Fast loading and optimized for performance

## 🚀 Live Demo

Visit my portfolio: [https://ayush434.github.io/portfolio](https://ayush434.github.io/portfolio)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and animations
- **GitHub Pages**: Hosting and deployment

## 📁 Project Structure

```
Portfolio-AyushMehta/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── scripts.js          # JavaScript functionality
├── assets/             # Assets folder
│   ├── resume.pdf      # Resume file
│   └── screenshots/    # Project screenshots
└── README.md           # This file
```

## 🎯 Sections

1. **Hero Section**: Introduction and social links
2. **About**: Personal information and skills
3. **Experience**: Work history and achievements
4. **Projects**: Portfolio projects with detailed modals
5. **References**: Professional references
6. **Contact**: Contact information and social links

## 🔧 Setup Instructions

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ayush434/portfolio.git
   cd portfolio
   ```

2. **Open in your browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

3. **Customize the content**:
   - Edit `index.html` to update personal information
   - Modify `scripts.js` to update project data
   - Update `styles.css` to customize the design

### GitHub Pages Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "GitHub Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at**:
   `https://yourusername.github.io/repository-name`

## 📝 Customization

### Adding New Projects

1. **Update the project data** in `scripts.js`:
   ```javascript
   'new-project': {
     title: 'Your Project Title',
     description: 'Brief description',
     longDescription: 'Detailed description with HTML',
     techStack: ['Tech1', 'Tech2', 'Tech3'],
     links: [
       { text: 'Live Demo', url: 'https://your-demo.com' },
       { text: 'Source Code', url: 'https://github.com/your-repo' }
     ],
     screenshots: [
       'assets/screenshots/project-1.jpg',
       'assets/screenshots/project-2.jpg'
     ]
   }
   ```

2. **Add the project card** in `index.html`:
   ```html
   <div class="project-card" data-project="new-project">
     <h3>Your Project Title</h3>
     <p>Technologies Used</p>
     <p>Brief description</p>
   </div>
   ```

### Updating Personal Information

- **Contact Information**: Update email, phone, and social links in `index.html`
- **Experience**: Modify the experience section with your work history
- **Skills**: Update the skills list in the about section
- **References**: Add or modify reference information

### Styling Changes

- **Colors**: Modify CSS custom properties in `:root` and `[data-theme="dark"]`
- **Fonts**: Change the font-family in the body selector
- **Layout**: Adjust grid layouts and spacing as needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Performance

- **No tracking**: No analytics or tracking scripts
- **Fast loading**: Optimized images and minimal dependencies
- **Accessible**: Semantic HTML and keyboard navigation support
- **SEO friendly**: Proper meta tags and structured data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: Ayushmehta099@gmail.com
- **LinkedIn**: [linkedin.com/in/ayushmehta099](https://linkedin.com/in/ayushmehta099)
- **GitHub**: [github.com/ayush434](https://github.com/ayush434)
- **YouTube**: [youtube.com/@ayushmehta099](https://youtube.com/@ayushmehta099)

---

⭐ If you find this portfolio template helpful, please give it a star!