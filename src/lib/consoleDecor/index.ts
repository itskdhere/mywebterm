import { version } from "../../../package.json";

function decor() {
  const str =
    " __  __    __          __  _  _______                  \r\n|  \\/  |   \\ \\        / / | ||__   __|                 \r\n| \\  / |_   \\ \\  /\\  / /__| |__ | | ___ _ __ _ __ ___  \r\n| |\\/| | | | \\ \\/  \\/ / _ \\ '_ \\| |/ _ \\ '__| '_ ` _ \\ \r\n| |  | | |_| |\\  /\\  /  __/ |_) | |  __/ |  | | | | | |\r\n|_|  |_|\\__, | \\/  \\/ \\___|_.__/|_|\\___|_|  |_| |_| |_|\r\n         __/ |                                         \r\n        |___/ ";
  console.log(`%c${str} \n%cv${version}`, "color: #0ae169", "color: #e6dc82");
}

export default decor;
