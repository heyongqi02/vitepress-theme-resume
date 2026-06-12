const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s\-+()]+$/;
const HTTP_URL_PATTERN = /^https?:\/\//i;
const DOMAIN_URL_PATTERN = /^(?:[\w-]+\.)+[\w-]{2,}(?:\/[^\s]*)?$/;

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

  if (HTTP_URL_PATTERN.test(text)) {
    return text;
  }

  if (DOMAIN_URL_PATTERN.test(text)) {
    return `https://${text}`;
  }

  return undefined;
}
