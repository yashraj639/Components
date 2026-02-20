import React from "react";

export const FileIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-file-plus-corner-icon lucide-file-plus-corner"
      {...props}
    >
      <path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M14 19h6" />
      <path d="M17 16v6" />
    </svg>
  );
};

export default FileIcon;

export const Salesforce = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-3"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.94348 1.08897C6.40431 0.609254 7.04568 0.312185 7.75424 0.312185C8.69899 0.312185 9.51776 0.837042 9.95864 1.61908C10.35 1.44413 10.7739 1.35381 11.2026 1.35403C12.9031 1.35403 14.2835 2.7449 14.2835 4.46118C14.2835 6.17746 12.9031 7.56834 11.2026 7.56834C10.9947 7.56834 10.7921 7.54745 10.5937 7.50798C10.2079 8.19554 9.47052 8.66266 8.63075 8.66266C8.28885 8.66334 7.95133 8.58578 7.64402 8.43593C7.253 9.35443 6.34238 10 5.28216 10C4.17471 10 3.23522 9.30194 2.87307 8.32046C2.71188 8.35447 2.54759 8.37157 2.38285 8.37147C1.06546 8.37147 0 7.29027 0 5.96238C0 5.07012 0.479719 4.29333 1.19143 3.87345C1.04044 3.52562 0.962718 3.15043 0.963113 2.77125C0.963113 1.23866 2.20702 0 3.73961 0C4.63711 0 5.44015 0.427759 5.94401 1.0917"
        fill="#00A1E0"
      ></path>
    </svg>
  );
};

export function Hubspot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M267.4 211.6c-25.1 23.7-40.8 57.3-40.8 94.6c0 29.3 9.7 56.3 26 78L203.1 434c-4.4-1.6-9.1-2.5-14-2.5c-10.8 0-20.9 4.2-28.5 11.8s-11.8 17.8-11.8 28.6s4.2 20.9 11.8 28.5s17.8 11.6 28.5 11.6c10.8 0 20.9-3.9 28.6-11.6c7.6-7.6 11.8-17.8 11.8-28.5c0-4.2-.6-8.2-1.9-12.1l50-50.2c22 16.9 49.4 26.9 79.3 26.9c71.9 0 130-58.3 130-130.2c0-65.2-47.7-119.2-110.2-128.7V116c17.5-7.4 28.2-23.8 28.2-42.9c0-26.1-20.9-47.9-47-47.9S311.2 47 311.2 73.1c0 19.1 10.7 35.5 28.2 42.9v61.2c-15.2 2.1-29.6 6.7-42.7 13.6c-27.6-20.9-117.5-85.7-168.9-124.8c1.2-4.4 2-9 2-13.8C129.8 23.4 106.3 0 77.4 0C48.6 0 25.2 23.4 25.2 52.2c0 28.9 23.4 52.3 52.2 52.3c9.8 0 18.9-2.9 26.8-7.6zm89.5 163.6c-38.1 0-69-30.9-69-69s30.9-69 69-69s69 30.9 69 69s-30.9 69-69 69"
      ></path>
    </svg>
  );
}

export function Googlesheets(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6zm1.363 10.636h-3.41v1.91h3.41zm0 3.273h-3.41v1.91h3.41zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z"
      ></path>
    </svg>
  );
}

export function Headphones(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1.5 6h1a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm11 3.5h-1A.5.5 0 0 1 11 9V6.5a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1Zm-3 2.75a2 2 0 0 0 2-2h0V9.5"></path>
        <path d="M8.25 11a1.25 1.25 0 0 1 0 2.5h-1.5a1.25 1.25 0 0 1 0-2.5ZM2.5 6V5a4.5 4.5 0 0 1 9 0v1m-6-2v1.5m3-1.5v1.5m-3 2c0 1.33 3 1.33 3 0"></path>
      </g>
    </svg>
  );
}

export function Zendesk(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.538 3.376V10H0zm0-2.376c0 1.508-1.246 2.741-2.769 2.741S0 2.508 0 1zm.924 9c0-1.508 1.246-2.741 2.769-2.741S12 8.492 12 10zm0-2.376V1H12z"
      ></path>
    </svg>
  );
}

export function GmailLight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#4285F4"
          d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636"
        ></path>
        <path
          fill="#34A853"
          d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091"
        ></path>
        <path
          fill="#FBBC04"
          d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363"
        ></path>
        <path
          fill="#EA4335"
          d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675"
        ></path>
        <path
          fill="#C5221F"
          d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493"
        ></path>
      </g>
    </svg>
  );
}

export function Barchart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M64 85.333h64v277.333H64zm106.667 128h64v149.333h-64zM384 170.666h64v192h-64zM277.334 128h64v234.666h-64zM42.667 384h426.667v42.666H42.667z"
      ></path>
    </svg>
  );
}

export function Looker(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.948 0A2.1 2.1 0 0 0 9.85 2.104a2.1 2.1 0 0 0 .356 1.166l.895-.896a.884.884 0 1 1 .565.564l-.895.895A2.096 2.096 0 0 0 13.119.359A2.1 2.1 0 0 0 11.949 0m-.836 6.113a3.26 3.26 0 0 0-.652-1.965L9.295 5.31a1.67 1.67 0 0 1-.317 2.012l.632 1.545a3.28 3.28 0 0 0 1.503-2.754m-3.25 1.666h-.03A1.67 1.67 0 0 1 7.83 4.44a1.67 1.67 0 0 1 .92.275L9.9 3.564a3.28 3.28 0 0 0-4.133 5.094a3.28 3.28 0 0 0 2.728.666zm4.129 1.336c-.728 0-1.452.106-2.15.315l.922 2.252a5.02 5.02 0 1 1-1.127.435l-.91-2.244a7.44 7.44 0 0 0-3.41 9.956v.001a7.44 7.44 0 0 0 9.957 3.41h.001a7.44 7.44 0 0 0 3.412-9.957A7.44 7.44 0 0 0 12 9.113h-.008z"
      ></path>
    </svg>
  );
}

