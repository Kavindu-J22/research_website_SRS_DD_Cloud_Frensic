import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Automated Incident Capture and Analysis in Cloud Forensics Using Log-Based Event Correlation",
  description: "Advanced behavior profiling, incident detection, and evidence preservation for cloud environments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
