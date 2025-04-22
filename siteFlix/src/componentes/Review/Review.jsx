import reviewsDados from "../../../json/reviews.json";

const Review = () => {
  return (
    <section id="testimonies" className="pt-10 pb-20">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-azul rounded-lg md:text-center text-cn bg-amarelo  hover:cursor-pointer hover:bg-opacity-90">
              Reviews da galera
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-vanila md:text-center md:text-5xl">
              A opinião dos fãs importa{" "}
              <span className="text-vermelho">(e muito)</span>
            </h1>
            <p className="text-xl text-vanila md:text-center md:text-2xl">
              Confira os comentários de quem já maratonou.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reviewsDados.map((review, index) => (
            <div key={index} className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amarelo to-vermelho blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>

                <div className="relative p-4 space-y-4 leading-none rounded-lg ring-1 ring-gray-900/5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <img
                    src={review.poster}
                    alt={`Poster do filme ${review.title}`}
                    className="w-full sm:w-28 sm:min-h-[140px] sm:max-h-[200px] rounded-md object-cover shadow-md"
                  />

                  <div className="flex flex-col justify-between flex-1 h-full">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.avatar}
                        className="w-10 h-10 bg-center bg-cover rounded-full"
                        alt={review.name}
                      />
                      <div>
                        <h3 className="text-md font-semibold text-white">
                          {review.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{review.title}</p>
                      </div>
                    </div>
                    <p className="leading-snug mt-4 text-gray-300 text-base">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;