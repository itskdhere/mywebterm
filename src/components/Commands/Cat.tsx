import { FC } from "react";

interface IProps {
  fileName: string;
}

const Cat: FC<IProps> = (props) => {
  let { fileName } = props;
  fileName = fileName.trim();
  fileName.toLowerCase();

  switch (fileName) {
    case "bio":
      return (
        <div>
          Full-Stack Web Developer && 2nd Year B.Tech CSE Student at Sister
          Nivedita University
        </div>
      );
    case "about":
      return (
        <div>
          I'm Krishnendu Das, currently in my 2nd year, pursuing Bachelor of
          Technology in Computer Science & Engineering from Sister Nivedita
          University, Kolkata. I'm passionate about Full-Stack Web Development,
          Web Security, Containerization, Linux, Self-Hosting. I mostly work
          with TypeScript, JavaScript, Node.js, Express.js, React.js,
          Discord.js, Docker, Firebase, MySQL, MongoDB, Redis. In my free time,
          I make Open-Source Web Apps & Discord Bots, which anyone can self-host
          or use the hosted version. I also contribute to Open Source.
        </div>
      );
    case "skills":
      return (
        <ul>
          <li>Languages: C, C++, JavaScript, TypeScript</li>
          <li>Frontend: React.js, HTML, CSS, SASS</li>
          <li>API: REST, WebSocket, socket.io, WebRTC</li>
          <li>Backend: Node.js, Express.js, NGINX</li>
          <li>Databases: FireStore, MongoDB, Redis, MySQL</li>
          <li>Other Frameworks: Discord.js, Arduino, Qt</li>
          <li>Version Control: Git, GitHub</li>
          <li>BasS: FireBase, SupaBase, AppWrite</li>
          <li>PaaS: Cloudflare, Vercel, Netlify</li>
          <li>IaaS: Azure, Google Cloud Platform</li>
          <li>OS: Windows, Linux (Ubuntu, Debian, Alpine)</li>
          <li>Tools: Docker, Postman, VS Code, TailScale</li>
        </ul>
      );
    case "projects":
      return (
        <div>
          <span>All personal & group projects are on GitHub: </span>
          <span>
            <a
              href="https://github.com/itskdhere"
              target="_blank"
              rel="noopener noreferrer"
            >
              @itskdhere
            </a>
          </span>
        </div>
      );
    case "contact":
      return (
        <ul>
          <li>
            <span>Website: </span>
            <span>
              <a
                href="https://itskdhere.eu.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                itskdhere.eu.org
              </a>
            </span>
          </li>
          <li>
            <span>Email: </span>
            <span>
              <a
                href="mailto:kd@itskdhere.eu.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                kd@itskdhere.eu.org
              </a>
            </span>
          </li>
          <li>
            <span>GitHub: </span>
            <span>
              <a
                href="https://github.com/itskdhere"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/itskdhere
              </a>
            </span>
          </li>
          <li>
            <span>Twitter(X): </span>
            <span>
              <a
                href="https://x.com/itskdhere"
                target="_blank"
                rel="noopener noreferrer"
              >
                x.com/itskdhere
              </a>
            </span>
          </li>
        </ul>
      );
    default:
      return <div>{fileName}: No such file or directory</div>;
  }
};

export default Cat;
