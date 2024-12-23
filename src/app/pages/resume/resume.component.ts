import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="resume-container">
      <h1 class="resume-title">My Resume</h1>

      <section class="resume-section">
        <h2><i class="icon-education"></i> Education</h2>
        <div class="resume-card">
          <p><strong>Bachelor of Science in Web-Development</strong></p>
          <p>Bellvue university</p>
        </div>
      </section>

      <section class="resume-section">
        <h2><i class="icon-skills"></i> Skills</h2>
        <div class="resume-card">
          <ul>
            <li>JavaScript</li>
            <li>Angular</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </section>

      <section class="resume-section">
        <h2><i class="icon-experience"></i> Experience</h2>
        <div class="resume-card">
          <p><strong>Software Developer</strong></p>
          <p>Company ABC</p>
        </div>
      </section>

      <section class="download-section">
        <p>Click below to download my resume in PDF format:</p>
        <a href="assets/resume.pdf" download="Resume_Hayat_Soma" class="download-btn">
          Download Resume (PDF)
        </a>
      </section>
    </div>
  `,
  styles: [`
    /* Main Container */
    .resume-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px;
      background: linear-gradient(to bottom, #e8eaf6, #f4f4f9);
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      font-family: 'Roboto', sans-serif;
    }

    /* Title */
    .resume-title {
      text-align: center;
      font-size: 38px;
      margin-bottom: 30px;
      color: #3f51b5;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    /* Section Styling */
    .resume-section {
      margin-bottom: 30px;
    }

    h2 {
      font-size: 26px;
      color: #303f9f;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
    }

    .icon-education, .icon-skills, .icon-experience {
      margin-right: 10px;
      font-size: 24px;
      color: #3f51b5;
    }

    /* Card Styling */
    .resume-card {
      background: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .resume-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }

    /* Paragraph Spacing */
    p {
      margin-bottom: 10px; /* Add spacing between paragraphs */
      line-height: 1.6; /* Improve readability */
    }

    /* List Styling */
    ul {
      list-style-type: disc;
      margin: 0;
      padding-left: 25px;
    }

    li {
      margin-bottom: 8px;
      font-size: 16px;
    }

    /* Download Button */
    .download-section {
      text-align: center;
      margin-top: 20px;
    }

    .download-btn {
      background: linear-gradient(to right, #3f51b5, #1a237e);
      color: white;
      padding: 12px 25px;
      text-decoration: none;
      font-size: 18px;
      border-radius: 8px;
      transition: background 0.3s ease, transform 0.2s ease;
    }

    .download-btn:hover {
      background: linear-gradient(to right, #1a237e, #3f51b5);
      transform: scale(1.05);
    }
  `]
})
export class ResumeComponent {}
