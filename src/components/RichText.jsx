// Hiển thị chuỗi có đánh dấu **in đậm** (không dùng dangerouslySetInnerHTML).
export default function RichText({ text, as: Tag = 'span', className }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return (
    <Tag className={className}>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? <strong key={i}>{p.slice(2, -2)}</strong> : p
      )}
    </Tag>
  );
}

export function plainText(text) {
  return String(text).replace(/\*\*/g, '');
}
