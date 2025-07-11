
# 🌌 AstroTracker

AstroTracker is a mobile app built with **React Native (Expo)** that visualizes the night sky in real-time using a custom-built star map. The app fetches device location, plots celestial objects from a star catalog, and displays them using interactive SVG graphics — like a portable planetarium.

## 🔭 Features

- 📍 Uses device GPS to determine observer location
- ✨ Renders stars from a catalog based on Right Ascension & Declination
- 🖼️ Custom 2D star map built with `react-native-svg`
- 📡 Live star data projection (simple equirectangular projection)
- 🌐 Option to view an external interactive WebView (Stellarium)
- 📱 Built with Expo for rapid development and testing

## 🚀 Tech Stack

- **React Native** (via Expo)
- `react-native-svg` — star map rendering
- `expo-location` — device coordinates
- `react-navigation` — screen routing
- JSON star catalog (Hipparcos-like)
- Optional: `react-native-webview` for external planetarium

## 🧠 Skills Applied

- React Native UI & state management
- Device sensors (location)
- 2D coordinate projection
- Astronomy concepts (RA/Dec)
- Data visualization with SVG
- Modular component architecture

## 📂 Project Structure

/components       → Reusable UI components (e.g., PlaceholderCard, SkyMap)
/screens          → App screens (HomeScreen, StarInfoScreen, etc.)
/assets           → Images (e.g., NASA logo, ESA badge)
App.js            → Main navigator with screen routing
README.md

## 🛠 Setup & Run

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/astrotracker.git
   cd astrotracker

	2.	Install dependencies:

npm install


	3.	Run the app (Expo):

expo start


	4.	On your phone, open the Expo Go app and scan the QR code to test.

🌌 Star Data Format

Example from stars.json:

[
  {
    "id": "HIP32349",
    "ra": 101.287,
    "dec": -16.7161,
    "mag": -1.46,
    "name": "Sirius"
  }
]

📅 Roadmap / Ideas
	•	Add pan + zoom support on sky map
	•	Add constellation lines (connect the stars!)
	•	Improve projection with time + altitude calculation
	•	Night mode toggle
	•	Offline star catalog


