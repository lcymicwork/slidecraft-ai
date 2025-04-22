export const generateHtmlFromSlides = (slides: string[]): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Presentation</title>
        <style>
          .slide { page-break-after: always; }
        </style>
      </head>
      <body>
        ${slides.map(slide => `<div class="slide">${slide}</div>`).join('')}
      </body>
    </html>
  `;
};