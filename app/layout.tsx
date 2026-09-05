import "./globals.css";

export const metadata = {
  title: "IVANR.OCKS — Find Your Mates",
  description: "Play the music you love. Find people who feel the same.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
