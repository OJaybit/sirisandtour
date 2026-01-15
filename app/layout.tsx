import "./globals.css";

export const metadata = {
  title: "sandtour Project",
  description: "Hero section with video background",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