export function Csv(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.959 20.046H4V4.004h6.979v4.98h4.98V10h2.051V8.014l-2.05-2.052L14 4.004l-1.99-1.99h-8a1.997 1.997 0 0 0-1.99 2l-.01 16a1.997 1.997 0 0 0 1.99 2h14.01v-2Zm5.301-2.032l1.75-6h-1.5l-1 3.43l-1-3.43h-1.5l1.75 6z"
      ></path>
      <path
        fill="currentColor"
        d="M10.01 12.014h-3a1.003 1.003 0 0 0-1 1v4a1.003 1.003 0 0 0 1 1h3a1.003 1.003 0 0 0 1-1v-1h-1.5v.5h-2v-3h2v.5h1.5v-1a1.003 1.003 0 0 0-1-1m7 1.506v-1.506h-4a1 1 0 0 0-1 1v1.757a1 1 0 0 0 1 1h2.51v.743h-3.51v1.507h4a1 1 0 0 0 1-1v-1.757a1 1 0 0 0-1-1H13.5v-.743Z"
      ></path>
    </svg>
  );
}

export const SVGLogoIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.92285 14.8848H0V9.96191H4.92285V14.8848ZM19.6924 14.8848H9.84668V9.96191H4.92383V5.03809H9.84668V0.115234H19.6924V14.8848ZM9.84668 9.96191H14.7695V5.03906H9.84668V9.96191ZM4.92285 5.03809H0V0.115234H4.92285V5.03809Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export function Slack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#de1c59"
        d="M27.255 80.719c0 7.33-5.978 13.317-13.309 13.317S.63 88.049.63 80.719s5.987-13.317 13.317-13.317h13.309zm6.709 0c0-7.33 5.987-13.317 13.317-13.317s13.317 5.986 13.317 13.317v33.335c0 7.33-5.986 13.317-13.317 13.317c-7.33 0-13.317-5.987-13.317-13.317zm0 0"
      ></path>
      <path
        fill="#35c5f0"
        d="M47.281 27.255c-7.33 0-13.317-5.978-13.317-13.309S39.951.63 47.281.63s13.317 5.987 13.317 13.317v13.309zm0 6.709c7.33 0 13.317 5.987 13.317 13.317s-5.986 13.317-13.317 13.317H13.946C6.616 60.598.63 54.612.63 47.281c0-7.33 5.987-13.317 13.317-13.317zm0 0"
      ></path>
      <path
        fill="#2eb57d"
        d="M100.745 47.281c0-7.33 5.978-13.317 13.309-13.317s13.317 5.987 13.317 13.317s-5.987 13.317-13.317 13.317h-13.309zm-6.709 0c0 7.33-5.987 13.317-13.317 13.317s-13.317-5.986-13.317-13.317V13.946C67.402 6.616 73.388.63 80.719.63c7.33 0 13.317 5.987 13.317 13.317zm0 0"
      ></path>
      <path
        fill="#ebb02e"
        d="M80.719 100.745c7.33 0 13.317 5.978 13.317 13.309s-5.987 13.317-13.317 13.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33 0-13.317-5.987-13.317-13.317s5.986-13.317 13.317-13.317h33.335c7.33 0 13.317 5.986 13.317 13.317c0 7.33-5.987 13.317-13.317 13.317zm0 0"
      ></path>
    </svg>
  );
}

export function Googlecloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#ea4535"
        d="M80.6 40.3h.4l-.2-.2l14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2c5.2-3.4 11.4-5.4 17.9-5.4c2.2 0 4.3.2 6.4.6c.1-.1.2-.1.3-.1c9-9.9 24.2-11.1 34.6-2.6h-.1z"
      ></path>
      <path
        fill="#557ebf"
        d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1c4.3-13.8-1-28.8-13-36.9z"
      ></path>
      <path
        fill="#36a852"
        d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"
      ></path>
      <path
        fill="#f9bc15"
        d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8c-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8c6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"
      ></path>
    </svg>
  );
}

