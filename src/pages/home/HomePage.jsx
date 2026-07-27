import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeadingTitle from '../../components/heading-title/HeadingTitle';
import Services from '../../components/services/Services';
import Slider from '../../components/slider/Slider';
import { books } from '../../data/books';
import BookSlider from '../../components/book-slider/BookSlider';
import SearchResults from '../../components/search-results/SearchResults';

function parseReviews(reviews) {
  return Number(String(reviews).replace(/,/g, '')) || 0;
}

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search')?.trim() ?? '';

  const searchResults = useMemo(() => {
    if (!query) return [];
    const lower = query.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(lower) ||
        book.author.toLowerCase().includes(lower)
    );
  }, [query]);

  const mostGifted = useMemo(
    () => [...books].sort((a, b) => b.rating - a.rating),
    []
  );

  const bestSellers = useMemo(
    () =>
      [...books].sort(
        (a, b) => parseReviews(b.reviews) - parseReviews(a.reviews)
      ),
    []
  );

  const mostWished = useMemo(
    () => [...books].sort((a, b) => a.price - b.price),
    []
  );

  if (query) {
    return (
      <div className="home">
        <SearchResults query={query} results={searchResults} />
      </div>
    );
  }

  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title={'Most Gifted'} />
      <BookSlider data={mostGifted} />
      <HeadingTitle title={'Best Seller'} />
      <BookSlider data={bestSellers} />
      <HeadingTitle title={'Most wished for'} />
      <BookSlider data={mostWished} />
    </div>
  );
}
