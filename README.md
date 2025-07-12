[![Expo](https://img.shields.io/badge/Built%20with-Expo-4630EB.svg?logo=expo&logoColor=white)](https://expo.dev)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)


# USABusiness - React Native News App

A modern React Native application built with Expo that provides real-time access to US business news articles. The app features a clean, intuitive interface with search functionality, article details, and seamless navigation.

## 🚀 Features

### Core Functionality
- **Real-time News Feed**: Fetches latest US business news from NewsAPI
- **Search & Filter**: Debounced search functionality to filter articles by title, description, and content
- **Article Details**: Detailed view with full article content and external links
- **Pull-to-Refresh**: Refresh news feed with pull-to-refresh gesture
- **Error Handling**: Graceful error states with retry functionality
- **Responsive Design**: Optimized for both iOS and Android platforms

### User Experience
- **Smooth Animations**: Layout animations for expanding/collapsing article cards
- **Loading States**: Proper loading indicators and skeleton screens
- **Offline Support**: Handles network errors gracefully
- **External Links**: Direct links to original articles on news websites
- **Modern UI**: Clean, card-based design with proper spacing and typography

## 📱 Screenshots
The app consists of two main screens:
1. **Home Screen**: News feed with search functionality
2. **Article Details Screen**: Full article view with navigation back to home

## 🛠 Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router with tab-based navigation
- **State Management**: React Context API
- **Styling**: React Native StyleSheet
- **Icons**: Expo Vector Icons
- **API**: NewsAPI for business news data
- **TypeScript**: Full type safety throughout the application

## 📦 Project Structure

```
USABusiness/
├── app/                          # Expo Router app directory
│   ├── _layout.tsx              # Root layout with providers
│   ├── (tabs)/                  # Tab navigation
│   │   ├── _layout.tsx          # Tab layout configuration
│   │   ├── index.tsx            # Home screen route
│   │   └── articleDetailsScreen.tsx # Article details route
│   └── +not-found.tsx           # 404 page
├── src/
│   ├── constants/               # API constants and configuration
│   ├── screens/                 # Screen components
│   │   ├── HomeScreen/          # Home screen with components
│   │   └── ArticleDetailsScreen/ # Article details screen
│   ├── services/                # Data services and context
│   │   ├── articleDataContext/  # React Context for article data
│   │   └── articleDataService/  # API service and data fetching
│   └── utils/                   # Utility functions (debounce, etc.)
├── assets/                      # Images, fonts, and static assets
└── scripts/                     # Build and utility scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd USABusiness
   ```

2. **Install dependencies**
   
   npm install
   # or
   yarn install

3. **Start the development server**
   npm start
   # or
   expo start

4. **Run on your preferred platform**
   
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web


## 🔧 Configuration

### API Key Setup
The app uses NewsAPI to fetch business news. The API key is configured in `src/constants/index.ts`:

export const API_KEY = "your-api-key-here";
export const USA_BUSINESS_ARTICLES_API = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;


## 📱 Navigation Guide

### Home Screen
- **Search Bar**: Located at the top, allows filtering articles by keyword
- **Article Cards**: Scrollable list of news articles with expandable content
- **Pull-to-Refresh**: Pull down to refresh the news feed
- **Article Interaction**: Tap on any article card to view details

### Article Details Screen
- **Back Button**: Top-left arrow to return to home screen
- **Article Content**: Full article with image, title, meta information, and content
- **External Link**: Button to open the original article in browser
- **Scroll**: Full article content is scrollable

## 🎯 Key Features Explained

### Search Functionality
- **Debounced Search**: 500ms delay to prevent excessive API calls
- **Multi-field Search**: Searches across title, description, and content
- **Real-time Filtering**: Results update as you type
- **Clear Search**: X button to clear search input

### Article Cards
- **Expandable Content**: Tap "Read More" to expand article description
- **Quick Actions**: Direct links to full article and external website
- **Rich Metadata**: Author, source, and publication date
- **Image Support**: Article thumbnails when available

### Error Handling
- **Network Errors**: Graceful handling of API failures
- **Retry Mechanism**: Retry button to reload data
- **Loading States**: Proper loading indicators
- **Empty States**: No results message for search queries


### Code Structure

- **TypeScript**: Full type safety with interfaces for all data structures
- **Component Architecture**: Modular, reusable components
- **Context API**: Centralized state management for article data
- **Custom Hooks**: Reusable logic (e.g., `useDebounce`)
- **Service Layer**: Separated API logic from UI components

## 🔍 Troubleshooting

### Common Issues

1. **Metro bundler issues**
   npm start -- --clear

2. **iOS Simulator not working**
   expo start --ios

3. **Android emulator issues**
   expo start --android

4. **API key issues**
   - Ensure your NewsAPI key is valid
   - Check network connectivity
   - Verify API endpoint is accessible


## 📞 Support

Feel free to reach out with any questions.

Yours sincerely,
Shota Tvaliashvili