export function MetaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 171 256"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosMetaIcon0"
          x1="13.878%"
          x2="89.144%"
          y1="55.934%"
          y2="58.694%"
        >
          <stop offset="0%" stopColor="#0064E1"></stop>
          <stop offset="40%" stopColor="#0064E1"></stop>
          <stop offset="83%" stopColor="#0073EE"></stop>
          <stop offset="100%" stopColor="#0082FB"></stop>
        </linearGradient>
        <linearGradient
          id="logosMetaIcon1"
          x1="54.315%"
          x2="54.315%"
          y1="82.782%"
          y2="39.307%"
        >
          <stop offset="0%" stopColor="#0082FB"></stop>
          <stop offset="100%" stopColor="#0064E0"></stop>
        </linearGradient>
      </defs>
      <path
        fill="#0081FB"
        d="M27.651 112.136c0 9.775 2.146 17.28 4.95 21.82c3.677 5.947 9.16 8.466 14.751 8.466c7.211 0 13.808-1.79 26.52-19.372c10.185-14.092 22.186-33.874 30.26-46.275l13.675-21.01c9.499-14.591 20.493-30.811 33.1-41.806C161.196 4.985 172.298 0 183.47 0c18.758 0 36.625 10.87 50.3 31.257C248.735 53.584 256 81.707 256 110.729c0 17.253-3.4 29.93-9.187 39.946c-5.591 9.686-16.488 19.363-34.818 19.363v-27.616c15.695 0 19.612-14.422 19.612-30.927c0-23.52-5.484-49.623-17.564-68.273c-8.574-13.23-19.684-21.313-31.907-21.313c-13.22 0-23.859 9.97-35.815 27.75c-6.356 9.445-12.882 20.956-20.208 33.944l-8.066 14.289c-16.203 28.728-20.307 35.271-28.408 46.07c-14.2 18.91-26.324 26.076-42.287 26.076c-18.935 0-30.91-8.2-38.325-20.556C2.973 139.413 0 126.202 0 111.148z"
      ></path>
      <path
        fill="url(#logosMetaIcon0)"
        d="M21.802 33.206C34.48 13.666 52.774 0 73.757 0C85.91 0 97.99 3.597 110.605 13.897c13.798 11.261 28.505 29.805 46.853 60.368l6.58 10.967c15.881 26.459 24.917 40.07 30.205 46.49c6.802 8.243 11.565 10.7 17.752 10.7c15.695 0 19.612-14.422 19.612-30.927l24.393-.766c0 17.253-3.4 29.93-9.187 39.946c-5.591 9.686-16.488 19.363-34.818 19.363c-11.395 0-21.49-2.475-32.654-13.007c-8.582-8.083-18.615-22.443-26.334-35.352l-22.96-38.352C118.528 64.08 107.96 49.73 101.845 43.23c-6.578-6.988-15.036-15.428-28.532-15.428c-10.923 0-20.2 7.666-27.963 19.39z"
      ></path>
      <path
        fill="url(#logosMetaIcon1)"
        d="M73.312 27.802c-10.923 0-20.2 7.666-27.963 19.39c-10.976 16.568-17.698 41.245-17.698 64.944c0 9.775 2.146 17.28 4.95 21.82L9.027 149.482C2.973 139.413 0 126.202 0 111.148C0 83.772 7.514 55.24 21.802 33.206C34.48 13.666 52.774 0 73.757 0z"
      ></path>
    </svg>
  );
}

export function MicrosoftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="#F1511B" d="M121.666 121.666H0V0h121.666z"></path>
      <path fill="#80CC28" d="M256 121.666H134.335V0H256z"></path>
      <path fill="#00ADEF" d="M121.663 256.002H0V134.336h121.663z"></path>
      <path fill="#FBBC09" d="M256 256.002H134.335V134.336H256z"></path>
    </svg>
  );
}

export function WorkflowAutomation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 27c-3.6 0-7.1-1.8-9.2-5H12v-2H4v8h2v-3.7c2.5 3 6.1 4.7 10 4.7zm15-4v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5l-1.4-1.4l-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V15h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5l-1.4 1.4l1.5 1.5c-.3.5-.6 1.1-.7 1.8H17v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5l1.4 1.4l1.5-1.5c.5.3 1.1.6 1.8.7V29h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5l1.4-1.4l-1.5-1.5c.3-.5.6-1.1.7-1.8zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3m-4-15h5.2C21.9 4.9 15.1 3.5 10 6.8c-3.1 2-5 5.5-5 9.2H3C3 8.8 8.8 3 16 3c3.9 0 7.5 1.7 10 4.7V4h2v8h-8z"
      ></path>
    </svg>
  );
}

export function CloudSync(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21.5 14.98c-.02 0-.03 0-.05.01A3.49 3.49 0 0 0 18 12c-1.4 0-2.6.83-3.16 2.02A2.99 2.99 0 0 0 12 17c0 1.66 1.34 3 3 3l6.5-.02a2.5 2.5 0 0 0 0-5m.01 3.02H15c-.55 0-1-.45-1-1s.45-1 1-1h1.25v-.25c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75V17h1.76c.28 0 .5.22.5.5c-.01.27-.23.5-.5.5M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73A7.94 7.94 0 0 1 4 12c0-3.73 2.55-6.85 6-7.74M20 6h-2.73a7.98 7.98 0 0 1 2.66 5h-2.02c-.23-1.36-.93-2.55-1.91-3.44V10h-2V4h6z"
      ></path>
    </svg>
  );
}

export function VideoCall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21.995 6.25A2.25 2.25 0 0 0 19.745 4H4.25A2.25 2.25 0 0 0 2 6.25v11.505a2.25 2.25 0 0 0 2.25 2.25h9.758c.036-.427.194-.847.478-1.206l.8-1.01a2.2 2.2 0 0 1 1.708-.832V15.75l-.005-.143A1.75 1.75 0 0 0 15.245 14H8.75l-.144.006A1.75 1.75 0 0 0 7 15.75l-.001 2.754H4.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h15.495a.75.75 0 0 1 .75.75v3.773c.335-.05.687-.025 1.03.088l.43.14l.04.014zM15 10a3 3 0 1 0-6 0a3 3 0 0 0 6 0m4.192 2.995l.476-1.205c.242-.614.92-.933 1.548-.728l.431.141c.724.237 1.326.806 1.35 1.569c.1 3.11-2.476 7.583-5.213 9.055c-.673.362-1.468.123-2.035-.391l-.337-.305a1.253 1.253 0 0 1-.142-1.706l.8-1.01c.29-.367.767-.53 1.22-.42l1.292.313q1.654-1.095 1.774-3.079l-.917-.964a1.2 1.2 0 0 1-.247-1.27"
      ></path>
    </svg>
  );
}

export function EmailLockOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 18.2V18H4V8l8 5l8-5v3.44c.81.36 1.5.92 2 1.62V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8zM20 6l-8 5l-8-5zm.8 11v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z"
      ></path>
    </svg>
  );
}

