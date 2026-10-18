import React, { useState } from 'react';
import { ProductItem } from '../data/landingData.ts';
import { formatVND, calculateCartTotal } from '../utils/booking.ts';

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [shippingInfo, setShippingInfo] = useState({ name: '', phone: '', address: '', note: '' });

  if (!isOpen) return null;

  const total = calculateCartTotal(items.map(i => ({ price: i.product.price, quantity: i.quantity })));

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.address) return;
    setCheckoutStep('success');
    onClearCart();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end transition-opacity"
    >
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between text-left animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-[#3D6A52]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-basket-shopping text-[#3D6A52]"></i>
            <h3 className="font-serif font-bold text-lg text-[#2C3E35]">
              {checkoutStep === 'cart' && `Giỏ Hàng Thảo Mộc (${items.length})`}
              {checkoutStep === 'checkout' && 'Xác Nhận Giao Hàng'}
              {checkoutStep === 'success' && 'Đặt Hàng Thành Công'}
            </h3>
          </div>
          <button
            onClick={() => {
              setCheckoutStep('cart');
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#3D6A52]/10 text-[#2C3E35] flex items-center justify-center transition-colors"
            aria-label="Đóng giỏ hàng"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto grow space-y-4">
          {checkoutStep === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-[#3D6A52]/50 flex items-center justify-center text-3xl mx-auto">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                  <p className="text-sm text-[#2C3E35]/70">Giỏ hàng của bạn đang trống</p>
                  <button
                    onClick={onClose}
                    className="text-xs font-semibold text-[#3D6A52] hover:underline"
                  >
                    Khám phá sản phẩm dưỡng sinh ngay
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#3D6A52]/10 flex items-center gap-3"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="grow overflow-hidden">
                        <h4 className="font-serif font-bold text-xs text-[#2C3E35] truncate">
                          {product.name}
                        </h4>
                        <span className="font-semibold text-xs text-[#3D6A52] block tabular-nums">
                          {formatVND(product.price)}
                        </span>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center border border-[#3D6A52]/20 rounded-lg bg-white">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(product.id, -1)}
                              className="px-2 py-0.5 text-xs text-[#2C3E35] hover:bg-slate-50"
                              aria-label="Giảm"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-bold tabular-nums">{quantity}</span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(product.id, 1)}
                              className="px-2 py-0.5 text-xs text-[#2C3E35] hover:bg-slate-50"
                              aria-label="Tăng"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(product.id)}
                            className="text-[11px] text-red-500 hover:underline ml-auto"
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {checkoutStep === 'checkout' && (
            <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#3D6A52]/10 text-xs space-y-1">
                <div className="flex justify-between">
                  <span>Số lượng món:</span>
                  <strong className="tabular-nums">{items.reduce((s, i) => s + i.quantity, 0)}</strong>
                </div>
                <div className="flex justify-between font-semibold text-[#3D6A52]">
                  <span>Tổng tiền thanh toán (COD):</span>
                  <span className="font-serif text-sm tabular-nums">{formatVND(total)}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2C3E35] mb-1">
                  Họ và tên người nhận <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Hoàng Thu Thủy"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#3D6A52]"
                  value={shippingInfo.name}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2C3E35] mb-1">
                  Số điện thoại nhận hàng <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0987 654 321"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#3D6A52]"
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2C3E35] mb-1">
                  Địa chỉ giao hàng chi tiết <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Số nhà, tên đường, phường, quận, thành phố..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#3D6A52] resize-none"
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2C3E35] mb-1">
                  Ghi chú cho người giao (Tùy chọn)
                </label>
                <input
                  type="text"
                  placeholder="Giao giờ hành chính, gọi trước khi đến..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#3D6A52]"
                  value={shippingInfo.note}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, note: e.target.value })}
                />
              </div>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#3D6A52]/10 text-[#3D6A52] flex items-center justify-center text-3xl mx-auto">
                <i className="fa-solid fa-check"></i>
              </div>
              <h4 className="font-serif font-bold text-xl text-[#2C3E35]">
                Đơn Hàng Đã Gửi Thành Công!
              </h4>
              <p className="text-xs text-[#2C3E35]/80 leading-relaxed max-w-xs mx-auto">
                An An đã tiếp nhận đơn đặt hàng của bạn. Chúng tôi sẽ gọi điện xác nhận trong 15 phút và đóng gói cẩn thận gửi đến bạn.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#3D6A52]/10 text-xs text-left space-y-1">
                <div>Người nhận: <strong>{shippingInfo.name}</strong></div>
                <div>Điện thoại: <strong>{shippingInfo.phone}</strong></div>
                <div>Địa chỉ: <strong>{shippingInfo.address}</strong></div>
                <div>Hình thức: <strong>Thanh toán khi nhận hàng (COD)</strong></div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-[#3D6A52]/10 bg-[#FAF7F2]">
          {checkoutStep === 'cart' && items.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#2C3E35]/70">Tạm tính:</span>
                <span className="font-serif font-bold text-lg text-[#3D6A52] tabular-nums">
                  {formatVND(total)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setCheckoutStep('checkout')}
                className="w-full bg-[#3D6A52] hover:bg-[#2C4B3A] text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-sm"
              >
                Tiến Hành Đặt Hàng COD
              </button>
            </div>
          )}

          {checkoutStep === 'checkout' && (
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="py-2.5 rounded-xl border border-gray-300 text-[#2C3E35] text-xs font-semibold hover:bg-white"
              >
                Quay Lại Giỏ
              </button>
              <button
                type="submit"
                form="checkout-form"
                className="py-2.5 rounded-xl bg-[#3D6A52] text-white text-xs font-semibold hover:bg-[#2C4B3A]"
              >
                Xác Nhận Đặt
              </button>
            </div>
          )}

          {checkoutStep === 'success' && (
            <button
              type="button"
              onClick={() => {
                setCheckoutStep('cart');
                onClose();
              }}
              className="w-full bg-[#3D6A52] text-white py-3 rounded-xl font-semibold text-xs"
            >
              Tiếp Tục Mua Sắm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
