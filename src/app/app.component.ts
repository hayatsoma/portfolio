import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, RouterModule],
  template: `
    <header>
      <div class="header-container">
        <div class="logo-container">
          <span class="logo-text">Hayu</span>
        </div>
        <nav class="navbar">
          <a routerLink="/" routerLinkActive="active" class="nav-link" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/resume" routerLinkActive="active" class="nav-link" [routerLinkActiveOptions]="{exact: true}">Resume</a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link" [routerLinkActiveOptions]="{exact: true}">About Me</a>
          <a routerLink="/projects" routerLinkActive="active" class="nav-link" [routerLinkActiveOptions]="{exact: true}">Projects</a>
        </nav>
      </div>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <div class="footer-container">
        <nav class="footer-navbar" aria-label="Footer Navigation">
          <a routerLink="/" routerLinkActive="active" class="nav-link" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/resume" routerLinkActive="active" class="nav-link" [routerLinkActiveOptions]="{exact: true}">Resume</a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link" [routerLinkActiveOptions]="{exact: true}">About Me</a>
          <a routerLink="/projects" routerLinkActive="active" class="nav-link" [routerLinkActiveOptions]="{exact: true}">Projects</a>
        </nav>
        <p>&copy; 2024 Hayat Soma. All Rights Reserved.</p>
      </div>
    </footer>
  `,
  styles: [
    `/* Global Styles */
    body, html {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f4;
      color: #333;
    }

    main {
      padding-top: 100px; /* Matches header height */
      padding-bottom: 80px; /* Space for footer */
      text-align: center;
    }

    /* Header Styling */
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #2d2d2d; /* Dark background */
      color: white;
      height: 80px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 0 20px;
    }

    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
    }

    .logo-text {
      font-size: 24px;
      font-weight: bold;
      color: #ffcc00; /* Gold color for logo */
    }

    /* Navbar Styling */
    .navbar {
      display: flex;
      gap: 20px; /* Adds space between items */
      justify-content: flex-start; /* Aligns the navbar items from left */
      align-items: center;

    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-size: 16px;
      padding: 10px;
      transition: color 0.3s ease;
    }

    .nav-link:hover {
      color: #ffcc00; /* Orange hover color */
    }

    .nav-link.active {
      color: #ffcc00; /* Active link color */
      font-weight: bold;
    }

    /* Footer Styling */
    footer {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
      position: relative;
      bottom: 0;
      width: 100%;
    }

    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .footer-navbar {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-bottom: 10px;
    }

    .footer-navbar .nav-link {
      color: white;
      font-size: 16px;
    }

    .footer-navbar .nav-link:hover {
      color: #ff5722; /* Hover color for footer links */
    }

    footer p {
      font-size: 14px;
      margin-top: 10px;
    }

    /* Mobile-Friendly Design */
    @media (max-width: 768px) {
      .navbar {
        gap: 15px; /* Adjusted gap for smaller screens */
      }

      .footer-navbar {
        gap: 20px;
      }
    }`
  ]
})
export class AppComponent {
  title = 'portfolio';
}
