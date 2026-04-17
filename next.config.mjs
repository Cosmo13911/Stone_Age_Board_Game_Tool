/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // เพิ่มบรรทัดนี้
  images: {
    unoptimized: false, // เพิ่มบรรทัดนี้เพื่อให้รูปภาพแสดงผลได้บน GitHub Pages
  },
};

export default nextConfig;