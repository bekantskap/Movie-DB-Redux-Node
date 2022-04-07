import { Carousel, CarouselItem } from '../components/Carousel';
import StartCard from '../components/StartCard';

export default function Start(props) {
  const m = props.data.movies;

  const filteredCrime = m.filter(m => m.genres.includes('Crime'));
  const filteredComedy = m.filter(m => m.genres.includes('Comedy'));
  const filteredFantasy = m.filter(m => m.genres.includes('Fantasy'));
  const filteredDrama = m.filter(m => m.genres.includes('Drama'));
  const filteredAction = m.filter(m => m.genres.includes('Action'));
  const filteredAnimation = m.filter(m => m.genres.includes('Animation'));
  const filteredScifi = m.filter(m => m.genres.includes('Sci-Fi'));
  const filteredHorror = m.filter(m => m.genres.includes('Horror'));

  return (
    <main>
      <div className="start-text">
        <h1 className="start-header">Fake Movie Database</h1>
        <p>
          Personal movie database to keep track of movies to watch and review.
        </p>
      </div>
      <section className="start-genres__container">
        <div className="start-genres__wrapper">
          <h2>Drama</h2>
          <Carousel>
            {filteredDrama.map((movie, index) => {
              return (
                <CarouselItem>
                  <StartCard movie={movie} key={index} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
        <div className="start-genres__wrapper">
          <h2>Comedy</h2>
          <Carousel>
            {filteredComedy.map((movie, index) => {
              return (
                <CarouselItem>
                  <StartCard movie={movie} key={index} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
        <div className="start-genres__wrapper">
          <h2>Crime</h2>
          <Carousel>
            {filteredCrime.map((movie, index) => {
              return (
                <CarouselItem>
                  <StartCard movie={movie} key={index} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
        <div className="start-genres__wrapper">
          <h2>Fantasy</h2>
          <Carousel>
            {filteredFantasy.map((movie, index) => {
              return (
                <CarouselItem>
                  <StartCard movie={movie} key={index} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
        <div className="start-genres__wrapper">
          <h2>Animation</h2>
          <Carousel>
            {filteredAnimation.map((movie, index) => {
              return (
                <CarouselItem>
                  <StartCard movie={movie} key={index} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
        <div className="start-genres__wrapper">
          <h2>Action</h2>
          <Carousel>
            {filteredAction.map((movie, index) => {
              return (
                <CarouselItem>
                  <StartCard movie={movie} key={index} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
        <div className="start-genres__wrapper">
          <h2>Sci-Fi</h2>
          <Carousel>
            {filteredScifi.map((movie, index) => {
              return (
                <CarouselItem>
                  <StartCard movie={movie} key={index} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
        <div className="start-genres__wrapper">
          <h2>Horror</h2>
          <Carousel>
            {filteredHorror.map((movie, index) => {
              return (
                <CarouselItem>
                  <StartCard movie={movie} key={index} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
      </section>
    </main>
  );
}
