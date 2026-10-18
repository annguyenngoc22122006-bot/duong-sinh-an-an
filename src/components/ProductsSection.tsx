import React, { useState } from 'react';
import { PRODUCTS_DATA, ProductItem } from '../data/landingData.ts';
import { formatVND } from '../utils/booking.ts';

interface ProductsSectionProps {
  onAddToCart: (product: ProductItem, quantity: number) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', address: '' });

  const handleOpenBuy = (prod: ProductItem) => {
    setSelectedProduct(prod);
    setQuantity(1);
    setOrderSuccess(false);
    setShowBuyModal(true);
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) return;
    setOrderSuccess(true);
  };

  return (
    <section id="products" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-widest block mb-2">
          Sản Phẩm Thảo Mộc Độc Quyền
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E35] [text-wrap:balance]">
          Mang không gian spa dưỡng sinh về ngôi nhà bạn
        </h2>
        <div className="w-16 h-0.5 bg-[#3D6A52] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#2C3E35]/75 leading-relaxed">
          Tất cả sản phẩm đều được sao tẩm, chưng cất thủ công theo bài thuốc cổ truyền, giữ trọn vẹn dược tính tự nhiên để bạn và gia đình tự chăm sóc mỗi ngày.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {PRODUCTS_DATA.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl border border-[#3D6A52]/15 p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
          >
            <div>
              {/* Product Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF7F2] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#2C3E35] px-2.5 py-0.5 rounded-full shadow-2xs">
                  {product.volume}
                </span>
              </div>

              {/* Rating & Sold count */}
              <div className="flex items-center justify-between text-xs text-[#2C3E35]/70 mb-2">
                <div className="flex items-center gap-1 text-[#C5A880]">
                  <i className="fa-solid fa-star text-[11px]"></i>
                  <span className="font-semibold text-[#2C3E35]">{product.rating}</span>
                </div>
                <span>Đã bán {product.soldCount.toLocaleString('vi-VN')}</span>
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-[#2C3E35] group-hover:text-[#3D6A52] transition-colors leading-snug line-clamp-2 mb-2">
                {product.name}
              </h3>

              <p className="text-xs text-[#2C3E35]/75 line-clamp-2 leading-relaxed mb-4">
                {product.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#FAF7F2]">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-serif text-xl font-bold text-[#3D6A52] tabular-nums">
                  {formatVND(product.price)}
                </span>
                <span className="text-xs text-[#2C3E35]/40 line-through tabular-nums">
                  {formatVND(product.originalPrice)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onAddToCart(product, 1)}
                  className="w-full py-2.5 px-3 rounded-xl border border-[#3D6A52]/30 hover:border-[#3D6A52] text-[#2C3E35] hover:text-[#3D6A52] bg-[#FAF7F2] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  title="Thêm vào giỏ hàng"
                >
                  <i className="fa-solid fa-cart-plus text-xs"></i>
                  <span>Thêm Giỏ</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenBuy(product)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#3D6A52] hover:bg-[#2C4B3A] text-white text-xs font-semibold transition-all shadow-2xs active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <span>Mua Ngay</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Buy Modal */}
      {showBuyModal && selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#3D6A52]/20 text-left relative">
            <button
              onClick={() => setShowBuyModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#3D6A52]/10 text-[#2C3E35] flex items-center justify-center transition-colors"
              aria-label="Đóng cửa sổ mua hàng"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>

            {orderSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#3D6A52]/10 text-[#3D6A52] flex items-center justify-center text-3xl mx-auto">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2C3E35]">
                  Đặt Hàng Thành Công!
                </h3>
                <p className="text-sm text-[#2C3E35]/80 max-w-sm mx-auto leading-relaxed">
                  Cảm ơn bạn <strong className="text-[#2C3E35]">{customerInfo.name}</strong>. Nhân viên An An sẽ gọi xác nhận đơn hàng tới số <strong>{customerInfo.phone}</strong> và giao nhanh trong 24h.
                </p>
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#3D6A52]/10 text-xs text-[#2C3E35]/80 space-y-1 text-left">
                  <div>Sản phẩm: <strong>{selectedProduct.name}</strong></div>
                  <div>Số lượng: <strong>{quantity}</strong></div>
                  <div>Tổng thanh toán (COD): <strong className="text-[#3D6A52] font-serif text-sm">{formatVND(selectedProduct.price * quantity)}</strong></div>
                  <div>Địa chỉ: <strong>{customerInfo.address}</strong></div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowBuyModal(false)}
                  className="bg-[#3D6A52] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-[#2C4B3A] transition-all"
                >
                  Hoàn Tất
                </button>
              </div>
            ) : (
              <div>
                <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-wider block mb-1">
                  Đặt Mua Nhanh Giao Tận Nơi
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C3E35] mb-4">
                  {selectedProduct.name}
                </h3>

                {/* Product preview strip */}
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#FAF7F2] border border-[#3D6A52]/10 mb-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="grow">
                    <span className="font-serif text-lg font-bold text-[#3D6A52] block">
                      {formatVND(selectedProduct.price)}
                    </span>
                    <span className="text-xs text-[#2C3E35]/70 block">{selectedProduct.volume}</span>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#3D6A52]/20 rounded-xl bg-white overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2.5 py-1 text-xs text-[#2C3E35] hover:bg-slate-50"
                      aria-label="Giảm số lượng"
                    >
                      <i className="fa-solid fa-minus text-[10px]"></i>
                    </button>
                    <span className="px-2.5 py-1 text-xs font-bold tabular-nums">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2.5 py-1 text-xs text-[#2C3E35] hover:bg-slate-50"
                      aria-label="Tăng số lượng"
                    >
                      <i className="fa-solid fa-plus text-[10px]"></i>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleConfirmOrder} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C3E35] uppercase tracking-wider mb-1.5">
                      Họ và tên người nhận <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Thị Mai"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3D6A52] bg-[#FAF7F2]/40 text-sm"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C3E35] uppercase tracking-wider mb-1.5">
                      Số điện thoại nhận hàng <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0912 345 678"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3D6A52] bg-[#FAF7F2]/40 text-sm"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C3E35] uppercase tracking-wider mb-1.5">
                      Địa chỉ nhận hàng (Số nhà, đường, phường, quận) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: 124 Lê Lợi, Phường Bến Thành, Quận 1"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3D6A52] bg-[#FAF7F2]/40 text-sm"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between text-sm font-semibold border-t border-[#3D6A52]/10">
                    <span>Tổng tiền thanh toán (COD):</span>
                    <span className="font-serif text-xl text-[#3D6A52] tabular-nums">
                      {formatVND(selectedProduct.price * quantity)}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3D6A52] hover:bg-[#2C4B3A] text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-sm active:scale-95"
                  >
                    Xác Nhận Đặt Mua (Thanh toán khi nhận hàng)
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
