
# QuickSell Kanban Board Frontend Assignment

This project is a frontend assignment for QuickSell, which implements a Kanban board to manage and display tasks. The board allows grouping and sorting tasks based on status, user, or priority. This responsive web application is built using React and styled with CSS. It fetches data from a specified API endpoint and displays it in a Kanban-style layout.

## Table of Contents
- [QuickSell Kanban Board Frontend Assignment](#quicksell-kanban-board-frontend-assignment)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [File Structure](#file-structure)
  - [Installation and Setup](#installation-and-setup)
  - [Components](#components)
    - [1. App.js](#1-appjs)
    - [2. Navbar.js](#2-navbarjs)
    - [3. StatusList.js](#3-statuslistjs)
    - [4. CardComponent.js](#4-cardcomponentjs)
  - [Data and Props](#data-and-props)
    - [1. API Data Structure](#1-api-data-structure)
    - [2. Prop Structure](#2-prop-structure)
  - [Styling](#styling)
  - [Usage](#usage)
  - [Future Enhancements](#future-enhancements)
  - [License](#license)

## Project Overview

The QuickSell Kanban Board displays tasks grouped by various criteria in columns on a board, mimicking a Kanban-style layout. Each task is represented by a card and contains information such as the task title, ID, user, priority, and status. The application allows users to group tasks by:
- **Status** (In Progress, Backlog, Todo, Done, Cancelled)
- **User** (specific users assigned to tasks)
- **Priority** (from No Priority to Urgent)

Additionally, users can sort tasks within each group by title or priority.

## Features

- **Group Tasks by Criteria**: Users can group tasks by status, user, or priority.
- **Sort Tasks within Groups**: Sorting options allow ordering by title or priority.
- **Responsive Layout**: Adjusts to various screen sizes for seamless experience.
- **Dynamic Data Fetching**: Loads task data from an API endpoint and formats it for display.
- **Local Storage**: Persists grouping criteria between sessions.

## File Structure

```
project-root/
├── public/
│   └── assets/                     # SVG images for icons
├── src/
│   ├── Components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.js           # Navbar component
│   │   │   └── Navbar.css          # Styles for Navbar
│   │   ├── StatusList/
│   │   │   ├── StatusList.js       # StatusList component
│   │   │   └── StatusList.css      # Styles for StatusList
│   │   └── CardComponent/
│   │       ├── CardComponent.js    # Task card component
│   │       └── CardComponent.css   # Styles for Task cards
│   ├── App.js                      # Main application component
│   └── App.css                     # Global styles
└── README.md                       # Project documentation
```

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Milind-Palaria/Quicksell-Frontend-Assignment.git
   cd Quicksell-Frontend-Assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

4. **Build the application for production**:
   ```bash
   npm run build
   ```

The app will be available at `http://localhost:3000`.

## Components

### 1. App.js

The main application component that:
- Manages the state for grouping and sorting.
- Fetches data from the API and processes it for display.
- Defines the main layout for grouping tasks based on the selected criteria.

### 2. Navbar.js

This component displays options for grouping and sorting:
- **Grouping Dropdown**: Allows users to group tasks by status, user, or priority.
- **Sorting Dropdown**: Allows sorting within each group by title or priority.
  
### 3. StatusList.js

The StatusList component:
- Displays a column of tasks based on the selected grouping (status, user, or priority).
- Maps over task data to create individual task cards, passing relevant props to `CardComponent`.
  
### 4. CardComponent.js

This component renders an individual task card with details including:
- Task ID and title.
- User’s profile initials and availability status.
- Priority icon and any tags associated with the task.

## Data and Props

### 1. API Data Structure

The data is fetched from the API `https://api.quicksell.co/v1/internal/frontend-assignment` and contains:
- **Tickets**: Each ticket represents a task with an ID, title, status, priority, userId, and tag.
- **Users**: Each user has an ID, name, and availability status.

### 2. Prop Structure

- **App.js**
  - `categoryTypes`: Array of status types for grouping tasks by status.
  - `teamMembers`: Array of user names for grouping tasks by user.
  - `priorityLevels`: Array of priority levels for grouping tasks by priority.
  
- **Navbar.js**
  - `groupValue`: Current grouping criteria.
  - `orderValue`: Current sorting criteria.
  - `handleGroupValue`: Function to update grouping criteria.
  - `handleOrderValue`: Function to update sorting criteria.
  
- **StatusList.js**
  - `groupValue`: Current grouping criteria (status, user, or priority).
  - `orderValue`: Current sorting criteria (title or priority).
  - `listTitle`: Title for each group column.
  - `ticketDetails`: Array of task objects to display.
  - `priorityList`: Array of priority objects.

## Styling

The project’s styles are organized by component:
- **Global styles** are defined in `App.css`.
- **Component styles**:
  - `Navbar.css`: Styles for grouping/sorting dropdowns and icons.
  - `StatusList.css`: Styles for each group column and task container.
  - `CardComponent.css`: Styles for individual task cards.

### Color Variables

Defined in CSS as `:root` variables:
- `--white1`, `--black1`: Main colors.
- `--grey1`, `--grey2`, `--grey3`: Background and border colors.
- `--textgrey`: Text color for descriptions and icons.

## Usage

1. **Grouping and Sorting**:
   - Click the **Display** button in the navbar to choose a grouping or sorting option.
   - **Grouping Options**:
     - Status: Groups tasks by their status.
     - User: Groups tasks by the assigned user.
     - Priority: Groups tasks by priority level.
   - **Sorting Options**:
     - Title: Sorts tasks alphabetically by title.
     - Priority: Sorts tasks by priority, from high to low.

2. **Understanding Task Cards**:
   - Task cards display the task title, ID, and priority.
   - User initials and availability status are displayed in a small circle icon.

3. **Responsive Layout**:
   - The application is responsive and adapts to smaller screen sizes with adjusted column widths and paddings.

## Future Enhancements

Potential features that could be added:
- **Add New Tasks**: A form to add new tasks directly from the UI.
- **Drag-and-Drop Support**: Reordering of tasks within groups and between groups.
- **Search Functionality**: Search tasks by title or tag.
- **Backend Integration**: Integrate a backend API for real-time task updates and persistence.

## License

This project is intended for demonstration purposes as part of a frontend assignment for QuickSell and is not licensed for production use.

