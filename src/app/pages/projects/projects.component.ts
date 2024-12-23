import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <div class="projects-container">
      <h1>Projects</h1>
      <div class="project">
        <h2>Project 1: Book Store</h2>
        <p>
          A full-stack application for managing a book store, built with
          <strong>Node.js</strong> and <strong>MongoDB</strong>.
        </p>
        <a href="https://github.com/hayatsoma/web-420.git" target="_blank"
          >View on GitHub</a
        >
      </div>
      <div class="project">
        <h2>Project 2: Portfolio Website</h2>
        <p>
          This personal portfolio showcases my skills and previous projects
          using <strong>Angular</strong> and <strong>Node.js</strong>.
        </p>
        <a href="https://github.com/hayatsoma/portfolio.git" target="_blank"
          >View on GitHub</a
        >
      </div>
    </div>
  `,
  styles: [
    `
      .projects-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 30px;
        background: #f4f4f9;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        font-family: 'Roboto', sans-serif;
      }

      h1 {
        text-align: center;
        font-size: 36px;
        color: #3f51b5;
        margin-bottom: 30px;
      }

      .project {
        padding: 20px;
        margin-bottom: 20px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .project:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }

      .project h2 {
        font-size: 24px;
        color: #3f51b5;
        margin-bottom: 10px;
      }

      .project p {
        font-size: 16px;
        color: #555;
        line-height: 1.5;
        margin-bottom: 15px;
      }

      .project a {
        display: inline-block;
        font-size: 16px;
        color: #007bff;
        text-decoration: none;
        background: #e3f2fd;
        padding: 8px 16px;
        border-radius: 5px;
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      .project a:hover {
        background: #bbdefb;
        color: #0056b3;
      }
    `,
  ],
})
export class ProjectsComponent {}
