# Loan Calculator Application

This is an online loan calculator application built with Next.js 14, React Hook Form, Zod for validation, React Query for data fetching, and Chakra UI for styling.

## Functionality

### Must-Have Features

- Ability to set the loan amount using a slider or by entering it in an input field.
- Ability to set the loan term using a slider or by entering it in an input field.
- Option to select insurance coverage.
- Recalculation of the "Monthly Payment" amount when insurance coverage or any of the sliders is changed.
- Calculation of the monthly payment amount is done on the backend, fetched from an API (REST).
- The application handles the addition or subtraction of a fixed amount when insurance coverage is selected or deselected.

### Nice-to-Have Features

- Input fields for loan amount and term validate user input to only allow whole numbers within the range specified by the sliders.
- Display a loading spinner when recalculating the "Monthly Payment" amount.
- README incl.

## Running the Application

To run the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Technologies Used

- **Next.js 14:** Next.js is a React framework for building server-side rendered and statically generated applications. Version 14 includes improvements in performance and developer experience.
- **React Hook Form:** React Hook Form is a library for managing form state in React applications. It provides efficient and flexible form validation.
- **Zod:** Zod is a TypeScript-first schema validation library. It is used in this application to define and validate form data schemas.
- **React Query:** React Query is a library for managing and caching asynchronous data in React applications. It is used here for prefetching data on server-side rendering and caching fetched data.
- **Chakra UI:** Chakra UI is a modular component library for React applications. It provides a set of accessible and customizable UI components for building user interfaces.

## Folder Structure

```
/
├── components/            # React components
├── pages/                 # Next.js pages
├── styles/                # Global styles and theme configuration
├── utils/                 # Utility functions, including calculations and API handling
├── public/                # Static assets
└── README.md              # Project README file
```

## Credits

This application was created by LN for the purpose of learning and demonstration. It may contain simulated or simplified functionality for educational purposes.
