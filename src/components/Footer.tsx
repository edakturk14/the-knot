import Link from "next/link";

export function Footer() {

    return (
        <footer className="footer footer-center p-8 bg-base-300 text-base-content">
            <p>
                Getting married?{" "}
                <Link href="https://google.com" className="underline">
                    Create your website for free
                </Link>
            </p>
        </footer>
    );
}
