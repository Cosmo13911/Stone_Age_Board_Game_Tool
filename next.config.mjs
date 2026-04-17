/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // เพิ่มบรรทัดนี้
  images: {
    unoptimized: true, // เพิ่มบรรทัดนี้เพื่อให้รูปภาพแสดงผลได้บน GitHub Pages
  },
  // ถ้าชื่อ Repo ของน้องไม่ใช่ชื่อเดียวกับ username ให้ใส่ basePath ด้วย
  basePath: '/Stone_Age_Board_Game_Tool', 
};

export default nextConfig;