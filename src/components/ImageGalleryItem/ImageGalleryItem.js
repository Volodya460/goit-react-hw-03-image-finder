export default function ImageGalleryItem({ arrr }) {
  const { id, webformatURL, tags } = arrr;
  return (
    <li key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
}