export function Codereview(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.986 23.972C5.411 23.972 0 18.561 0 11.986C0 5.411 5.411 0 11.986 0c6.575 0 11.986 5.411 11.986 11.986a11.9 11.9 0 0 1-2.492 7.281l2.062 2.062c.293.293.458.691.458 1.106c0 .859-.706 1.565-1.565 1.565c-.415 0-.813-.165-1.106-.458l-2.062-2.062a11.9 11.9 0 0 1-7.281 2.492Zm6.664-6.001a8.936 8.936 0 0 0 2.31-5.985c0-4.923-4.051-8.974-8.974-8.974c-2.702 0-5.141 1.22-6.792 3.135h5.255v2.458H3.681a8.851 8.851 0 0 0-.536 1.844H9.22v2.459H3.06c.087.845.297 1.673.621 2.459h4.31v2.458H5.194c1.651 1.915 4.09 3.135 6.792 3.135c2.29 0 4.392-.877 5.985-2.31a1.59 1.59 0 0 1 .679-.679Zm-9.43-.146h7.376v-2.458H9.22v2.458Zm6.147-4.917h4.917v-2.459h-4.917v2.459Zm-4.918 0h3.074v-2.459h-3.074v2.459Zm1.844-4.303h4.918V6.147h-4.918v2.458Z"
      ></path>
    </svg>
  );
}

export function FileSearch2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        <circle cx="11.5" cy="14.5" r="2.5"></circle>
        <path d="M13.3 16.3L15 18"></path>
      </g>
    </svg>
  );
}

export function UserAdmin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm3-13.82l-2.59-2.59L21 15l4 4l7-7l-1.41-1.41z"
      ></path>
    </svg>
  );
}

export function Reports(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M9 21h6m-6 0v-5m0 5H3.6a.6.6 0 0 1-.6-.6v-3.8a.6.6 0 0 1 .6-.6H9m6 5V9m0 12h5.4a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6h-4.8a.6.6 0 0 0-.6.6V9m0 0H9.6a.6.6 0 0 0-.6.6V16"
      ></path>
    </svg>
  );
}

export function AuditOutlined(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M296 250c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm184 144H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m-48 458H208V148h560v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m440-88H728v-36.6c46.3-13.8 80-56.6 80-107.4c0-61.9-50.1-112-112-112s-112 50.1-112 112c0 50.7 33.7 93.6 80 107.4V764H520c-8.8 0-16 7.2-16 16v152c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V780c0-8.8-7.2-16-16-16M646 620c0-27.6 22.4-50 50-50s50 22.4 50 50s-22.4 50-50 50s-50-22.4-50-50m180 266H566v-60h260z"
      ></path>
    </svg>
  );
}

export function MonitorHeartOutlineSharp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 9V4h20v5h-2V6H4v3zm0 11v-5h2v3h16v-3h2v5zm5.375-7l1.95 3.9h1.35L14 10.25L15.375 13H22v-2h-5.375l-1.95-3.9h-1.35L10 13.75L8.625 11H2v2zM12 12"
      ></path>
    </svg>
  );
}

