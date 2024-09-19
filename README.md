
<h1> 2D Offline Railway Station Navigator Web App {SIH} </h1>

![Screenshot 2024-09-10 at 11 41 08 AM](https://github.com/user-attachments/assets/bf9e34a7-29cd-4727-95ac-27e9695b21fa)

## Advanced Interactive 2D Map Application Using Fabric.js

This project involves a highly interactive and user-friendly map application powered by Fabric.js. The features are designed to provide a comprehensive and dynamic navigation experience with rich functionality and modern UI/UX elements:

#### Key Features:

1. **Zoomable, Pannable, and Rotatable Map Interface**:
   - Offers intuitive controls to **zoom in/out**, **pan** across different areas, and **rotate** the map seamlessly.
   - Supports smooth animations for a responsive user experience, enhancing the ability to explore various regions of the map fluidly.
   - Includes customizable zoom sensitivity and rotation angles for a tailored experience.

2. **Dynamic Places with Descriptive Models**:
   - Displays **dynamic points of interest (POIs)** that users can interact with, featuring **detailed descriptions**, **images**, and other multimedia in a carousel format.
   - Each place marker dynamically updates with relevant content as users explore different sections of the map.

3. **Color-Coded Path Marking System**:
   - Implements a **color-coded path** visualization to indicate different statuses of routes:
     - **Yellow**: Paths that have been **successfully completed**.
     - **Orange**: Paths where users have **returned back** from the destination.
     - **Red**: Paths that are **yet to be covered**, providing a clear visual guide for navigation.
   - The paths update in real-time as users navigate, giving a clear indication of their journey progress.

4. **Interactive Toolbar with Essential Controls**:
   - Provides a **toolbar** with key controls for efficient map interaction:
     - **Map Refresh**: Quickly resets the map to its initial state.
     - **Rotate 90° Button**: Instantly rotates the map view by 90 degrees for alternative perspectives.
     - **Back to 100% Zoom and 0° Rotation**: Allows users to **reset the map view** to its default settings with one click.
   - These controls are designed to be **highly responsive** and **accessible**, ensuring a seamless user experience.

5. **Dynamic Compass Integration**:
   - Features a **dynamic compass** that reflects real-time orientation changes, aligning with the user's current position and the map's rotation.
   - Enhances navigation by keeping users oriented in the right direction as they move around the map.

6. **Adaptive Directional Guidance**:
   - Offers **dynamic direction indicators** that adjust based on the compass direction and the current map rotation.
   - Ensures users receive accurate and updated guidance, no matter the orientation of the map.

7. **Destination Reached Alert Model**:
   - Displays a **custom alert or notification model** when a user reaches their destination, enhancing the navigation experience.
   - Supports customizable alert messages, sounds, or visual cues for different types of destinations.

8. **Custom Animated Hamburger Menu and Navbar (In Progress)**:
   - Incorporates a **modern, animated hamburger menu** and **navbar** that smoothly transitions to provide a sleek and engaging interface.
   - The menu and navbar will feature smooth animations, intuitive controls, and a **responsive design** that adapts to various screen sizes and devices.

# Instructions 


- Select Start and destination points and tap on Go
- You now get a navigation instructor and Places On the Way List View

# Navigation

- The initial `Red` path on the map is the path to cover
- Tap on the Next button for directions to the next place on the way (You get an `Yellow` path on the map to indicate Covered path)
- Tap on the Back button if you accidentally pressed Next (You get an `Orange` path on the map to indicate Returned path)

# Interacting with the Map
- `Zoom` by using Two Fingers
- `Rotate` by using 3 fingers
- The Red Needle of the Compass always points towards north of the map
- When you rotate the map, the direction arrow rotates automatically to adapt to the new changes.
> [!Note]
> Rotate Functionality is only supported in touch screen displays as of now, and not yet supported in laptop trackpads.


- Below the navigation instructor, you get a list view of places on the way from your current location to your destination.
- Tap on any place to see the full description, images, timings, things to do and must-tries in that place.



<br>
<div align='center'>
<a align='center' href="https://sarthakkarora.github.io/NAVIGO-RAILWAYS-MAP-SIH/" target="_blank" rel="noreferrer">Try App</a>
</div>
<br>

# Improvement Ideas

1. **Floyd-Warshall for Pathfinding:**
   - Replace A* Search with the **Floyd-Warshall Algorithm** to compute all-pairs shortest paths once and store them. This reduces client-side computations and speeds up path retrieval in dynamic graphs.

2. **PWA and Offline Support:**
   - Build as a **PWA** with **Service Workers** or an **offline Flutter app** to ensure functionality without internet, caching assets, and data for fast, reliable offline access.

3. **Image Optimization & Lazy Loading:**
   - Use modern formats (e.g., **WebP, AVIF**) and **lazy loading** for images to enhance performance, reduce loading times, and optimize bandwidth usage.
