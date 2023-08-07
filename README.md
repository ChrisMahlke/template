# Template Project

This is a template project that showcases a basic setup for TypeScript-based applications. The app initializes by logging the output of a generic `identity` function using both string and number data types.

## Description

- The application is bundled using Webpack.
- Includes configurations for testing with Jest.
- Ensures code quality with Husky, lint-staged, ESLint, and Prettier.
- Uses the ArcGIS core and Esri's Calcite components.
- Styled using styled-components and includes a generic identity function demonstration.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chrismahlke/template.git
   ```

2. Navigate to the project directory:

   ```bash
   cd template
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running the Project

To start the development server:

```bash
npm start
```

To build the project for production:

```bash
npm run build
```

For testing:

```bash
npm test
```

## Features

- **TypeScript Setup:** The main functionality is demonstrated in the `index.tsx` file, where a generic identity function is tested with both string and number data types.
- **Styling:** Uses styled-components for styling. Global styles can be found in the `styles/index.css` file.
- **ArcGIS & Esri Components:** The project depends on the ArcGIS core and Esri's Calcite components, making it suitable for creating applications with geographic data and Esri's design components.
- **Code Quality Tools:** With Husky, lint-staged, ESLint, and Prettier integrated, the project ensures that the code committed is of high quality.

## Contributing

Feel free to create issues or pull requests if you have suggestions or improvements.

## License

This project is licensed under the ISC license.

---

This is a basic README to get you started. Depending on the eventual functionality and complexity of your project, you might want to expand upon this, adding sections like "Known Issues", "Roadmap", or "Acknowledgments".
