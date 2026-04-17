import { Roboto } from "next/font/google";
import "@/styles/globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // ป้องกันการซูมเข้าออกเวลาพิมพ์ชื่อบนมือถือ
}

export const metadata = {
  title: "Stone Age", // จาก <title> เดิม
  description: "Stone Age Board Game Tool",
  icons: {
    icon: "https://cf.geekdo-images.com/elmZegVZ6gp4_5izUgxGQQ__itemrep/img/vApiI-gvXtwafEriPc4jDVJ1ajA=/fit-in/246x300/filters:strip_icc()/pic1632539.jpg", // จาก href เดิม
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
