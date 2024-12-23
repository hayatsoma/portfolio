import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="profile-section">
        <img
          src="assets/hayat.jpg"
          alt="Profile Picture"
          class="profile-image"
        />
        <h1>About Me</h1>
        <p class="intro-text">
          Hello! I'm Hayat Soma, a passionate software developer with expertise
          in JavaScript, Angular, Node.js, and MongoDB. I thrive on creating
          meaningful software solutions and am always eager to learn new
          technologies.
        </p>
      </div>

      <div class="details-section">
        <div class="about-card">
          <h2>Background</h2>
          <p>
            I started my journey in computer science during my undergraduate
            studies, where I cultivated a strong foundation in software
            engineering principles and programming languages.
          </p>
        </div>

        <div class="about-card">
          <h2>Interests</h2>
          <p>
            In my free time, I enjoy exploring new programming frameworks,
            contributing to open-source projects, and reading about emerging
            trends in technology. Outside of tech, I love hiking and playing
            strategy games.
          </p>
        </div>

        <div class="about-card">
          <h2>Goals</h2>
          <p>
            My ultimate goal is to leverage technology to solve real-world
            problems and make a positive impact on society. I aspire to grow as
            a full-stack developer and lead innovative projects.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Main Container */
      .about-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 40px;
        background: linear-gradient(to bottom, #f4f4f9, #ffffff);
        border-radius: 15px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        font-family: 'Roboto', sans-serif;
      }

      /* Profile Section */
      .profile-section {
        text-align: center;
        margin-bottom: 40px;
      }

      .profile-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 15px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }

      .intro-text {
        font-size: 18px;
        color: #333;
        margin-top: 10px;
        line-height: 1.6;
      }

      /* Section Title */
      h1 {
        font-size: 36px;
        margin-bottom: 15px;
        color: #3f51b5;
        font-weight: bold;
        letter-spacing: 1px;
      }

      h2 {
        font-size: 24px;
        color: #303f9f;
        margin-bottom: 10px;
        font-weight: 600;
      }

      /* About Cards */
      .details-section {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .about-card {
        background: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .about-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      }

      p {
        font-size: 16px;
        line-height: 1.6;
        color: #555;
        margin-bottom: 0;
      }
    `,
  ],
})
export class AboutComponent {}
