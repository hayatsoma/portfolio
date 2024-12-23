import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="landing-container" [ngStyle]="{'background-image': 'url(' + backgroundImage + ')'}">
      <div class="landing-row">
        <div class="landing-content">
          <h1 class="title">Welcome to My Portfolio</h1>
          <p class="subtitle">Explore my journey, skills, and projects!</p>
          <div class="cta-container">
            <a routerLink="/about" class="cta-button" aria-label="Learn More About Me">Learn More About Me</a>
            <a routerLink="/projects" class="cta-button" aria-label="Check Out My Projects">Check Out My Projects</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Landing Container */
    .landing-container {
      color: white;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    /* Landing Row: Flex Layout */
    .landing-row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      max-width: 1200px;
      width: 100%;
      text-align: center;
    }

    /* Landing Content */
    .landing-content {
      flex: 1;
      max-width: 500px;
      padding: 40px;
      background: rgba(0, 0, 0, 0.6); /* Dark overlay */
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    /* Title */
    .title {
      font-size: 3rem;
      font-weight: 700;
      color: #ffcc00; /* Gold title */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      margin-bottom: 20px;
    }

    /* Subtitle */
    .subtitle {
      font-size: 1.5rem;
      color: #ffffff;
      opacity: 0.9;
      margin-bottom: 30px;
    }

    /* Call-to-Action Container */
    .cta-container {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    /* CTA Button */
    .cta-button {
      background-color: #007bff;
      color: white;
      padding: 15px 30px;
      font-size: 1.2rem;
      text-decoration: none;
      border-radius: 30px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 10px rgba(0, 123, 255, 0.5);
    }

    /* Button Hover Effect */
    .cta-button:hover {
      background-color: #0056b3;
      box-shadow: 0 6px 15px rgba(0, 123, 255, 0.7);
      transform: translateY(-3px);
    }

    /* Responsiveness */
    @media (max-width: 768px) {
      .landing-row {
        flex-direction: column;
      }
      .cta-container {
        flex-direction: column;
      }
    }
  `]
})
export class LandingComponent {
  backgroundImage = 'assets/cover.jpg'; // Path to the background image
}
