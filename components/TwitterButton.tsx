export default function TwitterButton({ textColor, hoverColor }: { textColor: string; hoverColor: string }) {
    return (
        <a
            href="https://x.com/wasedaigem" 
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center text-${textColor} hover:text-${hoverColor} transition-colors`}
            aria-label="Visit our Twitter profile"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
            </svg>
        </a>
    )
}
