export const getHtmlScheme = ({
    name,
    experience,
    skills,
}: {
    name: string
    experience: string
    skills: string
}) => {
    return `<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kolorowe CV</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #ff9a9e, #fad0c4);
        color: #333;
        padding: 20px;
      }
      .cv-container {
        max-width: 800px;
        margin: auto;
        height: 100vh;
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
      }
      .header {
        display: flex;
        align-items: center;
        background: #ff758c;
        padding: 20px;
        border-radius: 10px 10px 0 0;
        color: white;
      }
      .header img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid white;
        margin-right: 20px;
      }
      .section {
        margin-top: 20px;
      }
      .section h2 {
        background: #ff758c;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
      }
      .info {
        padding: 10px;
        background: #fff5f5;
        border-radius: 5px;
      }
        @media print {
  body {
    margin: 0;
    padding: 10mm;
  }
  .cv-container {
    width: 210mm;
    height: 297mm;
    page-break-after: always;
  }
}

    </style>
  </head>
  <body>
    <div class="cv-container">
      <div class="header">
        <img
          id="profile-pic"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Zdjęcie"
        />
        <div>
          <h1 id="name">${name}</h1>
          <p id="title">Web Developer</p>
        </div>
      </div>
      <div class="section">
        <h2>O mnie</h2>
        <p class="info" id="about">
          Jestem kreatywnym programistą z pasją do tworzenia nowoczesnych stron
          internetowych.
        </p>
      </div>
      <div class="section">
        <h2>Doświadczenie</h2>
        <p class="info" id="experience">
          ${experience}
        </p>
      </div>
      <div class="section">
        <h2>Umiejętności</h2>
        <p class="info" id="skills">${skills}</p>
      </div>
    </div>
  </body>
</html>`
}
