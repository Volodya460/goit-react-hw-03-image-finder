import { List, PreviewImg } from './ImageGallaryItem.styled';

export default function ImageGalleryItem({ arrr, openModal }) {
  const { id, webformatURL, tags } = arrr;
  return (
    <List
      key={id}
      onClick={() => {
        openModal(arrr.largeImageURL);
      }}
    >
      <PreviewImg src={webformatURL} alt={tags} />
    </List>
  );
}
