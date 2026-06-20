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
      return <div>Developer etc.</div>;
    case "about":
      return (
        <div>
          A Full-Stack Developer with a strong focus on DevOps, Web Security,
          and Self-Hosting. Dedicated to building Open-Source CLI Tools & Web
          Apps designed for self-hosted and hosted environments, with occasional
          contributions to other projects. Leads technical initiatives within
          the student developer community.
        </div>
      );
    case "skills":
      return (
        <ul>
          <li>Languages: C, C++, TypeScript, JavaScript, SQL, Bash</li>
          <li>
            Frontend: Next.js, React.js, Vite, HTMX, HTML5, CSS3, Tailwind CSS,
            SASS, shadcn/ui, Motion
          </li>
          <li>
            Backend: Node.js, Express.js, Passport.js, JWT, Better Auth, Prisma,
            Mongoose, GraphQL, WebSocket
          </li>
          <li>Database: PostgreSQL, MySQL, Firestore, MongoDB, Redis</li>
          <li>
            DevOps: Docker, Docker Swarm, Terraform, GitHub Actions, Portainer,
            Nginx, Traefik, Tailscale, Netdata, Beszel
          </li>
          <li>Cloud: Google Cloud, Firebase, Cloudflare, Vercel</li>
          <li>
            IoT: Arduino, ATMega328p, ESP32, ESP8266, Raspberry Pi, Blynk, MQTT
          </li>
          <li>
            Tools: Turborepo, Git, GitHub, VS Code Extension API, Postman,
            Linux, VMware Workstation
          </li>
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
                href="https://itskdhere.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                itskdhere.com
              </a>
            </span>
          </li>
          <li>
            <span>Email: </span>
            <span>
              <a
                href="mailto:hi@itskdhere.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                hi@itskdhere.com
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
