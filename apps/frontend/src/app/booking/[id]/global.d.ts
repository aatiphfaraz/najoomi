// Extend the Window interface for analytics and ads pixels
interface Window {
  fbq?: (...args: any[]) => void;
  gtag?: (...args: any[]) => void;
  gtag_report_conversion?: (url?: string) => boolean;
}
