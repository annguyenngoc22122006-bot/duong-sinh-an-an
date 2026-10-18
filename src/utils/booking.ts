/**
 * Utility functions for Dưỡng Sinh An An booking and ecommerce logic
 */

export interface BookingPayload {
  name: string;
  phone: string;
  serviceId: string;
  branch: string;
  date: string;
  time: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateBookingForm(data: Partial<BookingPayload>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Vui lòng nhập họ và tên (tối thiểu 2 ký tự)';
  }

  const phoneRegex = /^(0|84)(3|5|7|8|9)[0-9]{8}$/;
  if (!data.phone || !phoneRegex.test(data.phone.replace(/[\s.-]/g, ''))) {
    errors.phone = 'Số điện thoại không hợp lệ (ví dụ: 0901234567)';
  }

  if (!data.serviceId || data.serviceId.trim() === '') {
    errors.serviceId = 'Vui lòng chọn dịch vụ bạn quan tâm';
  }

  if (!data.date) {
    errors.date = 'Vui lòng chọn ngày hẹn';
  }

  if (!data.time) {
    errors.time = 'Vui lòng chọn khung giờ hẹn';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
}

export function generateBookingCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'ANAN-';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export function calculateCartTotal(items: Array<{ price: number; quantity: number }>): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
