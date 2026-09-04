# Portfolio 3D — Bàng Khải Tấn

Portfolio cá nhân cho **Backend & Software Engineer**, trình bày dự án, kỹ năng cốt lõi (C#/.NET, SQL Server, QA Automation) và tư duy xây dựng hệ thống. Website tĩnh, không cần cài đặt package hay biến môi trường.

## Điểm nổi bật

- Giao diện sáng/tối và song ngữ Việt / Anh; ghi nhớ lựa chọn của người xem.
- Hero 3D tương tác với parallax theo chuột, quỹ đạo, khối nổi và các chip công nghệ.
- Các section bên dưới có lớp nền 3D chuyển động nhẹ theo cuộn trang.
- Thiết kế responsive: điều hướng di động, bố cục kỹ năng không tràn màn hình.
- Hiệu ứng card tilt, reveal khi cuộn và thanh tiến độ đọc trang.
- Chế độ `prefers-reduced-motion` để giảm animation cho người dùng cần thiết.
- Hộp thoại dự án hiển thị vai trò, kiến trúc, tính năng, công nghệ và liên kết demo/mã nguồn.

## Dự án nổi bật

- **BookStore Management** — Website thương mại điện tử ASP.NET MVC, tích hợp đối soát thanh toán tự động (SePay, PayPal), AI Gemini và lưu trữ Cloudinary.
- **Quản Lý Thuê Xe (QA Automation)** — Hệ thống quản lý hợp đồng thuê xe, tích hợp bộ kịch bản kiểm thử hồi quy tự động bằng C#, Selenium WebDriver và NUnit.
- **Sales & Warranty Management** — Hệ thống quản trị bán hàng và tra cứu bảo hành thiết bị qua Serial Number, áp dụng thiết kế CSDL phân mảnh phân tán.
- **MyStore** — Giao diện UI/UX website cửa hàng trực tuyến tĩnh (HTML/CSS/JS).

## Chạy trên máy

Mở trực tiếp `index.html` bằng trình duyệt, hoặc sử dụng một static web server bất kỳ tại thư mục gốc.

## Cập nhật nội dung

| Nội dung | File |
| --- | --- |
| Thông tin, section và dự án | `index.html` |
| Màu sắc, responsive và bố cục | `assets/css/cv.css` |
| Ngôn ngữ, dialog và animation | `assets/js/cv.js` |
| Logo / favicon | `assets/images/logo-kt-tech-final.jpg` |

## Triển khai GitHub Pages

1. Đẩy source lên nhánh `main`.
2. Vào **Settings → Pages** trong repository GitHub.
3. Chọn **Deploy from a branch**.
4. Chọn nhánh `main` và thư mục `/ (root)`.
5. Nhấn **Save** để nhận địa chỉ website.

Ngoài GitHub Pages, website cũng có thể triển khai trực tiếp trên Vercel hoặc Netlify.