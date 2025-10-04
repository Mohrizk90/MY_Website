# Certificates Directory

This directory contains your certificate images for the portfolio website.

## How to Add Your Certificates

1. **Add your certificate images** to this directory
2. **Update the certificates array** in `src/components/Certificates.js`
3. **Replace the sample data** with your actual certificates

## Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## Recommended Image Specifications

- **Aspect Ratio**: 3:2 or 4:3 (landscape orientation)
- **Resolution**: Minimum 800x600 pixels
- **File Size**: Keep under 2MB for optimal loading
- **Format**: JPG for photos, PNG for graphics with transparency

## Example Certificate Data Structure

```javascript
{
  id: 1,
  title: "Your Certificate Title",
  issuer: "Issuing Organization",
  date: "2024",
  image: "/certificates/your-certificate.jpg",
  category: "Programming" // or "AI/ML", "Cloud", "Data Science"
}
```

## Categories Available

- **Programming**: Software development, coding bootcamps, programming languages
- **AI/ML**: Machine learning, artificial intelligence, data science
- **Cloud**: AWS, Azure, Google Cloud, cloud computing
- **Data Science**: Data analysis, statistics, big data

## Tips

- Use descriptive filenames (e.g., `aws-cloud-practitioner-2024.jpg`)
- Keep images optimized for web (compress if needed)
- Ensure good image quality for professional appearance
- Consider using WebP format for better compression

## Current Sample Certificates

The component currently shows sample certificates. Replace them with your actual certificates by:

1. Adding your certificate images to this directory
2. Updating the `certificates` array in `Certificates.js`
3. Removing or commenting out the sample data

Your certificates will then be displayed in a beautiful, responsive grid with filtering and modal viewing capabilities!
