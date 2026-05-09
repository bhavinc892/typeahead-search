# Typeahead Search Pro

A high-performance, debounced typeahead search component built with React and Tailwind CSS v4.

## Features

- **Real-time Suggestions**: Fetches data from an external API (DummyJSON) as you type.
- **Debounced API Calls**: Optimized performance using a custom debounce helper to prevent excessive network requests.
- **Selection Intelligence**: Smart logic prevents redundant API calls when a suggestion is selected.
- **Dynamic Highlighting**: Highlights matching text within the suggestion list.
- **Modern Styling**: Styled with Tailwind CSS v4 for a premium, responsive look.
- **Customizable**: Supports custom styles, data keys, and callback functions.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

This project uses Tailwind CSS v4 with a custom build script to work seamlessly with Create React App.

To start the development server:
```bash
npm start
```
This command runs both the React development server and the Tailwind CLI compiler simultaneously using `concurrently`.

### Project Structure

- `src/components/TypeaheadSearch.jsx`: Main search component logic.
- `src/components/Suggestions.jsx`: Renders the list of suggestions with highlighting.
- `src/components/Recipe.jsx`: Display component for selected recipe data.
- `src/helpers/debounce.js`: Custom utility for debouncing function calls.
- `src/tailwind-output.css`: Generated CSS file containing Tailwind utilities.

## Technologies Used

- **React**: UI Library
- **Tailwind CSS v4**: Styling
- **Axios**: API Requests
- **Concurrently**: Multi-process execution for dev server
