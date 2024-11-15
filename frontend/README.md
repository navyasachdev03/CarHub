# Gaurav_Bansal_EventSpotLite
 
## EventSpotLite

EventSpot Lite is a web application designed to display local events in a responsive, visually appealing format with clean animations and a modern UI. Users can explore various events, with sections for featured and trending events, and filter events based on categories like location and genre. The project uses mock data to demonstrate the functionality and design of the website.

### Features

- Displays Events: Animated carousel showcasing list of trending featured events with smooth transitions.
- Event Sections: Events categorized into different sections for quick browsing.
- Filtering Options: Live filtering options based on categories like genre and location.
- Animations: Engaging animations and a visually appealing interface.
- Responsive Design: Fully responsive design that works on all devices and screen sizes.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download) installed

### Tech Stack

- **Frontend:**
  - React.js with Vite
  - JavaScript
  - Tailwind CSS for styling

### Installation

1. **Clone the Repository**

   ```bash
   https://github.com/gbgaurav007/Gaurav_Bansal_EventSpotLite.git
   cd Gaurav_Bansal_EventSpotLite
   ```

2. **Install Node Modules:**
    - Navigate to the project folder and install the dependencies:
      ```sh
      npm install
      ```

### Running the application

1. **Start the Development Server:**
    - In the project folder, run the following command to start the development server:
      ```sh
      npm run dev
      ```

2.	**Access the Application**
    - Open your browser and navigate to http://localhost:5173 to access the EventSpotLite website.

## Folder Structure

```plaintext
Gaurav_Bansal_EventSpotLite/
├── public/                   # Public assets
│   └── assets/               # Local images for events
├── src/                      # Source files
│   ├── components/           # Reusable components (e.g., EventCard, EventCarousel)
│   ├── pages/                # Main pages (HomePage, EventListPage)
│   ├── data/                 # Mock data for events
│   └── App.jsx               # Main application component
└── tailwind.config.js        # Tailwind CSS configuration
```

## Customization

- **Event Data:** Modify the mock data in the `src/data/event.js` file to add, remove, or update event information.

## Deployed Website

The EventSpotLite application has been deployed on Vercel. It can be accessed through the following url: https://gaurav-bansal-event-spot-lite.vercel.app

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, bugs, or enhancements.
