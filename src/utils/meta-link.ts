const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s\-+()]+$/;

export function getMetaLabel(item: string | number): string {
  return String(item);
}

export function getMetaHref(item: string | number): string | undefined {
  const text = String(item).trim();

  if (EMAIL_PATTERN.test(text)) {
    return `mailto:${text}`;
  }

  if (PHONE_PATTERN.test(text)) {
    const digits = text.replace(/\D/g, "");
    if (digits.length >= 7) {
      return `tel:${digits}`;
    }
  }

  return undefined;
}
