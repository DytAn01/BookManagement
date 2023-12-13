document.addEventListener('DOMContentLoaded', function () {
    // Hiển thị đơn hàng từ local storage
    displayOrders();
  
    function displayOrders() {
      const orderTableBody = document.getElementById('orderTableBody');
      orderTableBody.innerHTML = '';
  
      // Lấy dữ liệu từ local storage
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
  
      // Hiển thị từng đơn hàng trong bảng
      orders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${order.customerName}</td>
          <td>${order.productName}</td>
          <td>${order.quantity}</td>
          <td>${order.total}</td>
          <td>${order.status}</td>
          <td>
            <button onclick="approveOrder(${index})">Duyệt</button>
            <button onclick="deleteOrder(${index})">Xóa</button>
          </td>
        `;
        orderTableBody.appendChild(row);
      });
    }
  
    // Hàm duyệt đơn hàng
    window.approveOrder = function (index) {
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[index].status = 'Đã duyệt';
      localStorage.setItem('orders', JSON.stringify(orders));
      displayOrders();
    };
  
    // Hàm xóa đơn hàng
    window.deleteOrder = function (index) {
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders.splice(index, 1);
      localStorage.setItem('orders', JSON.stringify(orders));
      displayOrders();
    };
  });
  