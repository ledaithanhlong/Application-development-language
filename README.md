## Lê Đại Thanh Long - 2280601752 - 22DTHD4

## Mô tả bài tập

Bài tập thực hành về lập trình hướng đối tượng (OOP) trong JavaScript với model **Product**.

### Yêu cầu bài tập

Model **Product** gồm các thuộc tính:
- `id` - mã sản phẩm
- `name` - tên sản phẩm
- `price` - giá sản phẩm
- `quantity` - số lượng tồn kho
- `category` - danh mục sản phẩm
- `isAvailable` - trạng thái bán (true/false)

### 10 Câu hỏi

1. **Câu 1**: Khai báo constructor function Product để tạo đối tượng sản phẩm
2. **Câu 2**: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
3. **Câu 3**: Tạo mảng mới chỉ chứa `name`, `price` của mỗi sản phẩm
4. **Câu 4**: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
5. **Câu 5**: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
6. **Câu 6**: Kiểm tra xem tất cả các sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
7. **Câu 7**: Tính tổng giá trị kho hàng (price × quantity)
8. **Câu 8**: Dùng `for...of` duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
9. **Câu 9**: Dùng `for...in` để in ra tên thuộc tính và giá trị tương ứng
10. **Câu 10**: Lấy danh sách tên các sản phẩm đang bán và còn hàng

## Cách chạy

1. Mở file `index.html` trong trình duyệt web
2. Xem kết quả của tất cả 10 câu hỏi được hiển thị trên trang
3. Mở Console (F12) để xem output chi tiết

## Cấu trúc file

```
Application-development-language/
├── product.js      # Code JavaScript chính
├── index.html      # Trang demo hiển thị kết quả
└── README.md       # File hướng dẫn này
```

## Kết quả mong đợi

- Trang web hiển thị đầy đủ 10 câu hỏi với kết quả tương ứng
- Giao diện đẹp mắt, dễ đọc với gradient và animation
- Console log hiển thị chi tiết các kết quả

