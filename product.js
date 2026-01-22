// CÂU 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// CÂU 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm
// thuộc tối thiểu 2 danh mục khác nhau
const products = [
    new Product(1, "iPhone 15 Pro Max", 32000000, 15, "Smartphone", true),
    new Product(2, "Samsung Galaxy S24 Ultra", 28000000, 8, "Smartphone", true),
    new Product(3, "MacBook Pro M3", 45000000, 5, "Laptop", true),
    new Product(4, "AirPods Pro 2", 6500000, 0, "Accessories", false),
    new Product(5, "Apple Watch Ultra 2", 22000000, 12, "Wearable", true),
    new Product(6, "Magic Mouse", 2500000, 20, "Accessories", true)
];

// CÂU 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
function getNameAndPrice() {
    return products.map(product => ({
        name: product.name,
        price: product.price
    }));
}

// CÂU 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
function getInStockProducts() {
    return products.filter(product => product.quantity > 0);
}

// CÂU 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không

function hasExpensiveProduct() {
    return products.some(product => product.price > 30000000);
}

// CÂU 6: Kiểm tra xem tất cả các sản phẩm thuộc danh mục "Accessories" 
// có đang được bán (isAvailable = true) hay không
function areAllAccessoriesAvailable() {
    const accessories = products.filter(product => product.category === "Accessories");
    return accessories.every(product => product.isAvailable === true);
}

// CÂU 7: Tính tổng giá trị kho hàng (price × quantity)
function getTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
}

// CÂU 8: Dùng for...of Duyệt mảng products và in ra:
// Tên sản phẩm - Danh mục - Trạng thái
function displayProductsWithForOf() {
    console.log("\n=== CÂU 8: Duyệt mảng với for...of ===");
    for (const product of products) {
        const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
        console.log(`${product.name} - ${product.category} - ${status}`);
    }
}

// CÂU 9: Dùng for...in để:
// - In ra tên thuộc tính
// - In ra giá trị tương ứng
function displayProductPropertiesWithForIn() {
    console.log("\n=== CÂU 9: Duyệt thuộc tính với for...in ===");
    const firstProduct = products[0];
    console.log(`Sản phẩm mẫu: ${firstProduct.name}`);
    for (const property in firstProduct) {
        console.log(`  ${property}: ${firstProduct[property]}`);
    }
}

// CÂU 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
function getAvailableAndInStockProductNames() {
    return products
        .filter(product => product.isAvailable === true && product.quantity > 0)
        .map(product => product.name);
}

// HIỂN THỊ KẾT QUẢ TẤT CẢ CÁC CÂU
function displayAllResults() {
    console.log("=".repeat(60));
    console.log("BÀI TẬP JAVASCRIPT - PRODUCT OOP");
    console.log("=".repeat(60));

    // Câu 1 & 2
    console.log("\n=== CÂU 1 & 2: Danh sách sản phẩm ===");
    products.forEach(p => {
        console.log(`ID: ${p.id} | ${p.name} | ${p.price.toLocaleString('vi-VN')}đ | SL: ${p.quantity} | ${p.category}`);
    });

    // Câu 3
    console.log("\n=== CÂU 3: Mảng chỉ chứa name và price ===");
    const nameAndPrice = getNameAndPrice();
    console.log(nameAndPrice);

    // Câu 4
    console.log("\n=== CÂU 4: Sản phẩm còn hàng (quantity > 0) ===");
    const inStock = getInStockProducts();
    inStock.forEach(p => console.log(`${p.name} - Số lượng: ${p.quantity}`));

    // Câu 5
    console.log("\n=== CÂU 5: Có sản phẩm giá trên 30 triệu? ===");
    console.log(hasExpensiveProduct() ? "CÓ" : "KHÔNG");

    // Câu 6
    console.log("\n=== CÂU 6: Tất cả Accessories có đang bán? ===");
    console.log(areAllAccessoriesAvailable() ? "CÓ" : "KHÔNG");

    // Câu 7
    console.log("\n=== CÂU 7: Tổng giá trị kho hàng ===");
    console.log(`${getTotalInventoryValue().toLocaleString('vi-VN')}đ`);

    // Câu 8
    displayProductsWithForOf();

    // Câu 9
    displayProductPropertiesWithForIn();

    // Câu 10
    console.log("\n=== CÂU 10: Sản phẩm đang bán và còn hàng ===");
    const availableProducts = getAvailableAndInStockProductNames();
    availableProducts.forEach(name => console.log(`- ${name}`));

    console.log("\n" + "=".repeat(60));
}

// Tự động chạy khi load file
displayAllResults();