export function Gridlogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-12"
      {...props}
    >
      <path
        d="M4.92285 14.8848H0V9.96191H4.92285V14.8848ZM19.6924 14.8848H9.84668V9.96191H4.92383V5.03809H9.84668V0.115234H19.6924V14.8848ZM9.84668 9.96191H14.7695V5.03906H9.84668V9.96191ZM4.92285 5.03809H0V0.115234H4.92285V5.03809Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="190"
      height="197"
      viewBox="0 0 190 197"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-40 -top-4 mx-auto z-30"
      {...props}
    >
      <foreignObject x="118.895" y="102.041" width="91.0156" height="83.5756">
        <div
          style={{
            backdropFilter: "blur(17.47px)",
            clipPath: "url(#bgblur_0_6_2529_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="34.9346"
        d="M173.838 137.814L171.849 140.157L154.299 150.29L155.909 148.392C156.218 148.028 156.564 147.734 156.941 147.507L156.94 147.506L173.956 137.684C173.917 137.727 173.876 137.769 173.838 137.814Z"
        fill="url(#paint0_linear_6_2529)"
        stroke="url(#paint1_linear_6_2529)"
        strokeWidth="0.208864"
      ></path>
      <foreignObject x="85.5176" y="90.5391" width="123.294" height="129.465">
        <div
          style={{
            backdropFilter: "blur(17.47px)",
            clipPath: "url(#bgblur_1_6_2529_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="34.9346"
        d="M139.887 126.312C138.543 127.896 138.166 130.42 138.617 133.201C139.069 135.986 140.354 139.05 142.363 141.735L162.848 169.111C164.616 171.474 166.655 173.157 168.616 174.034C170.037 174.669 171.422 174.881 172.634 174.617L155.736 184.373L155.735 184.374C154.354 185.204 152.536 185.146 150.613 184.286C148.692 183.427 146.679 181.77 144.927 179.429L124.442 152.054C122.452 149.393 121.181 146.36 120.735 143.61C120.289 140.857 120.672 138.407 121.958 136.891C122.266 136.527 122.613 136.233 122.99 136.006L122.989 136.005L140.005 126.183C139.966 126.225 139.925 126.268 139.887 126.312Z"
        fill="url(#paint2_linear_6_2529)"
        stroke="url(#paint3_linear_6_2529)"
        strokeWidth="0.208864"
      ></path>
      <foreignObject x="88.0069" y="89.9351" width="101.48" height="89.3339">
        <div
          style={{
            backdropFilter: "blur(17.47px)",
            clipPath: "url(#bgblur_2_6_2529_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="34.9346"
        d="M141.083 125.565C142.464 124.735 144.282 124.793 146.205 125.653C148.127 126.512 150.14 128.168 151.892 130.509L154.398 133.859L136.491 144.197L133.971 140.828C132.203 138.465 130.163 136.782 128.202 135.905C126.781 135.269 125.395 135.057 124.184 135.321L141.082 125.566L141.083 125.565Z"
        fill="url(#paint4_linear_6_2529)"
        stroke="url(#paint5_linear_6_2529)"
        strokeWidth="0.208864"
      ></path>
      <foreignObject x="-3.89549" y="9.60061" width="193.382" height="169.668">
        <div
          style={{
            backdropFilter: "blur(17.47px)",
            clipPath: "url(#bgblur_2_6_2529_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="34.9346"
        d="M49.1787 48.6846C57.7559 43.9064 68.7829 43.1812 81.4541 47.4727C96.8958 52.7025 112.198 64.5162 125.115 79.9258C138.014 95.3135 148.528 114.281 154.427 133.842L136.524 144.178C130.615 124.605 120.093 105.63 107.188 90.2344C94.2544 74.8059 78.9218 62.9636 63.4326 57.7178C52.0516 53.8633 41.9725 54.0401 33.7861 57.5723L49.1797 48.6855L49.1787 48.6846Z"
        fill="url(#paint6_linear_6_2529)"
        stroke="url(#paint7_linear_6_2529)"
        strokeWidth="0.208864"
      ></path>
      <foreignObject x="-34.1699" y="-6.34568" width="103.944" height="117.56">
        <div
          style={{
            backdropFilter: "blur(17.47px)",
            clipPath: "url(#bgblur_4_6_2529_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="34.9346"
        d="M32.6836 29.9541C27.3257 33.9229 22.8915 39.3035 19.5361 45.9082C18.531 47.8867 18.5248 50.6511 19.3086 53.5117C20.0933 56.3754 21.6734 59.3523 23.8643 61.7646C25.6167 63.6942 27.4993 64.976 29.2607 65.5664C30.3908 65.9451 31.4741 66.0375 32.4404 65.833L15.7412 75.4746L15.7354 75.4785C14.5361 76.281 12.9587 76.3878 11.2393 75.8115C9.51957 75.2352 7.66557 73.9777 5.93066 72.0674C3.76244 69.6799 2.19809 66.7329 1.42188 63.9004C0.644919 61.0649 0.661842 58.3597 1.63379 56.4463C5.40332 49.0263 10.5358 43.1624 16.8076 39.1191L32.6836 29.9541Z"
        fill="url(#paint8_linear_6_2529)"
        stroke="url(#paint9_linear_6_2529)"
        strokeWidth="0.208864"
      ></path>
      <foreignObject x="-19.1426" y="13.6636" width="103.202" height="96.8383">
        <div
          style={{
            backdropFilter: "blur(17.47px)",
            clipPath: "url(#bgblur_5_6_2529_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="34.9346"
        d="M45.6504 50.7241C41.4464 53.8557 37.9631 58.0924 35.3213 63.2925C34.9344 64.0541 34.426 64.6321 33.8281 65.0337L16.6602 74.9448C16.9467 74.6259 17.2028 74.2559 17.4189 73.8306C20.7313 67.3105 25.3688 62.3186 31.0879 59.1323L31.0889 59.1313L45.6504 50.7241Z"
        fill="url(#paint10_linear_6_2529)"
        stroke="url(#paint11_linear_6_2529)"
        strokeWidth="0.208864"
      ></path>
      <foreignObject x="-18.1826" y="-12.7798" width="225.038" height="198.396">
        <div
          style={{
            backdropFilter: "blur(17.47px)",
            clipPath: "url(#bgblur_6_6_2529_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="34.9346"
        d="M34.8965 28.6772C46.0445 21.4906 60.8076 20.0429 77.9434 25.8462C98.1519 32.6904 118.169 48.4327 134.862 68.8999C151.537 89.3453 164.89 114.498 171.799 140.187L153.897 150.523C146.976 124.822 133.617 99.6638 116.937 79.2114C100.228 58.7249 80.1802 42.9521 59.9229 36.0913C45.4734 31.1977 32.685 31.4409 22.3135 35.9419L34.8926 28.6802L34.8965 28.6772Z"
        fill="url(#paint12_linear_6_2529)"
        stroke="url(#paint13_linear_6_2529)"
        strokeWidth="0.208864"
      ></path>
      <foreignObject x="120.859" y="101.437" width="103.908" height="117.967">
        <div
          style={{
            backdropFilter: "blur(17.47px)",
            clipPath: "url(#bgblur_7_6_2529_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="34.9346"
        d="M175.034 137.066C176.415 136.237 178.234 136.295 180.156 137.154C182.078 138.014 184.091 139.67 185.843 142.011C187.833 144.671 189.104 147.704 189.55 150.454C189.996 153.208 189.614 155.657 188.327 157.174L174.86 173.052C174.552 173.415 174.207 173.708 173.83 173.935L156.812 183.759C156.852 183.716 156.894 183.675 156.932 183.63L170.398 167.752C171.742 166.168 172.119 163.645 171.668 160.863C171.216 158.078 169.931 155.015 167.922 152.329C166.154 149.966 164.114 148.283 162.153 147.406C160.733 146.771 159.348 146.559 158.137 146.822L175.033 137.067L175.034 137.066Z"
        fill="url(#paint14_linear_6_2529)"
        stroke="url(#paint15_linear_6_2529)"
        strokeWidth="0.208864"
      ></path>
      <path
        d="M59.8719 36.0767C100.321 49.7761 139.97 99.0269 153.855 150.463L155.759 148.223C158.416 145.091 163.846 146.93 167.887 152.331C171.929 157.732 173.051 164.65 170.394 167.783L156.927 183.661C154.27 186.794 148.84 184.955 144.798 179.553L124.314 152.177C120.272 146.775 119.15 139.857 121.807 136.725C124.464 133.592 129.894 135.431 133.936 140.833L136.261 143.94C124.399 104.933 94.2027 68.3565 63.4171 57.9302C42.2921 50.7758 25.7004 57.5531 17.4104 73.8711C15.4125 77.8038 10.222 77.061 5.81716 72.2109C1.41258 67.3609 -0.538529 60.2408 1.45912 56.3081C11.9621 35.6337 33.0321 26.9868 59.8719 36.0767Z"
        fill="url(#paint16_linear_6_2529)"
        stroke="url(#paint17_linear_6_2529)"
        strokeWidth="0.208864"
      ></path>
      <defs>
        <clipPath
          id="bgblur_0_6_2529_clip_path"
          transform="translate(-118.895 -102.041)"
        >
          <path d="M173.838 137.814L171.849 140.157L154.299 150.29L155.909 148.392C156.218 148.028 156.564 147.734 156.941 147.507L156.94 147.506L173.956 137.684C173.917 137.727 173.876 137.769 173.838 137.814Z"></path>
        </clipPath>
        <clipPath
          id="bgblur_1_6_2529_clip_path"
          transform="translate(-85.5176 -90.5391)"
        >
          <path d="M139.887 126.312C138.543 127.896 138.166 130.42 138.617 133.201C139.069 135.986 140.354 139.05 142.363 141.735L162.848 169.111C164.616 171.474 166.655 173.157 168.616 174.034C170.037 174.669 171.422 174.881 172.634 174.617L155.736 184.373L155.735 184.374C154.354 185.204 152.536 185.146 150.613 184.286C148.692 183.427 146.679 181.77 144.927 179.429L124.442 152.054C122.452 149.393 121.181 146.36 120.735 143.61C120.289 140.857 120.672 138.407 121.958 136.891C122.266 136.527 122.613 136.233 122.99 136.006L122.989 136.005L140.005 126.183C139.966 126.225 139.925 126.268 139.887 126.312Z"></path>
        </clipPath>
        <clipPath
          id="bgblur_2_6_2529_clip_path"
          transform="translate(-88.0069 -89.9351)"
        >
          <path d="M141.083 125.565C142.464 124.735 144.282 124.793 146.205 125.653C148.127 126.512 150.14 128.168 151.892 130.509L154.398 133.859L136.491 144.197L133.971 140.828C132.203 138.465 130.163 136.782 128.202 135.905C126.781 135.269 125.395 135.057 124.184 135.321L141.082 125.566L141.083 125.565Z"></path>
        </clipPath>
        <clipPath
          id="bgblur_3_6_2529_clip_path"
          transform="translate(3.89549 -9.60061)"
        >
          <path d="M49.1787 48.6846C57.7559 43.9064 68.7829 43.1812 81.4541 47.4727C96.8958 52.7025 112.198 64.5162 125.115 79.9258C138.014 95.3135 148.528 114.281 154.427 133.842L136.524 144.178C130.615 124.605 120.093 105.63 107.188 90.2344C94.2544 74.8059 78.9218 62.9636 63.4326 57.7178C52.0516 53.8633 41.9725 54.0401 33.7861 57.5723L49.1797 48.6855L49.1787 48.6846Z"></path>
        </clipPath>
        <clipPath
          id="bgblur_4_6_2529_clip_path"
          transform="translate(34.1699 6.34568)"
        >
          <path d="M32.6836 29.9541C27.3257 33.9229 22.8915 39.3035 19.5361 45.9082C18.531 47.8867 18.5248 50.6511 19.3086 53.5117C20.0933 56.3754 21.6734 59.3523 23.8643 61.7646C25.6167 63.6942 27.4993 64.976 29.2607 65.5664C30.3908 65.9451 31.4741 66.0375 32.4404 65.833L15.7412 75.4746L15.7354 75.4785C14.5361 76.281 12.9587 76.3878 11.2393 75.8115C9.51957 75.2352 7.66557 73.9777 5.93066 72.0674C3.76244 69.6799 2.19809 66.7329 1.42188 63.9004C0.644919 61.0649 0.661842 58.3597 1.63379 56.4463C5.40332 49.0263 10.5358 43.1624 16.8076 39.1191L32.6836 29.9541Z"></path>
        </clipPath>
        <clipPath
          id="bgblur_5_6_2529_clip_path"
          transform="translate(19.1426 -13.6636)"
        >
          <path d="M45.6504 50.7241C41.4464 53.8557 37.9631 58.0924 35.3213 63.2925C34.9344 64.0541 34.426 64.6321 33.8281 65.0337L16.6602 74.9448C16.9467 74.6259 17.2028 74.2559 17.4189 73.8306C20.7313 67.3105 25.3688 62.3186 31.0879 59.1323L31.0889 59.1313L45.6504 50.7241Z"></path>
        </clipPath>
        <clipPath
          id="bgblur_6_6_2529_clip_path"
          transform="translate(18.1826 12.7798)"
        >
          <path d="M34.8965 28.6772C46.0445 21.4906 60.8076 20.0429 77.9434 25.8462C98.1519 32.6904 118.169 48.4327 134.862 68.8999C151.537 89.3453 164.89 114.498 171.799 140.187L153.897 150.523C146.976 124.822 133.617 99.6638 116.937 79.2114C100.228 58.7249 80.1802 42.9521 59.9229 36.0913C45.4734 31.1977 32.685 31.4409 22.3135 35.9419L34.8926 28.6802L34.8965 28.6772Z"></path>
        </clipPath>
        <clipPath
          id="bgblur_7_6_2529_clip_path"
          transform="translate(-120.859 -101.437)"
        >
          <path d="M175.034 137.066C176.415 136.237 178.234 136.295 180.156 137.154C182.078 138.014 184.091 139.67 185.843 142.011C187.833 144.671 189.104 147.704 189.55 150.454C189.996 153.208 189.614 155.657 188.327 157.174L174.86 173.052C174.552 173.415 174.207 173.708 173.83 173.935L156.812 183.759C156.852 183.716 156.894 183.675 156.932 183.63L170.398 167.752C171.742 166.168 172.119 163.645 171.668 160.863C171.216 158.078 169.931 155.015 167.922 152.329C166.154 149.966 164.114 148.283 162.153 147.406C160.733 146.771 159.348 146.559 158.137 146.822L175.033 137.067L175.034 137.066Z"></path>
        </clipPath>
        <linearGradient
          id="paint0_linear_6_2529"
          x1="164.402"
          y1="136.975"
          x2="164.402"
          y2="150.681"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_6_2529"
          x1="164.402"
          y1="136.975"
          x2="164.402"
          y2="150.681"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_6_2529"
          x1="147.165"
          y1="125.474"
          x2="147.165"
          y2="185.069"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_6_2529"
          x1="147.165"
          y1="125.474"
          x2="147.165"
          y2="185.069"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_6_2529"
          x1="138.747"
          y1="124.87"
          x2="138.747"
          y2="144.334"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_6_2529"
          x1="138.747"
          y1="124.87"
          x2="138.747"
          y2="144.334"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_6_2529"
          x1="92.7955"
          y1="44.5352"
          x2="92.7955"
          y2="144.335"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_6_2529"
          x1="92.7955"
          y1="44.5352"
          x2="92.7955"
          y2="144.335"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_6_2529"
          x1="17.8023"
          y1="28.5889"
          x2="17.8023"
          y2="76.2796"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_6_2529"
          x1="17.8023"
          y1="28.5889"
          x2="17.8023"
          y2="76.2796"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear_6_2529"
          x1="32.4584"
          y1="48.5981"
          x2="32.4584"
          y2="75.5674"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear_6_2529"
          x1="32.4584"
          y1="48.5981"
          x2="32.4584"
          y2="75.5674"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint12_linear_6_2529"
          x1="94.3364"
          y1="22.1548"
          x2="94.3364"
          y2="150.682"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint13_linear_6_2529"
          x1="94.3364"
          y1="22.1548"
          x2="94.3364"
          y2="150.682"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear_6_2529"
          x1="172.814"
          y1="136.371"
          x2="172.814"
          y2="184.469"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear_6_2529"
          x1="172.814"
          y1="136.371"
          x2="172.814"
          y2="184.469"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint16_linear_6_2529"
          x1="86.255"
          y1="49.4242"
          x2="43.8681"
          y2="122.841"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CCCCCC"></stop>
          <stop offset="1" stopColor="#F7F7F7"></stop>
        </linearGradient>
        <linearGradient
          id="paint17_linear_6_2529"
          x1="86.255"
          y1="49.4242"
          x2="43.8681"
          y2="122.841"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="191"
      height="198"
      viewBox="0 0 191 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M174.147 118.72C175.468 121.803 177.479 124.447 179.665 126.231C181.848 128.012 184.222 128.948 186.265 128.577C186.322 128.566 186.379 128.55 186.436 128.538L169.421 138.362C169.036 138.575 168.609 138.729 168.14 138.814C166.183 139.17 163.87 138.276 161.709 136.512C159.551 134.751 157.559 132.134 156.251 129.081L154.286 124.498L172.192 114.161L174.147 118.72Z"
        fill="url(#paint0_linear_6_2517)"
        stroke="url(#paint1_linear_6_2517)"
        strokeWidth="0.208864"
      ></path>
      <path
        d="M140.314 79.7827C139.481 80.6997 138.973 82.0056 138.813 83.5522C138.593 85.6888 139.03 88.2967 140.192 91.0093C141.513 94.092 143.525 96.7371 145.711 98.521C147.894 100.302 150.268 101.237 152.311 100.866L154.296 100.505L136.743 110.639L134.186 111.104C132.229 111.46 129.916 110.566 127.755 108.802C125.597 107.041 123.605 104.424 122.297 101.371C121.145 98.6828 120.716 96.1109 120.933 94.0171C121.149 91.9223 122.009 90.319 123.418 89.5376L123.42 89.5366L140.314 79.7827Z"
        fill="url(#paint2_linear_6_2517)"
        stroke="url(#paint3_linear_6_2517)"
        strokeWidth="0.208864"
      ></path>
      <path
        d="M154.632 100.554C151.343 107.547 146.655 112.729 140.941 116.033L125.927 124.701C130.414 121.364 134.133 116.721 136.862 110.812L154.632 100.554Z"
        fill="url(#paint4_linear_6_2517)"
        stroke="url(#paint5_linear_6_2517)"
        strokeWidth="0.208864"
      ></path>
      <path
        d="M20.6113 23.0103C19.9515 23.7448 19.4908 24.7294 19.2539 25.897C18.8845 27.7178 19.0537 29.9896 19.8486 32.4722C30.3457 65.2557 51.403 98.213 78.2305 120.105C104.591 141.616 130.64 147.647 149.445 139.397L133.717 148.477C114.872 158.355 87.7751 152.828 60.2744 130.386C33.4816 108.523 12.4461 75.6006 1.95996 42.8511C1.17316 40.3937 1.0106 38.1598 1.37109 36.3823C1.73159 34.6052 2.61204 33.2923 3.90625 32.6548H3.90723L3.91309 32.6509L20.6113 23.0103Z"
        fill="url(#paint6_linear_6_2517)"
        stroke="url(#paint7_linear_6_2517)"
        strokeWidth="0.208864"
      ></path>
      <path
        d="M24.2568 21.7852C26.4 21.9 28.7511 23.2382 30.8184 25.3291C32.8834 27.4179 34.6532 30.2467 35.6367 33.3184C43.9436 59.2618 60.5692 85.2513 81.7412 102.528C102.487 119.457 122.995 124.249 137.84 117.826L122.855 126.478C107.955 135.094 86.0412 130.971 63.7852 112.81C42.6479 95.5609 26.044 69.6066 17.748 43.6973C16.7543 40.5938 14.9665 37.7366 12.8789 35.625C10.7934 33.5156 8.39574 32.1383 6.17969 32.0195C5.7036 31.9941 5.25514 32.0296 4.83594 32.1182L22.002 22.207C22.6487 21.8899 23.4037 21.7395 24.2568 21.7852Z"
        fill="url(#paint8_linear_6_2517)"
        stroke="url(#paint9_linear_6_2517)"
        strokeWidth="0.208864"
      ></path>
      <path
        d="M172.027 114.252C167.608 125.449 160.603 133.423 151.808 138.035L151.804 138.037L138.812 145.537C145.385 140.705 150.667 133.675 154.232 124.526L172.027 114.252Z"
        fill="url(#paint10_linear_6_2517)"
        stroke="url(#paint11_linear_6_2517)"
        strokeWidth="0.208864"
      ></path>
      <path
        d="M163.273 74.9189C165.23 74.5634 167.544 75.457 169.705 77.2207C171.863 78.9819 173.854 81.5984 175.163 84.6523L188.63 116.081C189.782 118.769 190.21 121.34 189.993 123.434C189.777 125.529 188.917 127.132 187.508 127.913L187.507 127.914L170.61 137.668C171.444 136.751 171.953 135.446 172.113 133.898C172.334 131.762 171.896 129.154 170.733 126.441L157.267 95.0137C155.945 91.9308 153.935 89.2858 151.749 87.502C149.566 85.7207 147.192 84.7851 145.148 85.1562L124.664 88.8799C124.605 88.8906 124.548 88.9053 124.49 88.918L141.508 79.0938C141.893 78.8803 142.321 78.7269 142.79 78.6416L163.273 74.9189Z"
        fill="url(#paint12_linear_6_2517)"
        stroke="url(#paint13_linear_6_2517)"
        strokeWidth="0.208864"
      ></path>
      <path
        d="M145.117 85.1484C149.158 84.4138 154.588 88.8446 157.245 95.0454L170.712 126.474C173.369 132.675 172.247 138.297 168.206 139.032C164.164 139.766 158.734 135.335 156.077 129.135L154.173 124.695C140.288 160.098 100.64 163.569 60.1902 130.561C33.3505 108.659 12.2805 75.6821 1.77748 42.8799C-0.220302 36.6404 1.73092 31.7733 6.13552 32.0093C10.5402 32.2454 15.7307 37.4954 17.7288 43.7349C26.0187 69.6254 42.6105 95.5611 63.7355 112.8C94.5212 137.922 124.717 136.213 136.58 110.903L134.254 111.326C130.213 112.061 124.782 107.63 122.125 101.429C119.468 95.2284 120.591 89.6053 124.632 88.8706L145.117 85.1484Z"
        fill="url(#paint14_linear_6_2517)"
        stroke="url(#paint15_linear_6_2517)"
        strokeWidth="0.208864"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_6_2517"
          x1="170.857"
          y1="114.011"
          x2="170.857"
          y2="138.995"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_6_2517"
          x1="170.857"
          y1="114.011"
          x2="170.857"
          y2="138.995"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_6_2517"
          x1="137.822"
          y1="79.0034"
          x2="137.822"
          y2="111.285"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_6_2517"
          x1="137.822"
          y1="79.0034"
          x2="137.822"
          y2="111.285"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_6_2517"
          x1="138.887"
          y1="100.297"
          x2="138.887"
          y2="126.567"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_6_2517"
          x1="138.887"
          y1="100.297"
          x2="138.887"
          y2="126.567"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_6_2517"
          x1="76.4712"
          y1="22.1177"
          x2="76.4712"
          y2="153.284"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_6_2517"
          x1="76.4712"
          y1="22.1177"
          x2="76.4712"
          y2="153.284"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_6_2517"
          x1="72.4292"
          y1="21.6729"
          x2="72.4292"
          y2="130.904"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_6_2517"
          x1="72.4292"
          y1="21.6729"
          x2="72.4292"
          y2="130.904"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear_6_2517"
          x1="153.002"
          y1="114.011"
          x2="153.002"
          y2="148.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear_6_2517"
          x1="153.002"
          y1="114.011"
          x2="153.002"
          y2="148.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint12_linear_6_2517"
          x1="156.761"
          y1="74.7373"
          x2="156.761"
          y2="138.448"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6"></stop>
          <stop offset="1" stopColor="#FAFAFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint13_linear_6_2517"
          x1="156.761"
          y1="74.7373"
          x2="156.761"
          y2="138.448"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear_6_2517"
          x1="86.5734"
          y1="49.789"
          x2="44.1865"
          y2="123.205"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CCCCCC"></stop>
          <stop offset="1" stopColor="#F7F7F7"></stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear_6_2517"
          x1="86.5734"
          y1="49.789"
          x2="44.1865"
          y2="123.205"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0.5"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Lock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 0C9.676 0 7 2.676 7 6v4c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4H9V6c0-2.276 1.724-4 4-4s4 1.724 4 4v1h2V6c0-3.324-2.676-6-6-6m0 15c1.1 0 2 .9 2 2c0 .7-.4 1.387-1 1.688V21c0 .6-.4 1-1 1s-1-.4-1-1v-2.313c-.6-.3-1-.987-1-1.687c0-1.1.9-2 2-2"
      ></path>
    </svg>
  );
}

export function Human(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="5" cy="3.75" r="2.25"></circle>
        <path d="M9.5 13.5h-9v-1a4.5 4.5 0 0 1 9 0ZM9 1.5A2.25 2.25 0 0 1 9 6m1.6 2.19a4.5 4.5 0 0 1 2.9 4.2v1.11H12"></path>
      </g>
    </svg>
  );
}

export function FaqIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2s1.218-.9 1.218-2s-.418-2-1.218-2"
      ></path>
    </svg>
  );
}